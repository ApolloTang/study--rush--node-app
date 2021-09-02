#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const child_process = require("child_process");
console.log('Invoking my-toolchain...');
// child_process.execSync('tsc', { stdio: 'inherit' });
// child_process.execSync('./node_modules/.bin/tsc', { stdio: 'inherit' });
child_process.execSync('./node_modules/my-toolchain/node_modules/.bin/tsc', { stdio: 'inherit' });
console.log(colors.green('Success!'));
//# sourceMappingURL=start.js.map