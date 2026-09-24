const jardin =
    document.getElementById("contenedor-flores");


/*
=========================================
    AGREGAR FLORES AL JARDÍN
=========================================
*/


function agregarFlor(tipo) {

    if (Flores[tipo]) {

        const nuevaFlor =
            Flores[tipo]();

        jardin.appendChild(nuevaFlor);

    } else {

        console.error(
            `La flor "${tipo}" no existe en la librería.`
        );

    }

}


/*
=========================================
    FLORES ACTUALES
=========================================
*/


agregarFlor("girasol");