const fs = require('fs-extra');

//------ move files-------//
const src = './client/build';
const dest = './dist/public';
fs.move(src, dest, { overwrite: true } , err => console.log(err))
//------ move files-------//