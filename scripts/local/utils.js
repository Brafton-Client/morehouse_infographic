const colors = require('colors/safe');
var fs = require("fs");
async function removefolder(path, errorMessage = "There was an error deleteing your folder "){
    try{
        return fs.rmdirSync(path, {recursive: true});
    }catch(e){
        console.log( colors.red(errorMessage + path));
    }
}
async function createFolder(path, errorMessage = "there was an error creating your folder "){
    if(!fs.existsSync(path)){
        try{
            return fs.mkdirSync(path);
        }catch(e){
            console.log( colors.red(errorMessage + path));
        }
    }
    return true;
}
async function removeFile(path, errorMessage = "There was an error deleteing your folder "){
    try{
        return fs.unlinkSync(path);
    }catch(e){
        console.log(colors.red(errorMessage));
    }
}
async function createFile(path, content, errorMessage = "There was an error creating "){
    try{
        return fs.writeFileSync(path, content);
    }catch(e){
        console.log(e, colors.red(errorMessage + path));
    }
}
module.exports = {
    removefolder,
    removeFile,
    createFile,
    createFolder
};