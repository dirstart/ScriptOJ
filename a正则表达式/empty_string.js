let a="This is our world.";
let b="If I'm a hero,don't ask me where I'm from.If I'm a jerk,don't ask me the age."
// my first

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
a.show();
console.log(a.trim());