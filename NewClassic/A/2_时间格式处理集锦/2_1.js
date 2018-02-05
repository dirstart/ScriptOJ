const pre1 = Date.parse(new Date()); // 1517828782000
const pre2 = Date.now(new Date());   // 1517828814628
const pre3 = (+ new Date());         // 1517828814628
console.log(pre1, pre2, pre3);
console.log(new Date());