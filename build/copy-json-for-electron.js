const fs = require( 'fs' )

let data = fs.readFileSync('./build/elec-pack.json');
console.log(data.toString())

fs.writeFileSync('./dist/package.json',data);