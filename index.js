// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);
let attempts = 0;
let guess;
let running = true;

while(running){

    guess = prompt(`Guess a number between ${maxNum} - ${minNum}`)
    guess = Number(guess);

    console.log(typeof guess, guess);
    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            alert("TOO LOW! TRY AGAIN!");

        }
        else if (guess > answer){
            alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        
        }


    }
    
       
        
}

