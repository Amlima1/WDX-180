// INSERT YOUR CODE HERE
'use strict';
document.body.style.display = 'grid';
document.body.style.placeItems = 'center';

const numbers = [];

for(let i = 0; i < 102; i++){
    numbers.push(i);
}

// other ways to create the same array 
// const arr = Array(1001).fill(0).map((_, index)=> index);
// const arr = Array.from(Array(1001).fill(0), (_, index)=> index);
console.log(numbers);

function renderNumbers(){
    
    const wrapperDivElement = document.querySelector('.wrapper');
    wrapperDivElement.style.display = 'grid';
    wrapperDivElement.style.gridTemplateColumns = 'repeat(6, 200px)';
    wrapperDivElement.style.gridGap = '10px'
    wrapperDivElement.innerHTML = '';
    numbers.forEach((number) =>{
        const innerDiv = `<div class="inner-div">${number}</div>`;
        wrapperDivElement.innerHTML += innerDiv;
    });
}
renderNumbers();

function styleInnerDiv(){
    const innerDivElements = document.querySelectorAll('.inner-div');
    for(let i = 0; i < innerDivElements.length; i++){
        
        if (i % 2 === 0 && i !== 2){
            innerDivElements[i].style.backgroundColor = 'green';
        } else {
            innerDivElements[i].style.backgroundColor = 'red';
            for (let j = 2; j <= i / 2; j++){
                if(i % j === 0){
                    innerDivElements[i].style.backgroundColor = 'yellow';
                    innerDivElements[1].style.backgroundColor = 'yellow';
                }
            }
        }
        innerDivElements[i].style.display = 'flex';
        innerDivElements[i].style.alignItems = 'center';
        innerDivElements[i].style.justifyContent = 'center';
        innerDivElements[i].style.fontSize = '50px';
        innerDivElements[i].style.height = '100px';
        
    }
}
styleInnerDiv();


