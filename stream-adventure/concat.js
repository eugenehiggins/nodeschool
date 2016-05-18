var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
	var tempStr = body.toString().split('').reverse().join('');

	console.log(tempStr);
}));