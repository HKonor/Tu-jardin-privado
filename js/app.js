const contenedorFlores =
    document.getElementById("contenedor-flores");

const jardin =
    document.querySelector(".jardin") ||
    contenedorFlores.parentElement;


/*
=========================================
    PANEL SUPERIOR
=========================================
*/

function crearPanelSuperior(config) {

    const panel =
        document.createElement("section");

    panel.className =
        "panel-superior";


    const texto =
        document.createElement("p");

    texto.className =
        "texto-playlist";

    texto.textContent =
        config.texto;


    const acciones =
        document.createElement("div");

    acciones.className =
        "acciones-superiores";


    const botonPlaylist =
        document.createElement("a");

    botonPlaylist.className =
        "boton-playlist";

    botonPlaylist.href =
        config.linkPlaylist;

    botonPlaylist.target =
        "_blank";

    botonPlaylist.rel =
        "noopener noreferrer";

    botonPlaylist.textContent =
        config.textoBotonPlaylist;


    const botonFondo =
        document.createElement("button");

    botonFondo.className =
        "boton-fondo";

    botonFondo.type =
        "button";

    botonFondo.textContent =
        "Cambiar a fondo morado";


    botonFondo.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "tema-morado"
            );

            if (
                document.body.classList.contains(
                    "tema-morado"
                )
            ) {

                botonFondo.textContent =
                    "Cambiar a fondo amarillo";

            } else {

                botonFondo.textContent =
                    "Cambiar a fondo morado";
            }

        }
    );


    acciones.appendChild(
        botonPlaylist
    );

    acciones.appendChild(
        botonFondo
    );

    panel.appendChild(texto);
    panel.appendChild(acciones);

    return panel;
}



/*
=========================================
    TARJETA DE FLOR
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

        envolturaFlor.appendChild(
            flor
        );

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

        const botonCancion =
            document.createElement("a");

        botonCancion.className =
            "boton-cancion";

        botonCancion.href =
            config.linkCancion;

        botonCancion.target =
            "_blank";

        botonCancion.rel =
            "noopener noreferrer";

        botonCancion.textContent =
            config.textoBoton ||
            "Escuchar canción";

        nota.appendChild(
            botonCancion
        );

    }


    tarjeta.appendChild(titulo);
    tarjeta.appendChild(envolturaFlor);
    tarjeta.appendChild(nota);

    return tarjeta;
}



/*
=========================================
    DATOS DEL PANEL
=========================================
*/

const datosPanel = {

    texto:
        "Todas las canciones que acompañan este pequeño jardín están reunidas aquí.",

    textoBotonPlaylist:
        "Abrir playlist en Spotify",

    linkPlaylist:
        "https://open.spotify.com/playlist/6XCeXM270zHmOE1vY9MeXA?si=wHKqXyp-SyKISRnlus0oMQ&utm_source=whatsapp&pi=wjAzlEK-QASgo"
};



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
    },

    {
        tipo: "peonia",

        titulo:
            "Peonía rosa 🌸",

        mensaje:
            "Hay cosas que se vuelven especiales sin necesidad de buscarles demasiadas explicaciones. A veces basta con mirar un poco más de cerca para darse cuenta de que los motivos siempre estuvieron ahí. 🌸",

        linkCancion:
            "https://youtu.be/6wgTJm5ns7A?si=3Es4iR3dYLfdKBXN",

        textoBoton:
            "♪ Me sobran motivos"
    },

    {
        tipo: "camelia",

        titulo:
            "Camelia roja ❤️",

        mensaje:
            "Algunas flores llaman la atención sin intentarlo. Tal vez sea el color, la forma o simplemente la manera en que terminan destacando entre todas las demás. ❤️",

        linkCancion:
            "https://www.youtube.com/watch?v=yhuop3GEf-4",

        textoBoton:
            "♪ NADIE MÁS!"
    },

    {
        tipo: "jazmin",

        titulo:
            "Jazmín blanco 🤍",

        mensaje:
            "Hay flores cuyo aroma parece quedarse incluso cuando ya no están cerca. Tal vez algunas presencias funcionan de la misma manera. 🤍",

        linkCancion:
            "https://www.youtube.com/watch?v=PSjeJrDI4a4",

        textoBoton:
            "♪ Cómo dormiste"
    },

    {
        tipo: "orquidea",

        titulo:
            "Orquídea rosa 🌺",

        mensaje:
            "Hay dedicatorias que se hacen por bonito detalle, y otras que nacen porque alguien realmente inspira algo especial. Esta canción es de esas que no elegí al azar.",

        linkCancion:
            "https://www.youtube.com/watch?v=4O1CNtVG7s8",

        textoBoton:
            "♪ AMOR DE CINE"
    },

    {
        tipo: "lavanda",

        titulo:
            "Lavanda violeta 💜",

        mensaje:
            "Hay aromas que uno reconoce incluso antes de darse cuenta de dónde vienen. Supongo que algunas cosas se quedan en la memoria de una forma parecida.",

        linkCancion:
            "https://www.youtube.com/watch?v=2vo_BzD9gu0",

        textoBoton:
            "♪ Te diré"
    }

];



/*
=========================================
    INSERTAR PANEL
=========================================
*/

const panelSuperior =
    crearPanelSuperior(
        datosPanel
    );

jardin.insertBefore(
    panelSuperior,
    contenedorFlores
);


/*
=========================================
    MOSTRAR FLORES
=========================================
*/

floresDelJardin.forEach(
    (flor) => {

        contenedorFlores.appendChild(
            crearTarjetaFlor(flor)
        );

    }
);