#!/usr/bin/env node

var passhashSync = require("./").passhashSync;
var args = process.argv.slice(2);

var password = args.shift();
var salt = args.shift();

if (!salt) {
  console.log("No salt given");
  process.exit();
}

console.log(passhashSync(password, salt).toString("base64"))
