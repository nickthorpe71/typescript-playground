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
  let greet = () => {
    console.log('hi');
  };
  greet = 'hi'; //cannot change to string because greet is set to a function

  // optional parameter: add a question mark after the variable name
  // c?: number  
  // default parameter: see function below
  // default params should be put at the end 
  const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
  }

  add(5, 10);

  // returning
  const minus = (a: number, b: number) => {
    return a + b;
  }
  // typescript will infer the type of the return value of the funciton
  let result = minus(10, 7);
  // you can also specify the return type
  const minus2 = (a: number, b: number): number => {
    return a + b;
  }
  // if it doesn't look like it returns anything, it returns void
  const add2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
  }
}


/*---- Lesson 9 Type Aliases ----*/

function lesson9() {
  type StringOrNum = string | number;
  type userType = { name: string, uid: StringOrNum }

  const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
  }

  const greet = (user: userType) => {
    console.log(`${user.name} says hello`);
  }

  const greetAgain = (user: userType) => {
    console.log(`${user.name} says hello`);
  }
}

/*---- Lesson 10 Function Signatures ----*/

const funcSigs = () => {
  let greet: Function; // holds any type of function

  // ex 1
  // define the parameters and return type of a function before using it
  let greet2: (a: string, b: string) => void;

  // then use the function using the signature
  // name and greeting have to be string and must return void
  greet2 = (name: string, greeting: string) => {
    console.log(`${name} says: ${greeting}`);
  }


  // ex 2
  let calc: (a: number, b: number, c: string) => number;

  calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add')
      return numOne + numTwo;
    else
      return numOne - numTwo;
  }

  // ex 3
  let logDetails: (someObj: { name: string, age: number }) => void;

  type person = { name: string, age: number };

  logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
  }

}

