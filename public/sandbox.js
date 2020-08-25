"use strict";
//tsc sandbox.ts -w to continually compile on saving
// TUTORIAL: https://www.youtube.com/watch?v=157NopQ-chU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=4
//---- lesson 6 ------
/* better workflow tsconfig

- use:[ tsc --init ] in terminal to creat tsconfig file
- change the root directory in tsconfig to ./src and out directory to ./public
- add "include": [
    "src"
  ]
  to the bottom of the config
*/

//---- lesson 7 (actually 8) ----
let greet = () => {
  console.log('hi');
};