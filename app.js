import inquirer from 'inquirer';

let choices = ['Rock', 'Paper', 'Scissors'];

inquirer.prompt([
    {
        name: 'start',
        message: 'Choose Rock, Paper or Scissors!',
        choices: ['Rock', 'Paper', 'Scissors']
    }
]).then((answers)) => {

}