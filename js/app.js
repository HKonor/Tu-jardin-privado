const contenedorFlores =
    document.getElementById("contenedor-flores");

const jardin =
    document.querySelector(".jardin") ||
    contenedorFlores.parentElement;


/*
=========================================
    MODAL DE CARTA
=========================================
*/

const modalCarta =
    document.createElement("div");

modalCarta.className =
    "modal-carta";

modalCarta.innerHTML = `
    <div class="modal-carta-contenido">
        <button class="cerrar-carta" type="button" aria-label="Cerrar carta">×</button>
        <h3 class="titulo-carta"></h3>
        <div class="papel-carta">
            <p class="texto-carta"></p>
        </div>
    </div>
`;

document.body.appendChild(
    modalCarta
);

const tituloCarta =
    modalCarta.querySelector(".titulo-carta");

const textoCarta =
    modalCarta.querySelector(".texto-carta");

const botonCerrarCarta =
    modalCarta.querySelector(".cerrar-carta");


function abrirCarta(
    titulo,
    mensaje
) {
    tituloCarta.textContent =
        titulo;

    textoCarta.textContent =
        mensaje;

    modalCarta.classList.add(
        "mostrar"
    );
}


function cerrarCarta() {
    modalCarta.classList.remove(
        "mostrar"
    );
}


botonCerrarCarta.addEventListener(
    "click",
    cerrarCarta
);

modalCarta.addEventListener(
    "click",
    (evento) => {
        if (evento.target === modalCarta) {
            cerrarCarta();
        }
    }
);

