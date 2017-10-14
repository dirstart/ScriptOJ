let a="  This is our world.";
// 1.my first
String.prototype.show=function(){
	console.log(this);
	return this;
}
String.prototype.trim=function(){
	let res=[];
	let old=this.split('');
	old.forEach((item)=>{
		if(item!==' '){
			res.push(item);
		}
	})
	res=res.join('');
	return res;
}
// a.show();
// console.log(a.trim());

// 2.my second ，在数组操作上的优化
const trim2=(str)=>{
	let res=[];
	let old=str.split('');
	res=old.filter(item=>item!==' ').join('');
	return res;
}
// console.log(trim2(a));

// 3.reg third，为了体现正则的好像，可以对比一下前面的
//   有话好好说，为什么要把我从字符串变成数组操作？
const trim_of_reg=(str)=>{
	return str.replace(/\s+/g,"");
}
// console.log(trim_of_reg(a));

// 4.只去除两边的空格
const trim_reg2=(str)=>{
	return str.replace(/^\s*|\s*$/,"");
}
console.log(trim_reg2(a));
// 5.只去除尾空格
const trim_reg3=(str)=>{
	return str.replace(/\s*$/,'');
}
console.log(trim_reg3(a));