const fs = require( 'fs' )

// let data = fs.readFileSync('package.json');
// console.log(data.toString())

// fs.writeFileSync('dist/package.json',data);
fs.writeFileSync('dist/package.json',fs.readFileSync('package.json'));
fs.writeFileSync('dist/electron.js',fs.readFileSync('build/electron.js'));