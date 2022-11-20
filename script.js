'use strict';
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number')
let scoreNum = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let score = 20;
let high =0;

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // when there is input
  if (!guess) {
    message.textContent = 'No Number';
  } 
  
    // when palyers wins
  else if (guess === secretNumber) {
    message.textContent = 'Correct Number';
    number.textContent = secretNumber;
    document.body.style.backgroundColor='#60b347';
    number.style.width='30rem'

    if (score> high){
      high=score;
      highscore.textContent=high;
    }

  } 
  

// when guess is wrong

else if(guess !== secretNumber){
  if(score>1){
    message.textContent = guess > secretNumber ? 'Too High' : 'Too Low';
    score--;
    scoreNum.textContent = score
    }
    else{
      message.textContent = "You lost the game ";
      scoreNum.textContent = 0;
    }  
}


  // old code 

  // when guess is To High
  // else if (guess > secretNumber) {

  //   if(score>1){
  //   message.textContent = 'Too High';
  //   score--;
  //   scoreNum.textContent = score
  //   }
  //   else{
  //     message.textContent = "You lost the game ";
  //     scoreNum.textContent = 0;
  //   }  
  // }
  

  // // when guess is To Low
  // else if (guess < secretNumber) {

  //   if(score>1){
  //     message.textContent = 'Too Low';
  //     score--;
  //     scoreNum.textContent = score
  //     }
  //     else{
  //       message.textContent = "You lost the game ";
  //       scoreNum.textContent = 0;
  //     }  
  // }



});

again.addEventListener('click',()=>{

  score=20;
  secretNumber=Math.trunc(Math.random() * 20) + 1;
  message.textContent="Start guessing...";
  scoreNum.textContent = score;
  number.textContent='?';
  const guess =document.querySelector('.guess').value='';
  document.body.style.backgroundColor=' #222';
  number.style.width='15rem'  
})