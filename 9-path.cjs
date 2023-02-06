
const { basename } = require('path');
const path = require('path');

// it will give you file name that you are using right at that moment
console.log(__filename);

// it will give you the directory of the path that you are using

console.log( __dirname);

// to get the last name of the directory you can use

console.log(basename(__filename));

// to get the last name of the directory of the file you can do this 
console.log(basename(__filename));

// to get the ext name of the file you can do 
console.log(path.extname( __filename));

// sparse method 
 // in this method the path is parsed down into fragmentation. It will give you a object 
 console.log(path.parse(__filename))



console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);