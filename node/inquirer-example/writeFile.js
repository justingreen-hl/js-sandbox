import inquirer from 'inquirer';
import fs from 'fs'

inquirer.prompt([
  {
    type: 'input',
    name: 'filename',
    message: 'Enter a name for file minus extension'
  },
  {
    type: 'input',
    name: 'content',
    message: 'Enter the content'
  }
])
.then((answers) => {
  const filePath = `${answers.filename}.txt`;
  fs.writeFile(filePath, answers.content, (err) => {
    if(err) console.log('error writing file')
    else console.log(`File ${filePath} created successfully`)
  })
})
.catch((error) => console.error('Something went wrong'))