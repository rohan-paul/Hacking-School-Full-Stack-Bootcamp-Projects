var fs = require('fs');
var path = require('path');

// Windows?
var win32 = process.platform === 'win32';
// Normalize \\ paths to / paths.
function unixifyPath(filepath) {
  if (win32) {
    return filepath.replace(/\\/g, '/');
  } else {
    return filepath;
  }
};

// Recurse into a directory, executing callback for each file.
function walk(rootdir, callback, subdir) {
  var abspath = subdir ? path.join(rootdir, subdir) : rootdir;
  fs.readdirSync(abspath).forEach(function(filename) {
    var filepath = path.join(abspath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(rootdir, callback, unixifyPath(path.join(subdir || '', filename || '')));
    } else {
      callback(unixifyPath(filepath), rootdir, subdir, filename);
    }
  });
};

walk(__dirname, function(filepath, rootdir, subdir, filename) {
  console.log('Filepath', filepath);
});