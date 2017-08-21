var a="hello,wold";
a.split('').splice(8,0,'r');
console.log(a);  // hello,wold
b=a.split('');
b.splice(8,0,'r');
b=b.join('');

console.log(b);
