function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z
        } catch (err) {
            console.error('Error en mi función asíncrona')
            cb(err)
        }
    })
}

try {
    //otraFuncion();
    //serompe();
    seRompeAsincrona(function (err) {
        console.log(err.message)
    });
} catch(err) {
    console.log('Vaya, algo se ha roto')
    console.error(err.message)
    console.log('Pero no pasa nada lo hemos capturado')
}

console.log('esto de aquí esta al final');

