// addClass(dom, name)：给 dom 元素添加类名 name
// removeClass(dom, name)：把 dom 元素的类名 name 删除
// hasClass(dom, name)：判断 dom 元素是否有类名 name


const addClass=(dom,name)=>{
	dom.className+=`${name}`;
}
const addClass2=(dom,name)=>{
	dom.classList.add(name);
}

const removeClass=(dom,name)=>{
	let names=dom.className.split(' ');
	let i=names.indexOf(name);
	if(i>-1){
		names.splice(i,1);
		dom.className=names.join(' ');
	}
}
const removeClass2=(dom,name)=>{
	dom.classList.remove(name);
}
const hasClass=(dom,name)=>{
	let names=dom.className.split(' ');
	return names.indexOf(name)>-1
}
const hasClass2=(dom,nmae)=>{
	return dom.classList.contains(name);
}

