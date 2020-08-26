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
//    Function Basics
function lesson8() {
    var greet = function () {
        console.log('hi');
    };
    greet = 'hi'; //cannot change to string because greet is set to a function
    // optional parameter: add a question mark after the variable name
    // c?: number  
    // default parameter: see function below
    // default params should be put at the end 
    var add = function (a, b, c) {
        if (c === void 0) { c = 10; }
        console.log(a + b);
    };
    add(5, 10);
    // returning
    var minus = function (a, b) {
        return a + b;
    };
    // typescript will infer the type of the return value of the funciton
    var result = minus(10, 7);
    // you can also specify the return type
    var minus2 = function (a, b) {
        return a + b;
    };
    // if it doesn't look like it returns anything, it returns void
    var add2 = function (a, b, c) {
        if (c === void 0) { c = 10; }
        console.log(a + b);
    };
}
/*---- Lesson 9 Type Aliases ----*/
function lesson9() {
    var logDetails = function (uid, item) {
        console.log(item + " has uid of " + uid);
    };
    var greet = function (user) {
        console.log(user.name + " says hello");
    };
    var greetAgain = function (user) {
        console.log(user.name + " says hello");
    };
}
/*---- Lesson 10 Function Signatures ----*/
var funcSigs = function () {
    var greet; // holds any type of function
    // ex 1
    // define the parameters and return type of a function before using it
    var greet2;
    // then use the function using the signature
    // name and greeting have to be string and must return void
    greet2 = function (name, greeting) {
        console.log(name + " says: " + greeting);
    };
    // ex 2
    var calc;
    calc = function (numOne, numTwo, action) {
        if (action === 'add')
            return numOne + numTwo;
        else
            return numOne - numTwo;
    };
    // ex 3
    var logDetails;
    logDetails = function (ninja) {
        console.log(ninja.name + " is " + ninja.age + " years old.");
    };
};
