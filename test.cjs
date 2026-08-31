const fs = require('fs');
let html = fs.readFileSync('C:/mycelium/maderart/index.html', 'latin1');
let utf8Html = Buffer.from(html, 'latin1').toString('utf8');
let doubleUtf8Html = Buffer.from(utf8Html, 'latin1').toString('utf8');
console.log(doubleUtf8Html.substring(0, 500));