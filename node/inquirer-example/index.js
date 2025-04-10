import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'input',
    name: 'faveDog',
    message: 'What is your favorite dog?'
  },
  {
    name: 'faveColor',
    message: 'What is your favorite color?',
    default: '#008f78'
  }
])
.then(answers => console.info('Answer:', answers))