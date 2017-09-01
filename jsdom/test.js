var a=['323',2342,23,23,123,2];

const Unique=(array)=>{
	let obj={};
	let res=[];

	for(var i=0;i<array.length;i++){
		if(!obj[array[i]]){
			res.push(array[i]);
			obj[array[i]]=true;
		}
	}

	return res;
}

console.log(Unique(a));