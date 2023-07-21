import inquirer from 'inquirer';

function restart(){
    inquirer.prompt([{
        type: 'list',
        name: 'retry',
        message: 'Play again?',
        choices: ['Yes', 'No']
    }]).then((answers) => {
        if (answers.retry === 'Yes'){
            startGame();
        }
    })
}

function startGame(){
    let choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice = choices[Math.floor(Math.random()* choices.length)];
let winningAnswer;
let losingAnswer; 

switch(computerChoice){
    case 'Rock':
        winningAnswer = 'Paper'
        losingAnswer = 'Scissors'
        break;
    case 'Paper':
        winningAnswer = 'Scissors'
        losingAnswer = 'Rock'
    case 'Scissors':
        winningAnswer = 'Rock'
        losingAnswer = 'Paper'
}

inquirer.prompt([
    {
        type: 'list',
        name: 'start',
        message: 'Choose Rock, Paper or Scissors!',
        choices: ['Rock', 'Paper', 'Scissors']
    }
]).then((answers) => {
    if (answers.start === winningAnswer){
        console.log('YOU WIN!')
        restart();
    }else if (answers.start === losingAnswer){
        console.log('YOU LOSE')
        restart();
    }
        else {
        console.log('DRAW. REPLAY!');
        startGame();
    }
}) 
}


startGame();