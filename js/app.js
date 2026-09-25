const jardin =
    document.getElementById("contenedor-flores");


/*
=========================================
    CREAR TARJETA DE CADA FLOR
=========================================
*/

function crearTarjetaFlor(config) {

    /*
    =========================================
        TARJETA
    =========================================
    */

    const tarjeta =
        document.createElement("article");

    tarjeta.className =
        `tarjeta-flor tarjeta-${config.tipo}`;


    /*
    =========================================
        TÍTULO
    =========================================
    */

    const titulo =
        document.createElement("h2");

    titulo.className =
        "titulo-flor";

    titulo.textContent =
        config.titulo;


    /*
    =========================================
        CONTENEDOR DE LA FLOR
    =========================================
    */

    const envolturaFlor =
        document.createElement("div");

    envolturaFlor.className =
        "envoltura-flor";


    /*
    =========================================
        CREAR FLOR
    =========================================
    */

    if (Flores[config.tipo]) {

        const flor =
            Flores[config.tipo]();

        envolturaFlor.appendChild(flor);

    } else {

        console.error(
            `La flor "${config.tipo}" no existe.`
        );

    }


    /*
    =========================================
        NOTITA
    =========================================
    */

    const nota =
        document.createElement("div");

    nota.className =
        "nota-flor";


    const textoNota =
        document.createElement("p");

    textoNota.textContent =
        config.mensaje;

    nota.appendChild(textoNota);


    /*
    =========================================
        BOTÓN DE CANCIÓN
    =========================================
    */

    if (config.linkCancion) {

        const boton =
            document.createElement("a");

        boton.className =
            "boton-cancion";

        boton.href =
            config.linkCancion;

        boton.target =
            "_blank";

        boton.rel =
            "noopener noreferrer";

        boton.textContent =
            config.textoBoton ||
            "♪ Escuchar canción";

        nota.appendChild(boton);

    }


    /*
    =========================================
        UNIR TARJETA
    =========================================
    */

    tarjeta.appendChild(titulo);

    tarjeta.appendChild(
        envolturaFlor
    );

    tarjeta.appendChild(nota);


    return tarjeta;
}



/*
=========================================
    FLORES DEL JARDÍN
=========================================
*/

const floresDelJardin = [

    /*
    =========================================
        GIRASOL
    =========================================
    */

    {
        tipo: "girasol",

        titulo:
            "Girasol 🌻",

        mensaje:
            "Esta es la primera flor de este pequeño jardín."
    },


    /*
    =========================================
        TULIPÁN MORADO
    =========================================
    */

    {
        tipo: "tulipan",

        titulo:
            "Tulipán morado 💜",

        mensaje:
            "Quise dejarte este tulipán morado como un detalle lindo, suave y especial para ti.",

        linkCancion:
            "https://www.youtube.com/watch?v=3AsvjEGlwyY",

        textoBoton:
            "♪ Escuchar canción"
    },


    /*
    =========================================
        LIRIO BLANCO
    =========================================
    */

    {
        tipo: "lirio",

        titulo:
            "Lirio blanco 🤍",

        mensaje:
            "Te dejo este lirio blanco como un detalle lleno de calma, ternura y luz, para recordarte lo bonita que eres.",

        linkCancion:
            "https://www.youtube.com/watch?v=-XZud3y0aLI&list=RDF193VAMdcBg&index=6",

        textoBoton:
            "♪ Escuchar canción"
    }

];



/*
=========================================
    MOSTRAR FLORES
=========================================
*/

floresDelJardin.forEach(
    (flor) => {

        jardin.appendChild(
            crearTarjetaFlor(flor)
        );

    }
);