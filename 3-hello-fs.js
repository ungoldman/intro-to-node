// Now we're going to play with a node.js module.
// This one is "fs" (for file system), and is built-in, so you don't need to
// download anything from npm to use it.
// Read more: http://nodejs.org/api/fs.html

// This statement brings the functionality of the module into our script.
var fs = require('fs');

// This function reads a directory based on a unix file pattern.
// In this case it's the current directory.
fs.readdir('.', function (err, files) {
  // A common and expected pattern in node is to return an error first, then
  // the object or objects expected to be returned if everything worked.
  // If there is no error, "err" will be null.
  if (err) {
    console.log(err);
    return;
  }

  // Now we're going to iterate over each file, add a trailing slash to the
  // filename if it's a directory, then print the filename to the console.
  files.forEach(function (file) {
    // "fs.stat" returns some statistical information on the file.
    // In this case we want to know whether or not the file is a directory.
    fs.stat(file, function (err, stat) {
      if ( stat.isDirectory() ) {
        file += '/';
      }
      console.log(file);
    });
  });
});

// A note on node.js and fancy javascript:

// Array.forEach is an array prototype function that exists in ECMAScript 5,
// which is not fully supported by older browsers. This is fine to use any
// time in node but it's best to be cautious in the browser depending on what
// browsers you're targeting. Here's a handy compatibility table:
// http://kangax.github.io/es5-compat-table/

// Node can interpret a version of JavaScript that is not universal to the
// web. This is the version V8 uses, which follows Blink fairly closely
// (citation needed).
