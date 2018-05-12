/* node script for creating a new folder
*/

// Synchronous version
let fs = require('fs');

try {
	fs.mkdirSync("New-Node-Directory");
	console.log("New-Node-Directory created");
} catch (err) {
	if(err.code == 'EEXIST') {
		console.log('The directory name already exists');
	} else {
		console.log(err);
	}
}