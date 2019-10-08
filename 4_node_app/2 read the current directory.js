console.log(__dirname);//gives the current directory
console.log(__filename);//gives the current filename
const path = require('path'); //here path is a module of nodejs
var parsedPath = path.parse(__filename);
console.log(parsedPath);

const os1 = require('os');
var totmem = os1.totalmem;//executes totalmem()
console.log(os1.totalmem);//prints the entire function body 
console.log(`totmem : ${totmem}`);


var freemem = os1.freemem;//executes freemem()
console.log(os1.freemem);//prints the entire function body 
console.log(`totmem : ${freemem}`);