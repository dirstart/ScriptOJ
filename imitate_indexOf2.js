Array.prototype.indexOf=function(index){
	var res=-1,
		now=null,
		len=this.length;
	if(len==0) return res;
	for(var i=0;i<len;i++){
		now=this[i];
		if(index==now){
			res=i;
			break;
		}
	}

	return res;
}

var test=['234','23424','30'];

console.log(test.indexOf('30'));