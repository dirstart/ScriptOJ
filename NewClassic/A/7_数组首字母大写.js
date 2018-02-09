const Upper = (arr) => {
  const res = [];
  for (const item of arr) {
    const newItem = item[0].toUpperCase() + item.slice(1);
    res.push(newItem);
  }
  return res;
}

const test = ['apple', 'pear', 'banana'];
const res = Upper(test);
console.log(res);