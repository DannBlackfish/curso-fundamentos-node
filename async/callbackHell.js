function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function(){
        console.log('Bla Bla Bla Bla...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    }else {
        adios(nombre, callback);
    }
}

//Esto es mucha más legible 
console.log('Iniciando proceso...');
hola('Daniela', function (nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado')
    });
});

//A esto se le llama callback hell
/* hola('Daniela', function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function() {
                    console.log('Terminando proceso...')
                });
            });
        });
    });
}); */
