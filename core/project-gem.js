const child_process = require('child_process')
// A ideia aqui é criar o gerador de projetos a partir de um template

module.exports = (template, projectName) => {

  // Decidir como vai ser pego o template: Baixado ou ficara em uma pasta local
  console.log(`Project ${projectName} with ${template} generated`)
}
