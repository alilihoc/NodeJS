const inquirer = require('inquirer');

module.exports = () => {
  const questions = [
    {
      name: "nom",
      type:'input',
      message: 'Votre nom',
      validate: (value) => {
        return value.length > 0 ? true : "Vous devez renseigner un nom";
      }
    }, {
      name: 'skills',
      type: 'checkbox',
      message: 'Vos skills',
      choices: ['HTML', 'CSS', 'JS', 'PYTHON', 'RUBY']
    }, {
      name: "confirmation",
      type: 'confirm',
      message: 'Confirmez-vous le formulaire'
    }
  ];

  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
};
