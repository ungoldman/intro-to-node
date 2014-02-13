// To run this program, you'll need to install a package from npm.
// To install a particular package to the directory you're in, type:

// npm install PACKAGE-NAME

// "request" is a module that makes requests to web pages. Observe!
var request = require('request');

request('http://nodeschool.io', function (error, response, body) {
  if (error) {
    return;
  }

  if (response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
});
