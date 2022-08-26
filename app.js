
const { tablaMultiplicar  } = require('./helpers/multilplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();




// !-----------------Forma de obtener datos de la consola pero no se debe usar pero con yargs es mejor------------------------------------------------------------------------------------
// const [,,arg3 = 'base=2'] = process.argv
// const [, base = 3] = arg3.split('=');


// console.log(base);
// tabla de multiplicar del 5 
const base = argv.b;
const listar = argv.l;
tablaMultiplicar( base, listar, argv.h )
    .then( nameFile => console.log(nameFile, 'creado'.green))
    .catch(err => console.log(err))
    