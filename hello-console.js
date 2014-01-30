// In this example we're going to do some basic addition with arguments passed
// via the command line.

// "process.argv" is an array containing the command line arguments. See
// http://nodejs.org/docs/latest/api/process.html#process_process_argv for more
// info.

// For clarity's sake we're going to print the array to the terminal so you can
// see what it looks like.
console.log(process.argv);

// The first two arguments are almost always the program used to run the script
// (in this case node) and the script itself. For this exercise we're going to
// slice them off the array so that we're only dealing with the arguments
// passed after we called the program.
var args = process.argv.slice(2);

// Here we're creating a variable and setting it to zero to track the sum of
// all numbers passed as arguments.
var sum = 0;

// Now we're looping through each of the arguments and adding them to the sum.
// Arguments are strings by default, so we're using some parseInt() to parse
// the string into an integer of base 10.
for (var i = 0; i < args.length; i++) {
  sum += parseInt(args[i], 10);
}

// Once we're done with our calculation, we show the final number.
console.log(sum);
