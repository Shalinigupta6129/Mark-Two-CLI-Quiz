import readline from 'readline-sync';
import chalk from 'chalk';

var score = 0;
var userName = readline.question("Please enter your name ");
console.log(chalk.yellow.bold('\nHello ' + chalk.white.bold(userName) + ' Welcome to the F.R.I.E.N.D.S quiz\n'));

console.log(`Before starting the game, here are a few things to note: \n\n1. There are 2 levels in this quiz\n2. Correct answer gives you 1 point `);

console.log("\n--------------------------------------------");

console.log(chalk.blue.bold("\n Level 1\n"));

//Function
function quiz(question, answer) {
  var userAnswer = readline.question(question)
  if (userAnswer === answer) {
    console.log(chalk.greenBright("This is correct!"));
    score++;
  } else {
    console.log(chalk.red("This is wrong!"));
    console.log("correct answer is " + currentQues.answer);

  }

}

//Question List for different levels
var levelOneQues = [{
  question: 'What is Mounika profession? ',
  answer: 'chef',
},
{
  question: 'How many times has Ross been married? ',
  answer: '3',
},
{
  question: 'What song is Phoebe best known for? ',
  answer: 'smelly cat',
},
{
  question: 'Phoebe has a twin sister. What is her name?',
  answer: 'ursula',
},
{
  question: 'What is the name of the grumpy person who works at the coffee shop? ',
  answer: 'gunther',
}
]

var levelTwoQues = [{
  question: 'Monica organises her towels into several categories. But how many? ',
  answer: '11',
},
{
  question: 'What is the name of Joey’s acting agent? ',
  answer: 'estelle',
},
{
  question: 'What did Ross dress up as to teach Ben about Christmas and Hanukkah? ',
  answer: 'the holiday armadillo',
},
{
  question: 'Phoebe dated a scientist called David. In which Belarus city did he work? ',
  answer: 'minsk',
},
{
  question: 'Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives? ',
  answer: 'joey',
}
]


//Function call

for (var i = 0; i < levelOneQues.length; i++) {
  var currentQues = levelOneQues[i];
  quiz(currentQues.question, currentQues.answer);

  console.log("------------------------ \n")
}

if (score >= 3) {
  console.log(chalk.blue.bold("Welcome to Level 2\n"));

  for (var i = 0; i < levelTwoQues.length; i++) {
    var currentQues = levelTwoQues[i];
    quiz(currentQues.question, currentQues.answer);

    console.log("------------------------ \n")

    //console.log("your total score is " + score);

  }

} else {
  console.log("Unfortunately, you couldn't proceed further\n\n Thanks for playing!")

  //console.log("your total score is " + score);

}

console.log("your total score is " + score);

if (score >= 7) {

  console.log("Congratulations for completing both the levels")

} else {
  console.log("Better luck next time")
}












