import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
/*---- Lesson 11 The DOM and Type Casting ----*/
// this is how you cast a DOM element to a specific HTML type
const form = document.querySelector('.new-item-form');
// since we used a class above and not just 'form' we needed to 
// specify the type to be able to see children
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
