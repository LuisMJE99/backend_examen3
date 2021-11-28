const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        //Generar payload
        const payload = {
            uid
        };

        //Firmar el jwt
        jwt.sign(payload, process.env.JWT_KEY, {
            //Tiempo de expiracion
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                reject('No se genero el JWT')
            } else {
                //token
                resolve(token);
            }
        })
    });
}

module.exports = {
    generarJWT
}