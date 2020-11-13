const readFile = require("./helper/readFile");

let x = readFile('2.txt');
let y = x.map(subarr => {
  return subarr.split("\t").map(v => +v).sort((a,b) => a-b);
});
let total = 0;
y.map(number => {
  total += number[number.length -1] - number[0];
});
return total;
