//---- lesson 3 -----

function main() {
  // arrays
  let names = ['link', 'ganon', 'zelda']; // array of strings only

  names.push(2);
  names.push('tingle');
  names[0] = 1;
  names[0] = 'tingle';

  let mixed = ['ken', 4, 'chun-li', 8, true]; //mixed array

  mixed.push(2);
  mixed.push('tingle');
  mixed[0] = 1;
  mixed[0] = 'tingle';

  // objects
  let ninja = {
    name: 'Utake', // each key behaves as a variable so the type cannot be changed
    belt: 'black',
    age: 42
  }

  ninja.age = 30; //this is fine because age is already a number
  ninja.age = '45'; //.age cannot be changed to a string

  ninja.skills = ['sneak', 'flying knee']//cant add additional properties after declaring the object

  // we can reassign the object but it has to match the structure of the original object
  ninja = {
    name: 'newName',
    belt: 'red',
    age: 23,
    skills: ['sneak', 'flying knee']
  }
}
