---
title: BUG JOURNAL
---

## BUG CATEGORIES

  - Rule-Breaking
  - OBOE (See: https://www.wikiwand.com/en/Off-by-one_error)

## 10/12/2023 - Week 10 - Day 01 (Long Version Bug Report)

  **Description:**

  During one of the exercises, I forgot to define an object variable using `const`, then tried to update one of its properties but instead of using the property name I accidentally assigned the value to the variable holding the object. It turns out, that I wiped the whole object data and replaced it with the value that was directed for the property. If the object was declared with `const` I would have gotten an error "assignment to constant variable" that would have stopped me from replacing the object.

  **Code:**

  ```js
  let person = {
      firstName: "Douglas",
      lastName: "Crockford",
      book: "JavaScript: The Good Pars" // <= I needed to update this typo
  }

  person = "JavaScript: The Good Parts"; // <= I intended to assign this to person.book property

  console.log( person.book ); // <= When a few lines of code later I tried to access the book property, I got undefined
  // undefined

  // person is now:  "JavaScript: The Good Parts"
  // it should be: let person = {
  //     firstName: "Douglas",
  //     lastName: "Crockford",
  //     book: "JavaScript: The Good Parts"
  // }
  ```

  **Category:**

  - I will file this bug under the `rule breaking` category of bugs as I failed to stick to the rule that says **define all object types with `const`** (unless there is a special requirement).

  **Avoidance Strategy**

  - Whenever I define a variable, I will stick to the rule that states: **when defining a variable, always start with `const`. Think for a moment whether there is a good reason to change the value of the variable and switch to `let`. Otherwise stick to `const`**. It's always safer to define variables with `const` and later switch to `let`, if it is required, than the other way round.

## 09/12/2023 - Week 09 - Day 05 (Short version Bug Report)

  I wrote `if ( str.length > 0 && str.length < 16)` while I meant `if ( str.length > 0 && str.length <= 16 )`. (Category: OBOE)



I encounter a small issue while with this function I created to render the challenges of the array of exercise 3 of week10 days 4
 Down is the code
 // RENDING THE CHALLENGES PART OF THE ARRAY 
const divPython = document.createElement('div');


function generateHTML(element, elementName, name, topics, status, name2){
  element = document.createElement(`${element}`); // create the h3 element
  element.classList.add(`js-${elementName}-element`); // add a class to the h3 element
  wrapperDivElement.appendChild(element); // append the element to another or after another
  element.innerHTML = `${name} 
    <details class="details-${name2}">
      <summary>${name2}</summary>
      <ul class="ul-${name2}"></ul>
    </details> ${status}`;
    const detailsElement = document.querySelector(`.details-${name2}`);
    const ulElement = document.querySelector(`.ul-${name2}`);
    ulElement.innerHTML = '';
    for(let topic of topics){
      const liHTML = `<li class="li-${name2}">${topic}</li>`;
      const liElements = document.querySelectorAll(`.li-${name2}`);
      ulElement.innerHTML += liHTML;
    }
    
  console.log(element);
  console.log(element.innerHTML);
}

generateHTML('div', 
  'python-div', mawuChallenges2025.challenges[0].name, 
  mawuChallenges2025.challenges[0].topics, 
  mawuChallenges2025.challenges[0].status, 'python');

generateHTML('div', 
    'javascript-div', mawuChallenges2025.challenges[1].name, 
    mawuChallenges2025.challenges[1].topics, 
    mawuChallenges2025.challenges[1].status, 'javascript');

generateHTML('div', 
    'html-css-div', mawuChallenges2025.challenges[2].name, 
    mawuChallenges2025.challenges[2].topics, 
    mawuChallenges2025.challenges[2].status, 'html & css');

The fourth call of the function did not work, error message: cannot read property of null
generateHTML('div', 
    'react-div', mawuChallenges2025.challenges[3].name, 
    mawuChallenges2025.challenges[3].topics, 
    mawuChallenges2025.challenges[3].status, 'react');