var obj = {
  value: 0,
}

global.a = 8;

obj.double = function() {
  console.log(this.value);
  var oThat = this;
  var test = function() {
    console.log(this.a);
  }
  test();
}

obj.double();