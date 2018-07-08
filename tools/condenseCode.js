#!/usr/bin/env node

var filePath = require('path').join(process.argv[2]);
console.log(filePath);
console.log('', require('fs').readFileSync(filePath).toString().replace(/\n/ig, '\\n'));
