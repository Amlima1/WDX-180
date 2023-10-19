// here my code
// this is very difficult
const answer = prompt("Who created JavaScript?\nA) Brendan Eich\nB) Bill Gates\nC) Mark Zuckerberg");

if (answer != null) {
  const userAnswer = answer.trim().toLowerCase();
  if (userAnswer === "a") {
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
  } else if (userAnswer === "b") {
    alert("Nope. He lead the development of the Windows Operating System.");
  } else if (userAnswer === "c") {
    alert("Nope. He just came up with the idea for a social network idea.");
  } else {
    alert("Invalid input. Please select A, B, or C.");
  }
}
