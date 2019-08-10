const index = require('./index'),
      chalk = require('chalk')  

const comandos = require('./src/comandos/const')
const COLORS = require('./src/armazanador/color') 

if(index) {
    console.log(chalk.redBright('[INDEX]'))
}

if(comandos) {
    console.log(chalk.redBright('[COMANDOS]'))
}

if(COLORS) {
    console.log(chalk.redBright('[COLORS]'))
}

/*

-------//---------------------//-------------------//-------------//-----//

*/
if(!index) {
    console.log(chalk.blueBright('[ERRO INDEX]'))
}

if(!comandos) {
    console.log(chalk.blueBright('[ERRO COMANDOS]'))
}

if(!COLORS) {
    console.log(chalk.blueBright('[ERRO COLORS]'))
}