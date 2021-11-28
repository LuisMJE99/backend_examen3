const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
  
});

//Sobreescribimos  el metodo toJSON
UsuarioSchema.method('toJSON', function () {
    /*
    Extraer __v, _id, password
    ...Variable (Operador rest)
    */
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioSchema);