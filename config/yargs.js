
//! Argumentos que vienen de la consola

const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,/*  para mandar un mensaje en consola */
                    describe:'Es la base de las tablas'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra tabla en consola'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    describe:'Asignar limite de nuestra tabla'
                })
                .check( (argv, options) => {
                    if (isNaN( argv.b)  ) {
                        throw 'la base tiene que ser un numero'
                    } 
                    return true
                })
                .argv; 
    
    module.exports = argv

    