//----- lesson 4 -------

// explicit types 
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 'luigi'; // this has already explicitly been set to a number
age = 30;

// arrays
let ninjas: string[] = []; // can only be an array of strings

// union types - basically saying it can be one of x types
let mixed: (string | number)[] = [] // stores strings and/or numbers
mixed.push('hello');
mixed.push(30);
mixed.push(true);

let uid: string | number;
uid = '123';
uid = 123;
uid = true;

// objects
let ninjaOne: object;
ninjaOne = { name: 'test', age: 30 };
ninjaOne = '';

// this indicated that thsi object must contain these properyies with these types
let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}


