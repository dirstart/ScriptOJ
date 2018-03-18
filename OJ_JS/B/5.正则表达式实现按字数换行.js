let testStr = 'We have presented and implemented an experimental Bluetooth mobile-based\
remote controller for Home Entertainment Centre in the ubiquitous and mobile\
computing develop';

const format = str => {
  let res = str.replace(/\n/g, '-');
  res = res.replace(/(.{4})/g, '$1\n');
  console.log(res);
  return res;
}
format(testStr)
