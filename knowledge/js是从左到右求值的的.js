let a={n:2};
a.x=a={n:3};

console.log(a.x,a); //undefined,{n,3}

// 因为从左到右，所以先求的其实是a.x,而此时的右边是(a={n:3})，最后我们会把括号内的内容的值赋值给a.x

// 然后呢，对象左发现a里面没有x，于是干脆就创建了一个x，x老神在在，那好吧，我等着结果

// 这个时候，a的指向指到了{n:3}，a.x不干了，显示undefined

// 然后给a赋值，照常


var a={n:1};
var b=a;
a.x=a={n:2};
console.log(a) // {n:2}
console.log(b) // {n:1,x:{n:2}}
console.log(a.x) // undefined
console.log(b.x) // {n:2}

// a={n:1}  =>  b={n:1}  => 
// 在JS中，若是'.'和'='同时还出现，先进行'.'操作
// 于是乎，没有先执行右边的赋值，而是先执行了给 a 增加 x 属性这一操作
// =>  a.x={n:2}  在这里的时候a={n:1,x:{n:2}}  =>
// 这时候 a指向了  {n:2}  ，a变了，a被重新复制了，天地变化。
// （因为这里a变成了{n:2}所以结局问a.x是没有这个属性的） 
// => 由于b一直都是a的镜子，跟随着a的变化，直到a不再指向那个地址
