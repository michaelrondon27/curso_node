const argv = require('yargs')
    .command(
        'listar',
        'Imprime en consola la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limite: {
                aliad: 'l',
                default: 10
            }
        })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch(e => console.log(e));