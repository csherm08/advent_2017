const readFile = require("./helper/readFile");

let x = readFile('2b.txt');



let Y = x.map(subarr => {
  return subarr.split("\t").map(v => +v).sort((a,b) => a-b);
});
function divisible(y) {
  let i = 0;
  while(i < y.length) {
    let j = y.length - 1;
    while (j > i) {
      let low = y[i];
      let high = y[j];
      if (y[j] % y[i] === 0) {
        return high/low;
      }
      j-=1;
    }
    i+=1;
  }
}
let total = 0;
for(let y of Y) {
 total += divisible(y);
}
console.log(total);
