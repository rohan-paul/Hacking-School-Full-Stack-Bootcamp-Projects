/*Accessing folder recursively with Node.js - slight modification from grunt source code*/

let fs = require('fs');
let path = require('path');

// conver windows file path
let win32 = process.platform === 'win32';

function pathConversionToUnix (filepath) {
  if (win32) {
    return filepath.replace(/\\/g, '/');
  } else {
    return filepath;
  }
}

// Recursively traverse the directory, executing callback for each file.
function traverseRecurse (rootdir, callback, subdir) {

  let absPath = subdir ? path.join(rootdir, subdir) : rootdir;

  // readirSyn will return all the file names, so with forEach get the absolute filePathNames of all of them
  fs.readdirSync(absPath).forEach(function(filename) {
    let filePath = path.join(absPath, filename);

    //Now recursively apply this function again, if its a dirctory (i.e. not a file`)
    if (fs.statSync(filePath).isDirectory()) {
      traverseRecurse(rootdir, callback, pathConversionToUnix(path.join(subdir || '', filename || '')));
    } else {
      callback(pathConversionToUnix(filePath), rootdir, subdir, filename);
    }
  });
};

//Invoke the above function on the current directory
traverseRecurse(__dirname, function(filepath, rootdir, subdir, filename) {
  console.log('Filepath', filepath);
})