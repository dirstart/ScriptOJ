const zeroize = (n, len) => {
  len = len || 2;
  n +='';
  while (n.length < len) {
    n = '0' + n;
  }
  return n;
}

console.log(zeroize(5));

