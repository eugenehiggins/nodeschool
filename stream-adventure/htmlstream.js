var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through2');
var stream = through(write,end);


var selection = tr.select('.loud').createStream();

selection.pipe(stream).pipe(selection);

function write (buffer,enc,next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done) {
	done();
}

process.stdin.pipe(tr).pipe(process.stdout);
