function Person() {
  this.name = 'a';
}

Person.prototype = {
  constructor: 8,
  name: 9
}

var b = new Person();
delete(b.name);

console.log(b);
console.log(b.contructor);