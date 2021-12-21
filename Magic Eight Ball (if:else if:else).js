let userName = 'James';

userName ? console.log (`Hello, ${userName}!`) :
console.log ('Hello!');

let userQuestion = 'Can The Magic Eight Ball see the future?';
console.log (`${userName}'s Question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

const eightBall = 'The eight ball answered:';

if (randomNumber === 0) {
  console.log (`${eightBall} It is Certain`);
}
else if (randomNumber === 1) {
  console.log (`${eightBall} It is decidedly so`);
}
else if (randomNumber === 2) {
  console.log (`${eightBall} Hazy try again`);
}
else if (randomNumber === 3) {
  console.log (`${eightBall} Cannot predict now`);
}
else if (randomNumber === 4) {
  console.log (`${eightBall} Do not count on it`);
}
else if (randomNumber === 5) {
  console.log (`${eightBall} My sources say no`);
}
else if (randomNumber === 6) {
  console.log (`${eightBall} Outlook not so good`);
}
else {
  console.log (`${eightBall} Signs point to yes`);
}