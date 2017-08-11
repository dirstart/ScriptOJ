// https://scriptoj.com/problems/89

// One ：使用ES6 Set
const unique = (arr) => {
    let new_set = new Set(arr);
    let new_arr = [];
    // for(let x of new_set){
    // 	new_arr.push(x);
    // }
    //但是其实有更好的办法转换为数组
    new_arr = Array.from(new_set);
    return new_arr;
}
// console.log(unique([1,2,323,1]))

// Two  :使用对象key
const unique2 = (arr) => {
    let obj = {};
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            result.push(arr[i]);
            obj[arr[i]]=1;
        }
    }
    return result

}

// Super Two
const unique2s=(arr)=>{
	let obj={},
		result=[],
		length=arr.length;
	let safe_key;
	for(let i=0;i<length;i++){
		safe_key=typeof arr[i]+arr[i];
		if(!obj[safe_key]){
			obj[safe_key]=1;
			result.push(arr[i]);
		}
	}
	return result;
}
console.log(unique2s([3231, 123132, 12, '12',12, 12, 1313, 324, 3231]))