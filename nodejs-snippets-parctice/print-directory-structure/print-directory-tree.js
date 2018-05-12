// This function will give a list of files and directories, but will not do so recursively

const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})