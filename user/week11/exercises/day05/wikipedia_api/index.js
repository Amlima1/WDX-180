function fetchBookByAuthor(author){
    
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author ); 
    // READ MORE ABOUT "encodeURIComponent": https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
    
    return fetch(URL)
    .then(function(res){ return res.json(); });
    
  };

//   fetchBookByAuthor("Herman Melville")
//   .then( data =>{
//     // TODO: Display data in the page...
//   })
//   .catch( error =>{
//     console.log(error);
//   })

// EXERCISE 1: Display the results in the page
// EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
// EXERCISE 3: Create a fetchBookByTitle function using async/await and test it with fetchBookByTitle("Moby Dick");
// EXERCISE 4: Display the Book contents in the page

// EXERCISE 1: Display the results in the page

const divElement01 = document.querySelector('.js01');
console.log(divElement01);

fetchBookByAuthor("Herman Melville")
    .then( data =>{
    // TODO: Display data in the page...
    divElement01.textContent = `Here is your data: ${JSON.stringify(data)}`;
    })
    .catch( error =>{
    console.log(error);
    })

// EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
async function fetchBookByAuthorAsync(author) {
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author );
    const divElement02 = document.querySelector('.js02');
    try{
        const result = await fetch(URL);
        const data = await result.json();
        divElement02.textContent = `Here is your data: ${JSON.stringify(data)}`;
    } catch(err){
        divElement02.textContent = `Error ${err}`;
    }
}
fetchBookByAuthorAsync("Herman Melville");

// EXERCISE 3: Create a fetchBookByTitle function using async/await

async function fetchBookByTitleAsync(title){
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author );
    const divElement03 = document.querySelector('.js03');
    try{
        const result = await fetch(URL);
        const data = await result.json();
        divElement03.textContent = `Here is your data: ${data}`;
    } catch(err){
        divElement03.textContent = `Error ${err}`;
    }
}
fetchBookByTitleAsync("Moby Dick");

//EXERCISE 4: Display the Book contents in the page
async function displayBookContent(fetchFunction, query) {
    const divElement04 = document.querySelector('.js04');
    const divElement05 = document.querySelector('.js05');
    divElement04.style.backgroundColor = 'gray';
    divElement05.style.backgroundColor = 'violet';
    try {
      const data = await fetchFunction(query);
  
      // Extract the book content (find the page dynamically from the response)
      const pageId = Object.keys(data.query.pages)[0];
      const content = data.query.pages[pageId].extract || "No content found.";
  
      divElement04.textContent = `Results for "${query}":`;
      divElement05.textContent = content;
  
    } catch (error) {
      console.error(error);
    }
  }
  
  displayBookContent(fetchBookByAuthor, "Herman Melville");
  
  

