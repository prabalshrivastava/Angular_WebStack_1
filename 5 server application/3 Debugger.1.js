var fs = require('fs');
fs.readFile('3 Debugger.js','utf-8',function(err,data){
    debugger;
    if(err)
        throw err;
    console.log(data);
});