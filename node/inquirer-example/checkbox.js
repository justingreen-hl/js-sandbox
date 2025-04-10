import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'checkbox',
    name: 'reptiles',
    message: 'Which are your favorite reptiles?',
    choices: [
      'Alligators', 'Snakes', 'Turtles', 'Lizards'
    ]
  }
])
.then(answers => console.info('Answer:', answers.reptiles))