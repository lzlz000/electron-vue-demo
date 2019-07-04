const fs = require( 'fs' )

// let data = fs.readFileSync('package.json');
// console.log(data.toString())

// fs.writeFileSync('dist/package.json',data);

data = fs.readFileSync('build/electron.js');
fs.writeFileSync('dist/index.js',data);