// This is a workaround for https://github.com/eslint/eslint/issues/3458
 require("@rushstack/eslint-config/patch/modern-module-resolution");

 module.exports = {
   root: true,
   extends: [
     "@rushstack/eslint-config/profile/node"
   ],
   ignorePatterns: ['.eslintrc.js'],
   parserOptions: {
     project: 'tsconfig.heft.json',
     tsconfigRootDir: __dirname,
     sourceType: 'module',
     ecmaVersion: 2015,
   },
   rules: {
    'no-console': 'warn',
   },
 };


