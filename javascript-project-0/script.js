/*Make the html page do something interesting! */
var randomNumber = Math.floor(Math.random()*100)+1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var LowOrHi = document.querySelector('.LowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function resetGame()
{
  guessCount=1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0; i < resetParas.length;i++)
  {
    resetParas[i].textContent='';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.focus();
  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()*100)+1;
}
function setGameOver()
{
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Game!';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function checkGuess()
{
  var userGuess = Number(guessField.value);
  if(guessCount == 1)
  {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  if(userGuess == randomNumber)
  {
    lastResult.textContent = 'Congratulations, you got it right!';
    lastResult.style.backgroundColor='green';
    LowOrHi.textContent = '';
    setGameOver();
  }
  else
  {
    if(guessCount == 10)
    {
      lastResult.textContent = '!!! GAME OVER !!!';
      lastResult.style.backgroundColor='red';
      setGameOver();
    }
    else if(userGuess < randomNumber)
    {
      LowOrHi.textContent='Last guess was too Low!';
      LowOrHi.style.backgroundColor='yellow';
    }
    else
    {
      LowOrHi.textContent='Last guess was too High!';
      LowOrHi.style.backgroundColor='pink';
    }
  }

  guessCount++;
  guessField.value='';
  guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);
