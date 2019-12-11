const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schame({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        require: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        require: false
    },
    role: {
        default: 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);