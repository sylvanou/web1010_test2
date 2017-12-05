// Create a new function called "efficient" below the "msytery" function that returns
// the same value as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}

const efficient = (mystery, x, y) =>
  mystery(x, y);

var x = 3
var y = 4
console.log(mystery(x,y))
console.log(efficient(mystery, x, y))