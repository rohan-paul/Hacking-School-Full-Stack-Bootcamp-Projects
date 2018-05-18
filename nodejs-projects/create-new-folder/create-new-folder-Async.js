let fs = require('fs');

fs.mkdir('newDirectory', function () {
	fs.readFile('readMe.txt', 'utf8', function (err, data) {
		fs.writeFile('./newDirectory/writeMe.txt', data, (err) => {
			if (err) throw err;
			console.log("Written to file and saved");
		});
	});
});

// Because, I am using the async version of functions, so I MUST have to pass a callback. So if I dont pass the err handling callback to writeFile, the code will crash