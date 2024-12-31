'use strict'

document.body.style.textAlign = 'center';

const h1Element = document.querySelector('h1'); // Select the h1 element
const text = h1Element.textContent;

// Extract the new year (2025) and wrap it with a span to style it
const updatedText = text.replace(/(2025)/, '<span id="new-year">$1</span>');
h1Element.innerHTML = updatedText;

const newYearElement = document.querySelector('#new-year'); // Select the span containing the year
newYearElement.style.fontSize = '50px';

// List of colors to cycle through
const yearColors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
let colorIndex = 0;

// Change the colors of the year 2025 every second
setInterval(() => {
    newYearElement.style.color = yearColors[colorIndex]; // Set the new color
    colorIndex = (colorIndex + 1) % yearColors.length; // Update index and loop through the colors
}, 1000);

const dateColors = ['pink', 'orange', 'green', 'blue', 'purple', 'red'];

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    const h3Element = document.querySelector('#datetime');
    h3Element.textContent = currentDateTime;
    h3Element.style.color = dateColors[colorIndex]; //set the new colors
    colorIndex = (colorIndex + 1) % dateColors.length; // update index and loop through the colors
}

setInterval(updateDateTime, 1000);

const ulElement = document.querySelector('ul');
ulElement.style.display = 'inline-block';
ulElement.style.textAlign = 'left';

const liElements = document.querySelectorAll('li');

for(let i = 0; i < liElements.length; i++){
    liElements[i].style.listStyleType = 'none';
    liElements[i].style.backgroundColor = '#eb695b';
    liElements[i].style.margin = '2px';
    liElements[i].style.width = '500px';
    liElements[i].style.padding = '10px';
    liElements[i].style.fontSize = '20px';
    liElements[0].style.backgroundColor = '#86db51';
    liElements[1].style.backgroundColor = '#f9e969';
}
