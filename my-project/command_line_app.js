#!/usr/bin/env node

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// var rl2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// var answer1 = rl1.question
// var answer2 = rl2.question

// var add = function {
// 	answer1 + answer2
// }



rl.question("Please give me a number? ", function(answer1) {
	rl.question("Please give me a second number? ", function(answer2) {
		var sum = parseInt(answer1) + parseInt(answer2);
		console.log('sum is: %d. wasn\'t that fun?', sum);
		rl.close();
	});
});
