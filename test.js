let array=[1,2,3,5,7,8,11,21,33];
function ran(){
	return 0.5 - Math.random();
}
array.sort(ran());
console.log(array);   //  [1,11,2,21,3,33,5,7,8]