const random = Math.floor(Math.random() * 10) + 1;
let number = parseInt(prompt('Guess a number from 1 to 10:'));
while(number !== random) {
  if (number>random){
    console.log("Too high")
      number = parseInt(prompt('Guess a number from 1 to 10:'));
  }
  else if (number<random){
  console.log("Too low")
      number = parseInt(prompt('Guess a number from 1 to 10:'));
  } 
}
if (number == random) {
  console.log('You guessed the correct number.');
}
