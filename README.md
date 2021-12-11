# Nodejs
solution NodeJS and MongoDB Tutorial #2 - Creating a Node Server


Open your encoding.js folder in node_modules>whatwg-url>dist

and write this code

"use strict";
var util= require('util');
const utf8Encoder = new util.TextEncoder();
const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });
