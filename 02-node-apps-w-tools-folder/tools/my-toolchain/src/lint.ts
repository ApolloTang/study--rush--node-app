#!/usr/bin/env node

import * as colors from 'colors';
import * as child_process from 'child_process';

console.log('Invoking my-toolchain...');

// child_process.execSync('tsc', { stdio: 'inherit' });
// child_process.execSync('./node_modules/.bin/tsc', { stdio: 'inherit' });
child_process.execSync('./node_modules/my-toolchain/node_modules/.bin/eslint', { stdio: 'inherit' });

console.log(colors.green('Success!'));
