'use strict';
// Project 1
// to guess my number by computer
// const myNumber = Number(prompt('What is your number between 1-10?'));
// // console.log(myNumber);

// const compGuess = function (randomValue) {
//   let i = 1;
//   while (randomValue !== myNumber) {
//     console.log(`Tries ${i}:computer guessed ${randomValue}`);
//     randomValue = Math.floor(Math.random() * 11);
//     i++;
//   }
//   console.log(`You gussed ${randomValue}`);
// };
// compGuess(Math.floor(Math.random() * 11));

// to guess computer number
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Computer to generate random number btn 1-20
let compNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

// storing the value of Score
let score = document.querySelector('.score').textContent;

// Refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Adding eventlistener
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value); //storing the input value in guessNumber

  // if input field is empty
  if (!guessNumber) {
    displayMessage('⛔No Number⛔'); //refactoring using function

    // if guessnumber is right
  } else if (guessNumber === compNumber) {
    displayMessage('🥇Correct Number🎉');
    document.querySelector('.number').textContent = compNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // acessing CSS style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // if guessnumber is Wrong
  } else if (guessNumber !== compNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guessNumber > compNumber ? '☝ To High' : '👇 To Low';
      displayMessage(guessNumber > compNumber ? '☝ To High' : '👇 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Have Lost 😭');
      document.querySelector('.number').textContent = compNumber;

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }

    // } else if (guessNumber > compNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '☝ To High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Have Lost 😭';
    //     document.querySelector('.number').textContent = compNumber;

    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = '#8B0000';
    //   }
    // } else if (guessNumber < compNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '👇 To Low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Have Lost 😭';
    //     document.querySelector('.number').textContent = compNumber;

    //     document.querySelector('.score').textContent = 0;
    //     document.querySelector('body').style.backgroundColor = '#8B0000';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  compNumber = Math.floor(Math.random() * 20) + 1;
  console.log(compNumber);
  score = 20;
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
