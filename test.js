var a=[{
	age:18,
	name:'lihua'
},{
	age:100,
	name:'zengcuo'
}];
function isBig(element,index,array){
	return (element.age>=30);
}
a.filter(isBig);
console.log(a);   //与原来相同，说明不改变原数组
var filtered=a.filter(isBig);
console.log(filtered); // [{age:100,name:'zengcuo'}]