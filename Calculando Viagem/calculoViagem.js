let line = gets().split(" ");
let x = parseInt(line[0]);
let y = parseInt(line[1]);

let media = (x*y)/12;        
let mediaFinal = media.toFixed(3);

print(" " + mediaFinal);