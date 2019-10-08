const _fs = require('fs');
const currentDirectory = '/4_node_app';
var currentPath = process.cwd();
console.log(currentPath);
const files = _fs.readdirSync(currentPath);
//sync waits for the other functions to execute and then will execute the function
_fs.readdir('./',function(err,files1){
    if(err){
        console.log(err);
    }else{
        console.log(files1);
    }
});
console.log(files);
    


var currentFile = __filename;
//currentFile = "wrongDirectoryPath"
_fs.readFile(currentFile,function(err,fileContent){
    if(err){
        console.log(err);
    }else{
        console.log(fileContent.toString());
    }
});

