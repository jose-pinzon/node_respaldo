const fs = require('fs');

const colors = require('colors');
const tablaMultiplicar = async ( base = 5, listar = false, hasta ) => {

    try {

        if (listar != false) {
            console.log('====================='.green)
            console.log(`Tabla del: ${base}`.underline)
            console.log('====================='.green)
        }

    
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida  +=  `${ base } X ${ i } =  ${base* i}\n` ;
            consola  +=  `${ base } ${ 'X'.blue } ${ i } ${ '='.blue } ${base* i}\n` ;

        }
        
        if (listar != false) {
            console.log(consola);
        }
        //TODO: Esto es para crear un txt con los datos de la tabla
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);

        return `tabla del ${base}`

    } catch (error) {
        throw error
    }


}

module.exports = {
    tablaMultiplicar
}