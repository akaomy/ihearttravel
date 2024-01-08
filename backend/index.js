#!/usr/bin/env node

const port = (process.argv[2] || process.env.PORT || 4100);
const http = require('http');

http.createServer((req, res) => {
  console.dir(req.url);
  console.dir(req.headers);
  console.dir(req.statusCode);
  console.dir(req.statusMessage);
  const nameArg = capitalize(req.url.replace(/[^\w.,-]/g, ' ')
      .replace(/\s+/g, ' ').trim() || 'world');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<p>Hello ${nameArg}!</p>`);
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);

/**
 * capitalizes each word in a passes string
 *
 * @param {String} str - given string
 * @return {String} - string with capitalizes first letters
 */
function capitalize(str) {
  return str.trim().toLowerCase().split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
