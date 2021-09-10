const input = gets();
let a = input;

for (let cont = 0; cont < 10; cont++) {
  console.log(`N[${cont}] = ${a}`);
  a = a * 2;
}