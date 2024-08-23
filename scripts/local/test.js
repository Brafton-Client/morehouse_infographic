const replace = require('replace-in-file');
const package = require('../../package.json');
console.log(package.name);

// const options = {
//     files: './package.json',
//     from: /basebuild/g,
//     to: 'brafton_demo'
// }
// try{
//     replace(options).then(res=>{
//         console.log(res);
//     })
// }catch(e){
//     console.log(e);
// }