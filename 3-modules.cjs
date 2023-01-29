// date - 29th Jan 23

// free code camp -- Node.js and Express.js - Full Course
//----------------------------------------------------------------

// First Code

//----------------------------------------------------------
/*

const amount = 9;
if (amount < 10) {
    console.log("Small number");

}
else 
{
    console.log("large number");
}

console.log(`hey this this my first node js app!`);
*/

//-----------------------------------------------------------------------

// Global - No Window !!!
// __dirname - path to current directory
// __filename - file name
// require - function t use modules( CommonJS)
// process - info about env where the program is being executed

// Global

//--------------------------------------
/*

console.log(__dirname);

setInterval(() => {
    console.log("Hello World");
}, 1000);


*/
//------------------

// Modules in Node

//-------------------------------
const names = require('./4-names.cjs')
const sayHi = require('./5-utils.cjs')
require ('./7-mind-grenade.cjs')

const data = require('./6.alternative-flavor.cjs')

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// Built - in Modules in JS

