/** reads 5 random 2digit values and find sum and average */
let random1 = Math.floor(Math.random() * 90) + 10;
let random2 = Math.floor(Math.random() * 90) + 10;
let random3 = Math.floor(Math.random() * 90) + 10;
let random4 = Math.floor(Math.random() * 90) + 10;
let random5 = Math.floor(Math.random() * 90) + 10;
console.log("Random numbers are :" + random1, +random2, +random3, +random4, +random5);
let sum = random1 + random2 + random3 + random4 + random5;
console.log("Sum :" + sum);
let average = sum / 5;
console.log("Average :" + average);