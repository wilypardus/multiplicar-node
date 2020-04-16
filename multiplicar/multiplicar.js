//REQUIREDS
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        console.log('============'.green);
        console.log(`Tabla del ${base}`.green);
        console.log('============'.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i } `.red);
        }



    })



}

let crearArchivo = (base, limite) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }



        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n `;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`)


        });


    })


}

module.exports = {
    crearArchivo,
    listarTabla
}