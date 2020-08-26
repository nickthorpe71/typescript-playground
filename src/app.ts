// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'mario',
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  }
};

const greetPerson = (person: IsPerson): number => {
  return person.age;
}

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.format());
})

/*---- Lesson 11 The DOM and Type Casting ----*/

// this is how you cast a DOM element to a specific HTML type
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// since we used a class above and not just 'form' we needed to 
// specify the type to be able to see children
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//event listener
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});
