/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE

'use strict';
let pElement1 = document.querySelector('p');
console.log(pElement1);
pElement1 = document.querySelector('#paragraph1');
console.log(pElement1);
const pElement2 = document.querySelector('#paragraph2');
console.log(pElement2);
const pElement3 = document.querySelector('#paragraph3');
console.log(pElement3);
const pElement4 = document.querySelector('#paragraph4');
console.log(pElement4);

const pElements = document.querySelectorAll('p');
for(let pElement of pElements){
    console.log(pElement);
}