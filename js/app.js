const jardin =
    document.getElementById("contenedor-flores");


/*
=========================================
    CREAR TARJETA DE CADA FLOR
=========================================
*/

function crearTarjetaFlor(config) {

    const tarjeta =
        document.createElement("article");

    tarjeta.className =
        `tarjeta-flor tarjeta-${config.tipo}`;


    const titulo =
        document.createElement("h2");

    titulo.className =
        "titulo-flor";

    titulo.textContent =
        config.titulo;


    const envolturaFlor =
        document.createElement("div");

    envolturaFlor.className =
        "envoltura-flor";


    if (Flores[config.tipo]) {

        const flor =
            Flores[config.tipo]();

        envolturaFlor.appendChild(flor);

    } else {

        console.error(
            `La flor "${config.tipo}" no existe.`
        );

    }


    const nota =
        document.createElement("div");

    nota.className =
        "nota-flor";


    const textoNota =
        document.createElement("p");

    textoNota.textContent =
        config.mensaje;

    nota.appendChild(textoNota);


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


    tarjeta.appendChild(titulo);
    tarjeta.appendChild(envolturaFlor);
    tarjeta.appendChild(nota);

    return tarjeta;
}



/*
=========================================
    FLORES DEL JARDÍN
=========================================
*/

const floresDelJardin = [

    {
        tipo: "girasol",

        titulo:
            "Girasol 🌻",

        mensaje:
            "Esta es la primera flor de este pequeño jardín."
    },

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
    },

    {
        tipo: "nube",

        titulo:
            "Flor de nube 🤍",

        mensaje:
            "Hay detalles pequeños que, sin hacer mucho ruido, terminan significando más de lo que parecen. Esta flor de nube es uno de ellos: algo sencillo, bonito y especial que quise dejar aquí para ti. Tal vez algunas cosas no necesitan explicarse demasiado para entenderse. 🤍",

        linkCancion:
            "https://youtu.be/k3Uz-UI2IgY?is=kEqXKDfnneC-rH2Z",

        textoBoton:
            "♪ Tú y yo y tú"
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