<script>
(function () {
  const $ = (id) => typeof id === "string" ? document.getElementById(id) : null;

  const Box = function () {};
  const Particle = function () {};

  Box.prototype = {
    pool: [],
    ctx: null,
    width: 300,
    height: 150,
    timer: 0,
    init: function (canvasId, wrapId) {
      this.wrapId = wrapId;
      let canvas = $(canvasId);
      const wrap = $(wrapId);
      if (!wrapId) {
        return;
      }

      if (!canvas) {
        const o = document.createElement("canvas");
        o.setAttribute("id", "bubbleCanvas");
        o.style="width: 100%;height:100%;position: absolute;top: 0;left: 0;";
        o.innerHTML = "您的浏览器不支持 Canvas 动画.";
        wrap.appendChild(o);
        canvas = o;
      }

      this.ctx = canvas.getContext('2d');
      this.width = wrap.offsetWidth > 300 ? wrap.offsetWidth : 300;
      this.height = wrap.offsetHeight > 150 ? wrap.offsetHeight : 150;
      canvas.width = this.width;
      canvas.height = this.height;
      
      for (let x = 0; x < this.width * 0.1; x++) {
        var c = new Particle();
        this.pool.push(c);
      }

      this.animate();
    },
    animate: function () {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.pool.length; i++) {
        this.pool[i].init(this.ctx, this.width, this.height);
      }
      /**
       *  使用 requestAnimationFrame的好处，一旦页面不处于浏览器的当前标签，就会自动停止刷新。这就节省了CPU、GPU和电力。
       *  下面的其实是该功能的一个 polyfill.
      **/
      window.requestAFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame 
          || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
          || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
      })();
      this.timer = window.requestAFrame(this.animate.bind(this));
    },
    resize: function (id) {
      if (this.timer) {
        window.cancelAnimationFrame(this.timer);
      }
    }
  };

  Particle.prototype = {
    haveInit: false,
    ctx: null,
    width: 300,
    height: 150,
    positionX: 0,
    positionY: 0,
    alpha: 0,
    scale: 0,
    velocity: 0,
    init: function (ctx, width, height) {
      // 初始效果
      if (!this.haveInit) {
        this.haveInit = true;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.positionX = Math.random() * this.width;
        this.positionY = this.height + Math.random() * 100;
        this.alpha = 0.1 + Math.random() * 0.3;
        this.scale = 0.1 + Math.random() * 0.3;
        this.velocity = Math.random();
        return;
      }

      // 变化 => 重置
      if(this.alpha <= 0) {
        this.haveInit = false;
        this.init(ctx, width, height);
      }
      
      // 变化效果
      this.positionY -= this.velocity;
      this.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(this.positionX, this.positionY, this.scale * 10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
      ctx.fill();
    }
  }

  let box = new Box();
  box.init("bubbleCanvas", "blogTitle");

  // 销毁重建 => 光销毁 box 是不行的，还要销毁粒子效果的 粒子们。
  window.onresize = function () {
    box.resize();
    box.pool = [];
    box.init("bubbleCanvas", "blogTitle");
  }

}());
</script>