// 数组['apple','pine','orange'] 实现首字母大写
//One
const Upper=(arr)=>{
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
	}
	return arr;
}

const arr=['apple','pine','orange'];
console.log(Upper(arr));

// Two 
