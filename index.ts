// tutorial: https://www.youtube.com/watch?v=ahCwqrYpIuM

// this shows how to specify param types of number and a return type of string
// can also set type to void
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}


// this shows that you can create an interface which can be used to enforce structure
// interface Person {
//   first: string,
//   last: string
// }

// const person: Person = {
//   first: 'Jedd',
//   last: 'Delaney'
// }

// const person2: Person = {
//   first: 'Usane',
//   last: 'Bult',
//   fast: true
// }