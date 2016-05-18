var through = require("through2");
var split = require('split');

var stream = through(write,end);

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);

var lower = true;

function write(buffer,encoding,next){
	if(lower === true) {
		this.push(buffer.toString().toLowerCase() + '\n');
	} else {
		this.push(buffer.toString().toUpperCase() + '\n');
	}
	
	lower = !lower;

	next();
}

function end(done){
	done();
}