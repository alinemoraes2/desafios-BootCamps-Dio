const isSum = gets() === "S";

let arr = [];

let xStart = 1, xEnd = 11;
let yStart = 0, yEnd = 4;

let sum = 0;

for (let y = 0; y < 12; y++) {
    for (let x = 0; x < 12; x++) {
        if(arr[y] == undefined) {
            arr[y] = [];
        }
        arr[y][x] = parseFloat(gets());
    }     
}

while(yStart <= yEnd) {
    for (let i = xStart; i != xEnd; i++) {
        sum += arr[yStart][i];       
    }
    yStart++;
    xStart++;
    xEnd--;
}

let result = 0;

if(isSum) {
  result = sum;
}
else {
  result = (sum / 30);
}
console.log(result.toFixed(1))