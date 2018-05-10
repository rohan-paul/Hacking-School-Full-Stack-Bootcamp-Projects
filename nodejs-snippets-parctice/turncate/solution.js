const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

// the  below "files" variable will only contain the list of files in the "files" directory. Only names and nothing else.
const files = fs.readdirSync(dirname);

files.forEach(file => {

	const filePath = path.join(dirname, file);
	fs.stat(filePath, (err, stats) => {
		if (err) throw err;

		fs.truncate(filePath, stats.size/2, (err) => {
			if (err) throw err;
		});
	});
});