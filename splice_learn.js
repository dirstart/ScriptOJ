// 自己的题目，将"hello,wold" 变成 "hello,world"

var a="hello,wold";
// 因为a是String类型，不能直接使用Array类型的方法splice
// a.splice(8,0,'r');     // out:  a.splice is not a function


b=a.split('');
b.splice(8,0,'r');
b=b.join('');
console.log(a,b);
