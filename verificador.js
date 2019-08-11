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


 try {
    if(!index) {
        console.log(chalk.blueBright('[ERRO INDEX]'))
    }
    
    if(!comandos) {
        console.log(chalk.blueBright('[ERRO COMANDOS]'))
    }
    
    if(!COLORS) {
        console.log(chalk.blueBright('[ERRO COLORS]'))
    }


} catch(e) {
    console.log(index)  
    console.log(comandos)  //não sei se vai dar certo, mas deve dar kakaka
    console.log(colors)
}
