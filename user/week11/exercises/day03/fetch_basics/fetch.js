/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 * 
 * Complete the challenges found below!
 *  
 * */

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and: 
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and: 
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW

// 1. Read the countries API using fetch & promises
fetch(countriesAPI)
  .then((response) => response.json())
  .then((countries) => {
    // a. Print name of country, capital, languages, population, and area
    console.log("Countries Info:");
    countries.forEach((country) => {
      console.log({
        name: country.name,
        capital: country.capital || "No Capital",
        languages: country.languages.map((lang) => lang.name),
        population: country.population,
        area: country.area,
      });
    });

    // b. Find out the 10 largest countries by area
    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map((country) => country.name);
    console.log("10 Largest Countries by Area:", largestCountries);

    // c. Count total number of unique languages in the world
    const languagesSet = new Set();
    countries.forEach((country) =>
      country.languages.forEach((lang) => languagesSet.add(lang.name))
    );
    console.log("Total Number of Unique Languages:", languagesSet.size);
  })
  .catch((error) => console.error("Error fetching countries API:", error));

// 2. Read the cats API using fetch & promises
fetch(catsAPI)
  .then((response) => response.json())
  .then((cats) => {
    // a. Print all cat names
    const catNames = cats.map((cat) => cat.name);
    console.log("Cat Names:", catNames);

    // b. Find the average weight of cats in metric units
    const averageWeight = cats.reduce((total, cat) => {
      const weightRange = cat.weight.metric.split(" - ").map(Number);
      const averageCatWeight = (weightRange[0] + weightRange[1]) / 2;
      return total + averageCatWeight;
    }, 0) / cats.length;

    console.log("Average Cat Weight (metric):", averageWeight.toFixed(2), "kg");
  })
  .catch((error) => console.error("Error fetching cats API:", error));
