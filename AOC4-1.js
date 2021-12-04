const fs = require("fs");

const lines = fs
	.readFileSync('day4-1.txt', { encoding: "utf-8" })
	.split("\n\n")
	.filter((x) => Boolean(x));



const bingo = lines[0];

console.log('Bingo numbers are: ' + bingo);
let tables = [];
for (let i = 1; i < lines.length; i++)
{
	for (let j = 0; j < 5; j++)
		tables[i - 1][j] = lines[i][j];
} 
console.log(tables[0]);