document.addEventListener(
    "keydown",
    (evento) => {
        if (
            evento.key === "Escape" &&
            modalCarta.classList.contains("mostrar")
        ) {
            cerrarCarta();
        }
    }
);



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
        "envoltura-flor flor-interactiva";

    envolturaFlor.setAttribute(
        "tabindex",
        "0"
    );

    envolturaFlor.setAttribute(
        "role",
        "button"
    );

    envolturaFlor.setAttribute(
        "aria-label",
        `Abrir carta de ${config.titulo}`
    );


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


    envolturaFlor.addEventListener(
        "click",
        () => {
            abrirCarta(
                config.titulo,
                config.carta || config.mensaje
            );
        }
    );

    envolturaFlor.addEventListener(
        "keydown",
        (evento) => {
            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {
                evento.preventDefault();

                abrirCarta(
                    config.titulo,
                    config.carta || config.mensaje
                );
            }
        }
    );


    const pistaCarta =
        document.createElement("p");

    pistaCarta.className =
        "pista-carta";

    pistaCarta.textContent =
        "Haz clic en la flor para abrir una carta";


    const nota =
        document.createElement("div");

    nota.className =
        "nota-flor";


    const textoNota =
        document.createElement("p");

    textoNota.textContent =
        config.mensaje;

    nota.appendChild(
        textoNota
    );


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


    tarjeta.appendChild(
        titulo
    );

    tarjeta.appendChild(
        envolturaFlor
    );

    tarjeta.appendChild(
        pistaCarta
    );

    tarjeta.appendChild(
        nota
    );

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
        titulo: "Girasol 🌻",
        mensaje:
            "Esta es la primera flor de este pequeño jardín.",
        carta:
            "Quise que el jardín empezara con un girasol, porque hay cosas que desde el inicio se sienten cálidas y bonitas. Tal vez esta flor no lo dice todo, pero sí abre la puerta a todo lo demás que poco a poco he querido dejar aquí."
    },

    {
        tipo: "tulipan",
        titulo: "Tulipán morado 💜",
        mensaje:
            "Quise dejarte este tulipán morado como un detalle lindo, suave y especial para ti.",
        carta:
            "Este tulipán lo pensé como un detalle tranquilo, bonito y delicado. A veces no hace falta decir demasiado cuando algo simplemente nace con intención y cariño. Me gustó dejarlo aquí como una manera de hacerte saber que pensé en ti.",
        linkCancion:
            "https://www.youtube.com/watch?v=3AsvjEGlwyY",
        textoBoton:
            "♪ Escuchar canción"
    },

    {
        tipo: "lirio",
        titulo: "Lirio blanco 🤍",
        mensaje:
            "Te dejo este lirio blanco como un detalle lleno de calma, ternura y luz, para recordarte lo bonita que eres.",
        carta:
            "El lirio blanco tiene algo muy sereno, y por eso me gustó para ti. Quise que esta flor hablara de calma, de ternura y de esa sensación bonita que dejan algunas personas sin proponérselo demasiado.",
        linkCancion:
            "https://www.youtube.com/watch?v=-XZud3y0aLI&list=RDF193VAMdcBg&index=6",
        textoBoton:
            "♪ Escuchar canción"
    },

    {
        tipo: "nube",
        titulo: "Flor de nube 🤍",
        mensaje:
            "Hay detalles pequeños que, sin hacer mucho ruido, terminan significando más de lo que parecen. Esta flor de nube es uno de ellos: algo sencillo, bonito y especial que quise dejar aquí para ti. Tal vez algunas cosas no necesitan explicarse demasiado para entenderse. 🤍",
        carta:
            "Hay cosas pequeñas que terminan quedándose más de lo que uno imagina. Esta flor de nube la dejé así, sencilla y ligera, como esos detalles que parecen discretos pero que en realidad guardan bastante intención.",
        linkCancion:
            "https://youtu.be/k3Uz-UI2IgY?is=kEqXKDfnneC-rH2Z",
        textoBoton:
            "♪ Tú y yo y tú"
    },

    {
        tipo: "peonia",
        titulo: "Peonía rosa 🌸",
        mensaje:
            "Hay cosas que se vuelven especiales sin necesidad de buscarles demasiadas explicaciones. A veces basta con mirar un poco más de cerca para darse cuenta de que los motivos siempre estuvieron ahí. 🌸",
        carta:
            "La peonía me gusta porque se ve llena, suave y bonita, pero también porque transmite esa idea de que algunas cosas se vuelven importantes casi sin avisar. A veces los motivos sobran, aunque al principio no parezca tan evidente.",
        linkCancion:
            "https://youtu.be/6wgTJm5ns7A?si=3Es4iR3dYLfdKBXN",
        textoBoton:
            "♪ Me sobran motivos"
    },

    {
        tipo: "camelia",
        titulo: "Camelia roja ❤️",
        mensaje:
            "Algunas flores llaman la atención sin intentarlo. Tal vez sea el color, la forma o simplemente la manera en que terminan destacando entre todas las demás. ❤️",
        carta:
            "La camelia roja la imaginé para esas presencias que sobresalen solas, sin esfuerzo. Hay personas que por alguna razón terminan quedándose en la vista, en la cabeza o en el ánimo un poco más de lo normal.",
        linkCancion:
            "https://www.youtube.com/watch?v=yhuop3GEf-4",
        textoBoton:
            "♪ NADIE MÁS!"
    },

    {
        tipo: "jazmin",
        titulo: "Jazmín blanco 🤍",
        mensaje:
            "Hay flores cuyo aroma parece quedarse incluso cuando ya no están cerca. Tal vez algunas presencias funcionan de la misma manera. 🤍",
        carta:
            "El jazmín me pareció bonito para hablar de eso que permanece aun cuando ya no está enfrente. Algunas presencias dejan una impresión suave, pero duradera, como si siguieran ahí incluso después.",
        linkCancion:
            "https://www.youtube.com/watch?v=PSjeJrDI4a4",
        textoBoton:
            "♪ Cómo dormiste"
    },

    {
        tipo: "orquidea",
        titulo: "Orquídea rosa 🌺",
        mensaje:
            "Hay dedicatorias que se hacen por bonito detalle, y otras que nacen porque alguien realmente inspira algo especial. Esta canción es de esas que no elegí al azar.",
        carta:
            "Esta orquídea sí la quise dejar como una dedicatoria más especial. Hay canciones que uno no escoge por casualidad, sino porque alguien en particular termina dándoles sentido. Esta fue una de esas veces.",
        linkCancion:
            "https://www.youtube.com/watch?v=4O1CNtVG7s8",
        textoBoton:
            "♪ AMOR DE CINE"
    },

    {
        tipo: "lavanda",
        titulo: "Lavanda violeta 💜",
        mensaje:
            "Hay aromas que uno reconoce incluso antes de darse cuenta de dónde vienen. Supongo que algunas cosas se quedan en la memoria de una forma parecida.",
        carta:
            "La lavanda tiene algo que permanece de forma muy sutil, y por eso me gustó para esta canción. A veces hay cosas que no son escandalosas, pero aun así dejan marca y se quedan rondando más tiempo del esperado.",
        linkCancion:
            "https://www.youtube.com/watch?v=2vo_BzD9gu0",
        textoBoton:
            "♪ Te diré"
    },

    {
        tipo: "anemona",
        titulo: "Anémona blanca 🤍",
        mensaje:
            "Supongo que hay cosas que uno termina admitiendo poco a poco, incluso cuando al principio intenta hacer como si no pasara nada.",
        carta:
            "Esta anémona quedó para esas cosas que uno primero intenta guardar, luego acepta a medias y al final termina admitiendo. No siempre es inmediato, pero hay sentimientos o ideas que poco a poco se van haciendo imposibles de ignorar.",
        linkCancion:
            "https://www.youtube.com/watch?v=4Ja6WLrZlAE",
        textoBoton:
            "♪ Confieso"
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