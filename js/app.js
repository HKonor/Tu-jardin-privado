const contenedorFlores =
    document.getElementById(
        "contenedor-flores"
    );


const jardin =
    document.querySelector(
        ".jardin"
    ) ||
    contenedorFlores.parentElement;


/* =====================================================
   LOCALSTORAGE

   NO CAMBIAR.
===================================================== */

const CLAVES = {

    aviso:
        "jardin_no_mostrar_aviso_v3",

    notas:
        "jardin_notas_v3",

    horasNotas:
        "jardin_horas_notas_v3",

    despedidas:
        "jardin_despedidas_v3",

    diasDespedidas:
        "jardin_dias_despedidas_v3",

    visitasJardin:
        "jardin_visitas_v3",

    visitasFlores:
        "jardin_visitas_flores_v3",

    favorita:
        "jardin_flor_favorita_v3",

    nocheDescubierta:
        "jardin_noche_descubierta_v3",

    nota1111:
        "jardin_1111_v3",

    toquesSecreto:
        "jardin_toques_secreto_v1",

    secretoDesbloqueado:
        "jardin_secreto_desbloqueado_v1",

    secretosVistos:
        "jardin_canciones_secretas_vistas_v1",

    mariposasAplastadas:
        "jardin_mariposas_aplastadas_v1",

    respaldo:
        "jardin_respaldo_progreso_v1"
};


/* =====================================================
   STORAGE
===================================================== */

function leerJSON(
    clave,
    inicial
) {

    try {

        const valor =
            localStorage.getItem(
                clave
            );


        return valor
            ?
            JSON.parse(valor)
            :
            inicial;

    } catch {

        return inicial;
    }
}


function guardarJSON(
    clave,
    valor
) {

    localStorage.setItem(
        clave,
        JSON.stringify(valor)
    );
}


function enlaceYouTube(
    busqueda
) {

    return (
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(
            busqueda
        )
    );
}


/* =====================================================
   VISITAS
===================================================== */

let visitasJardin =
    Number(
        localStorage.getItem(
            CLAVES.visitasJardin
        ) || 0
    );


visitasJardin++;


localStorage.setItem(
    CLAVES.visitasJardin,
    String(visitasJardin)
);


let visitasFlores =
    leerJSON(
        CLAVES.visitasFlores,
        {}
    );


let florFavorita =
    localStorage.getItem(
        CLAVES.favorita
    ) || "";


/* =====================================================
   COLECCIONABLES

   NO CAMBIAR LOS ID.
===================================================== */

const coleccionables = [

    {
        id: 1,
        titulo: "Nota 01",
        fragmento: "Hay",
        nota:
            "Algunas cosas empiezan siendo pequeñas y terminan encontrando su propio lugar."
    },

    {
        id: 2,
        titulo: "Nota 02",
        fragmento: "personas",
        nota:
            "Hay presencias que uno comienza a reconocer incluso entre muchos otros detalles."
    },

    {
        id: 3,
        titulo: "Nota 03",
        fragmento: "que llegan",
        nota:
            "No todo lo importante avisa antes de aparecer."
    },

    {
        id: 4,
        titulo: "Nota 04",
        fragmento: "sin avisar",
        nota:
            "A veces lo inesperado termina siendo precisamente lo que más se recuerda."
    },

    {
        id: 5,
        titulo: "Nota 05",
        fragmento: "y",
        nota:
            "Incluso las palabras pequeñas pueden unir cosas mucho más grandes."
    },

    {
        id: 6,
        titulo: "Nota 06",
        fragmento: "poco a poco",
        nota:
            "Hay cosas que funcionan mejor cuando no necesitan apresurarse."
    },

    {
        id: 7,
        titulo: "Nota 07",
        fragmento: "terminan",
        nota:
            "Algunas historias no se entienden desde el primer capítulo."
    },

    {
        id: 8,
        titulo: "Nota 08",
        fragmento: "convirtiéndose",
        nota:
            "Es curioso cómo algo puede cambiar sin que uno note exactamente cuándo ocurrió."
    },

    {
        id: 9,
        titulo: "Nota 09",
        fragmento: "en",
        nota:
            "A veces una palabra solamente sirve para acercarnos a la siguiente."
    },

    {
        id: 10,
        titulo: "Nota 10",
        fragmento: "esos lugares",
        nota:
            "Hay lugares que no aparecen en ningún mapa."
    },

    {
        id: 11,
        titulo: "Nota 11",
        fragmento: "que uno",
        nota:
            "Algunas cosas cobran sentido dependiendo de quién las mira."
    },

    {
        id: 12,
        titulo: "Nota 12",
        fragmento: "no estaba",
        nota:
            "No siempre encontramos aquello que originalmente salimos a buscar."
    },

    {
        id: 13,
        titulo: "Nota 13",
        fragmento: "buscando,",
        nota:
            "Quizá ahí esté lo interesante de algunas coincidencias."
    },

    {
        id: 14,
        titulo: "Nota 14",
        fragmento: "pero",
        nota:
            "Siempre hay una palabra capaz de cambiar el sentido de todo lo anterior."
    },

    {
        id: 15,
        titulo: "Nota 15",
        fragmento: "que después",
        nota:
            "El tiempo suele darle otro significado a detalles que parecían normales."
    },

    {
        id: 16,
        titulo: "Nota 16",
        fragmento: "cuesta",
        nota:
            "Hay cosas sencillas que con el tiempo dejan de sentirse tan fáciles de ignorar."
    },

    {
        id: 17,
        titulo: "Nota 17",
        fragmento: "imaginar",
        nota:
            "A veces la imaginación empieza justo donde terminan las explicaciones."
    },

    {
        id: 18,
        titulo: "Nota 18",
        fragmento: "que",
        nota:
            "Otra palabra pequeña. Tal vez todavía falte algo importante."
    },

    {
        id: 19,
        titulo: "Nota 19",
        fragmento: "no estuvieran",
        nota:
            "Uno suele notar cuánto significa algo cuando intenta imaginar su ausencia."
    },

    {
        id: 20,
        titulo: "Nota 20",
        fragmento: "ahí.",
        nota:
            "Llegaste hasta la última. Ahora la frase ya no necesita esconder nada más."
    }
];


let notasObtenidas =
    leerJSON(
        CLAVES.notas,
        []
    );


let horasNotas =
    leerJSON(
        CLAVES.horasNotas,
        []
    );


/* =====================================================
   SEGUNDA FRASE — AMOR

   Las claves anteriores permanecen intactas.
   Esta segunda colección utiliza claves nuevas.
===================================================== */

const fraseAmor =
    window.JARDIN_EXT?.fraseAmor || [];


let notasAmorObtenidas =
    leerJSON(
        "jardin_notas_amor_v1",
        []
    );


let horasNotasAmor =
    leerJSON(
        "jardin_horas_notas_amor_v1",
        []
    );


/* =====================================================
   DESPEDIDAS
===================================================== */

const despedidas = [

    "Por hoy, el jardín se queda aquí. Mañana quizá tenga algo nuevo que decir.",

    "Gracias por quedarte un ratito entre las flores.",

    "Algunas visitas son cortas, pero eso no las hace menos bonitas.",

    "Parece que hoy ya viste suficiente... aunque nunca se sabe.",

    "Las flores seguirán aquí cuando quieras volver.",

    "Otro pequeño recorrido termina aquí.",

    "Hoy el jardín estuvo un poquito menos solo.",

    "Tal vez mañana encuentres algo que hoy todavía no estaba listo.",

    "Hay días en los que basta con pasar un momento por aquí.",

    "Una visita más quedó guardada entre estas flores.",

    "El jardín descansa, pero algunas cosas siguen creciendo.",

    "Hasta aquí llegó el recorrido de hoy.",

    "No todo tiene que descubrirse el mismo día.",

    "Algunas cosas se entienden mejor después de volver.",

    "Otra página pequeña quedó escrita hoy.",

    "El jardín cambia poco a poco, igual que algunas historias.",

    "Hoy encontraste lo que estaba listo para ser encontrado.",

    "Todavía quedan rincones que quizá no hayas visto.",

    "Ya casi conoces todas las formas que tiene este jardín de despedirse.",

    "Veinte despedidas después y, curiosamente, esto todavía no se siente como un final."
];


let despedidasObtenidas =
    leerJSON(
        CLAVES.despedidas,
        []
    );


let diasDespedidas =
    leerJSON(
        CLAVES.diasDespedidas,
        []
    );


/* =====================================================
   FECHAS
===================================================== */

function claveDia(
    fecha = new Date()
) {

    const anio =
        fecha.getFullYear();


    const mes =
        String(
            fecha.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const dia =
        String(
            fecha.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        `${anio}-${mes}-${dia}`
    );
}


function claveHora(
    fecha = new Date()
) {

    return (
        `${claveDia(fecha)}-${String(
            fecha.getHours()
        ).padStart(
            2,
            "0"
        )}`
    );
}


/* =====================================================
   DESPEDIDA DIARIA
===================================================== */

function registrarDespedida() {

    const hoy =
        claveDia();


    if (
        diasDespedidas.includes(
            hoy
        )
    ) {
        return;
    }


    if (
        despedidasObtenidas.length >=
        despedidas.length
    ) {
        return;
    }


    const siguiente =
        despedidasObtenidas.length + 1;


    despedidasObtenidas.push(
        siguiente
    );


    diasDespedidas.push(
        hoy
    );


    guardarJSON(
        CLAVES.despedidas,
        despedidasObtenidas
    );


    guardarJSON(
        CLAVES.diasDespedidas,
        diasDespedidas
    );
}


registrarDespedida();


/* =====================================================
   MODAL
===================================================== */

const capaModal =
    document.createElement(
        "div"
    );


capaModal.className =
    "capa-modal";


capaModal.innerHTML = `
    <div class="ventana-modal">

        <button
            type="button"
            class="cerrar-modal"
        >
            ×
        </button>

        <div
            class="contenido-modal"
        ></div>

    </div>
`;


document.body.appendChild(
    capaModal
);


const contenidoModal =
    capaModal.querySelector(
        ".contenido-modal"
    );


const cerrarModalBoton =
    capaModal.querySelector(
        ".cerrar-modal"
    );


function cerrarModal() {

    capaModal.classList.remove(
        "mostrar"
    );
}


cerrarModalBoton.addEventListener(
    "click",
    cerrarModal
);


capaModal.addEventListener(
    "click",
    evento => {

        if (
            evento.target ===
            capaModal
        ) {

            cerrarModal();
        }
    }
);


/* =====================================================
   TOAST
===================================================== */

const toast =
    document.createElement(
        "div"
    );


toast.className =
    "toast-jardin";


document.body.appendChild(
    toast
);


let timeoutToast;


function mostrarToast(
    texto
) {

    clearTimeout(
        timeoutToast
    );


    toast.textContent =
        texto;


    toast.classList.add(
        "mostrar"
    );


    timeoutToast =
        setTimeout(
            () => {

                toast.classList.remove(
                    "mostrar"
                );

            },
            3000
        );
}



/* =====================================================
   MÚSICA DE FONDO - PLAYLIST

   El navegador necesita una interacción del usuario
   antes de reproducir audio con sonido.

   Las canciones avanzan una por una y dejan
   un pequeño intervalo entre ellas para que
   la transición no se sienta brusca.
===================================================== */

const musicaFondo =
    document.getElementById(
        "musica-fondo"
    );


const LISTA_MUSICA_FONDO = [

    {
        titulo:
            "A Romantic Flight",

        archivo:
            "musicafondo.mp3"
    },

    {
        titulo:
            "Kingdom Dance",

        archivo:
            "audio/kingdom-dance.mp3"
    },

    {
        titulo:
            "The Ellie Badge",

        archivo:
            "audio/the-ellie-badge.mp3"
    },

    {
        titulo:
            "Define Dancing",

        archivo:
            "audio/define-dancing.mp3"
    }

];


const VOLUMEN_MUSICA_FONDO =
    0.16;


/*
   4 segundos de silencio entre una canción
   y la siguiente cuando termina de forma normal.
*/

const INTERVALO_ENTRE_CANCIONES =
    4000;


/*
   Al cambiar manualmente no hace falta esperar
   los 4 segundos completos.
*/

const INTERVALO_CAMBIO_MANUAL =
    550;


const DURACION_FADE_ENTRADA =
    2600;


const DURACION_FADE_SALIDA =
    1700;


let indiceMusicaFondo =
    0;


let musicaFondoIniciada =
    false;


let musicaFondoSilenciada =
    false;


let esperandoSiguienteCancion =
    false;


let fadeFinalAplicado =
    false;


let intervaloFadeMusica =
    null;


let timeoutSiguienteCancion =
    null;


/* =====================================================
   CONTROLES DE MÚSICA
===================================================== */

const controlMusicaFondo =
    document.createElement(
        "div"
    );


controlMusicaFondo.className =
    "control-musica-fondo";


controlMusicaFondo.innerHTML = `
    <div class="info-musica-fondo">

        <span class="etiqueta-musica-fondo">
            MÚSICA DE FONDO
        </span>

        <strong
            id="titulo-musica-fondo"
            class="titulo-musica-fondo"
        >
            ${LISTA_MUSICA_FONDO[0].titulo}
        </strong>

        <span
            id="contador-musica-fondo"
            class="contador-musica-fondo"
        >
            1/${LISTA_MUSICA_FONDO.length}
        </span>

    </div>

    <div class="acciones-musica-fondo">

        <button
            type="button"
            id="boton-musica-anterior"
            class="boton-cambio-musica"
            aria-label="Canción anterior"
            title="Canción anterior"
        >
            ‹
        </button>

        <button
            type="button"
            id="boton-musica-fondo"
            class="boton-musica-fondo"
            aria-label="Pausar o reanudar la música de fondo"
            title="Pausar o reanudar"
        >
            <span class="icono-musica-fondo">
                ♫
            </span>

            <span class="texto-musica-fondo">
                Música
            </span>
        </button>

        <button
            type="button"
            id="boton-musica-siguiente"
            class="boton-cambio-musica"
            aria-label="Siguiente canción"
            title="Siguiente canción"
        >
            ›
        </button>

    </div>
`;


document.body.appendChild(
    controlMusicaFondo
);


const botonMusicaFondo =
    document.getElementById(
        "boton-musica-fondo"
    );


const botonMusicaAnterior =
    document.getElementById(
        "boton-musica-anterior"
    );


const botonMusicaSiguiente =
    document.getElementById(
        "boton-musica-siguiente"
    );


const tituloMusicaFondo =
    document.getElementById(
        "titulo-musica-fondo"
    );


const contadorMusicaFondo =
    document.getElementById(
        "contador-musica-fondo"
    );


function limpiarTemporizadoresMusica() {

    clearInterval(
        intervaloFadeMusica
    );


    clearTimeout(
        timeoutSiguienteCancion
    );


    intervaloFadeMusica =
        null;


    timeoutSiguienteCancion =
        null;
}


function obtenerCancionActual() {

    return (
        LISTA_MUSICA_FONDO[
            indiceMusicaFondo
        ]
    );
}


function actualizarInfoCancion() {

    const cancion =
        obtenerCancionActual();


    if (
        tituloMusicaFondo
    ) {

        tituloMusicaFondo.textContent =
            cancion.titulo;
    }


    if (
        contadorMusicaFondo
    ) {

        contadorMusicaFondo.textContent =
            `${indiceMusicaFondo + 1}/${LISTA_MUSICA_FONDO.length}`;
    }
}


function actualizarBotonMusicaFondo() {

    if (
        !musicaFondo ||
        !botonMusicaFondo
    ) {

        controlMusicaFondo.style.display =
            "none";

        return;
    }


    const pausada =
        musicaFondo.paused;


    botonMusicaFondo.classList.toggle(
        "musica-activa",
        !pausada &&
        !esperandoSiguienteCancion
    );


    botonMusicaFondo.classList.toggle(
        "musica-pausada",
        pausada ||
        esperandoSiguienteCancion
    );


    const texto =
        botonMusicaFondo.querySelector(
            ".texto-musica-fondo"
        );


    if (!texto) {

        return;
    }


    if (
        esperandoSiguienteCancion
    ) {

        texto.textContent =
            "Siguiente...";

        return;
    }


    texto.textContent =
        pausada
            ?
            "Música pausada"
            :
            "Música";
}


function prepararCancion(
    indice
) {

    if (!musicaFondo) {

        return;
    }


    const total =
        LISTA_MUSICA_FONDO.length;


    indiceMusicaFondo =
        (
            indice % total +
            total
        ) % total;


    const cancion =
        obtenerCancionActual();


    fadeFinalAplicado =
        false;


    musicaFondo.src =
        cancion.archivo;


    musicaFondo.loop =
        false;


    musicaFondo.load();


    actualizarInfoCancion();


    actualizarBotonMusicaFondo();
}


function fadeVolumenMusica(
    desde,
    hasta,
    duracion,
    alTerminar = null
) {

    if (!musicaFondo) {

        return;
    }


    clearInterval(
        intervaloFadeMusica
    );


    const pasos =
        Math.max(
            1,
            Math.round(
                duracion / 90
            )
        );


    let paso =
        0;


    musicaFondo.volume =
        Math.max(
            0,
            Math.min(
                1,
                desde
            )
        );


    intervaloFadeMusica =
        setInterval(
            () => {

                paso++;


                const progreso =
                    Math.min(
                        1,
                        paso / pasos
                    );


                const volumen =
                    desde +
                    (
                        hasta - desde
                    ) *
                    progreso;


                musicaFondo.volume =
                    Math.max(
                        0,
                        Math.min(
                            1,
                            volumen
                        )
                    );


                if (
                    progreso >= 1
                ) {

                    clearInterval(
                        intervaloFadeMusica
                    );


                    intervaloFadeMusica =
                        null;


                    if (
                        typeof alTerminar ===
                        "function"
                    ) {

                        alTerminar();
                    }
                }

            },
            90
        );
}


function fadeInMusicaFondo() {

    if (!musicaFondo) {

        return;
    }


    fadeVolumenMusica(
        0,
        VOLUMEN_MUSICA_FONDO,
        DURACION_FADE_ENTRADA
    );
}


async function reproducirCancionActual(
    usarFade = true
) {

    if (!musicaFondo) {

        return;
    }


    clearTimeout(
        timeoutSiguienteCancion
    );


    timeoutSiguienteCancion =
        null;


    esperandoSiguienteCancion =
        false;


    try {

        if (
            usarFade
        ) {

            musicaFondo.volume =
                0;

        } else {

            musicaFondo.volume =
                VOLUMEN_MUSICA_FONDO;
        }


        await musicaFondo.play();


        musicaFondoIniciada =
            true;


        musicaFondoSilenciada =
            false;


        if (
            usarFade
        ) {

            fadeInMusicaFondo();
        }


        actualizarBotonMusicaFondo();

    } catch (error) {

        actualizarBotonMusicaFondo();
    }
}


async function iniciarMusicaFondo() {

    if (!musicaFondo) {

        return;
    }


    if (
        musicaFondoSilenciada &&
        musicaFondoIniciada
    ) {

        return;
    }


    if (
        !musicaFondo.getAttribute(
            "src"
        )
    ) {

        prepararCancion(
            indiceMusicaFondo
        );
    }


    await reproducirCancionActual(
        true
    );
}


function pausarMusicaFondo(
    pausaManual = true
) {

    if (!musicaFondo) {

        return;
    }


    limpiarTemporizadoresMusica();


    esperandoSiguienteCancion =
        false;


    musicaFondo.pause();


    musicaFondo.volume =
        VOLUMEN_MUSICA_FONDO;


    if (
        pausaManual
    ) {

        musicaFondoSilenciada =
            true;
    }


    actualizarBotonMusicaFondo();
}


async function alternarMusicaFondo() {

    if (!musicaFondo) {

        return;
    }


    if (
        esperandoSiguienteCancion
    ) {

        clearTimeout(
            timeoutSiguienteCancion
        );


        timeoutSiguienteCancion =
            null;


        esperandoSiguienteCancion =
            false;


        musicaFondoSilenciada =
            false;


        prepararCancion(
            indiceMusicaFondo + 1
        );


        await reproducirCancionActual(
            true
        );


        return;
    }


    if (
        musicaFondo.paused
    ) {

        musicaFondoSilenciada =
            false;


        await reproducirCancionActual(
            true
        );

    } else {

        pausarMusicaFondo(
            true
        );
    }
}


function programarSiguienteCancion() {

    if (!musicaFondo) {

        return;
    }


    limpiarTemporizadoresMusica();


    esperandoSiguienteCancion =
        true;


    musicaFondo.volume =
        0;


    actualizarBotonMusicaFondo();


    timeoutSiguienteCancion =
        setTimeout(
            async () => {

                esperandoSiguienteCancion =
                    false;


                prepararCancion(
                    indiceMusicaFondo + 1
                );


                if (
                    !musicaFondoSilenciada
                ) {

                    await reproducirCancionActual(
                        true
                    );
                }

            },
            INTERVALO_ENTRE_CANCIONES
        );
}


function cambiarCancionManual(
    direccion
) {

    if (!musicaFondo) {

        return;
    }


    const estabaReproduciendo =
        (
            !musicaFondo.paused &&
            !esperandoSiguienteCancion
        ) ||
        esperandoSiguienteCancion;


    limpiarTemporizadoresMusica();


    esperandoSiguienteCancion =
        false;


    const cambiar =
        () => {

            musicaFondo.pause();


            musicaFondo.volume =
                0;


            prepararCancion(
                indiceMusicaFondo +
                direccion
            );


            if (
                estabaReproduciendo
            ) {

                timeoutSiguienteCancion =
                    setTimeout(
                        async () => {

                            await reproducirCancionActual(
                                true
                            );

                        },
                        INTERVALO_CAMBIO_MANUAL
                    );

            } else {

                musicaFondo.volume =
                    VOLUMEN_MUSICA_FONDO;


                actualizarBotonMusicaFondo();
            }
        };


    if (
        estabaReproduciendo
    ) {

        fadeVolumenMusica(
            musicaFondo.volume,
            0,
            450,
            cambiar
        );

    } else {

        cambiar();
    }
}


botonMusicaFondo.addEventListener(
    "click",
    alternarMusicaFondo
);


botonMusicaAnterior.addEventListener(
    "click",
    () => {

        cambiarCancionManual(
            -1
        );
    }
);


botonMusicaSiguiente.addEventListener(
    "click",
    () => {

        cambiarCancionManual(
            1
        );
    }
);


/*
   Un poco antes de terminar cada canción,
   baja el volumen suavemente.
*/

musicaFondo.addEventListener(
    "timeupdate",
    () => {

        if (
            !musicaFondo.duration ||
            !Number.isFinite(
                musicaFondo.duration
            ) ||
            musicaFondo.paused ||
            esperandoSiguienteCancion ||
            fadeFinalAplicado
        ) {

            return;
        }


        const restante =
            musicaFondo.duration -
            musicaFondo.currentTime;


        if (
            restante <=
            DURACION_FADE_SALIDA / 1000
        ) {

            fadeFinalAplicado =
                true;


            fadeVolumenMusica(
                musicaFondo.volume,
                0,
                DURACION_FADE_SALIDA
            );
        }
    }
);


musicaFondo.addEventListener(
    "ended",
    () => {

        if (
            musicaFondoSilenciada
        ) {

            actualizarBotonMusicaFondo();

            return;
        }


        programarSiguienteCancion();
    }
);


function activarMusicaEnPrimeraInteraccion() {

    const intentarInicio =
        async () => {

            if (
                !musicaFondoIniciada &&
                !musicaFondoSilenciada
            ) {

                await iniciarMusicaFondo();
            }


            document.removeEventListener(
                "pointerdown",
                intentarInicio
            );


            document.removeEventListener(
                "keydown",
                intentarInicio
            );
        };


    document.addEventListener(
        "pointerdown",
        intentarInicio
    );


    document.addEventListener(
        "keydown",
        intentarInicio
    );
}


/*
   Cuando se abre una canción externa del jardín,
   la música ambiental se pausa para evitar
   que se escuchen dos canciones al mismo tiempo.
*/

document.addEventListener(
    "click",
    evento => {

        const enlaceCancion =
            evento.target.closest(
                `
                    a.boton-cancion,
                    a.boton-cancion-secreta-modal,
                    a.boton-spotify-secreto,
                    a.boton-1111
                `
            );


        if (!enlaceCancion) {

            return;
        }


        pausarMusicaFondo(
            false
        );
    }
);


prepararCancion(
    0
);


actualizarBotonMusicaFondo();



/* =====================================================
   FLORES
===================================================== */

const floresDelJardin = [

    {
        tipo: "girasol",

        titulo:
            "Girasol 🌻",

        mensaje:
            "Esta es la primera flor de este pequeño jardín.",

        carta:
            "Todo jardín necesita un comienzo. Este girasol fue el primero y por eso siempre tendrá algo distinto.",

        linkCancion:
            "https://open.spotify.com/playlist/1ogLdpmc1bbYjMQCOBoVfx?si=dfa95b5cf50747a0",

        textoBoton:
            "Abrir playlist en Spotify",

        tipoAccion:
            "playlist-secreta"
    },


    {
        tipo: "tulipan",

        titulo:
            "Tulipán morado 💜",

        mensaje:
            "Quise dejarte este tulipán morado como un detalle lindo, suave y especial para ti.",

        carta:
            "Este tulipán empezó como un detalle sencillo. Tal vez por eso me gusta: no necesita llamar demasiado la atención para tener un lugar especial dentro del jardín.",

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

        carta:
            "El lirio tiene algo tranquilo. Tal vez por eso terminó aquí.",

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

        carta:
            "La flor de nube está hecha de muchas cosas pequeñas que juntas terminan formando algo mucho más bonito.",

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

        carta:
            "La peonía parece complicada cuando uno mira todos sus pétalos, aunque en realidad cada uno simplemente ocupa su lugar.",

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

        carta:
            "No escogí la camelia porque necesitara destacar. La escogí precisamente porque lo hace sin intentarlo.",

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

        carta:
            "El jazmín tiene esa extraña capacidad de seguir presente incluso cuando uno ya no lo está mirando.",

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

        carta:
            "Esta orquídea ocupa un lugar un poco diferente. Desde antes de agregarla ya sabía que su canción tenía que funcionar como una dedicatoria especial.",

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

        carta:
            "Hay recuerdos que funcionan como ciertos aromas: aparecen sin que uno los llame y de repente están ahí.",

        linkCancion:
            "https://www.youtube.com/watch?v=2vo_BzD9gu0",

        textoBoton:
            "♪ Te diré"
    },


    {
        tipo: "anemona",

        titulo:
            "Anémona blanca 🤍",

        mensaje:
            "Supongo que hay cosas que uno termina admitiendo poco a poco, incluso cuando al principio intenta hacer como si no pasara nada.",

        carta:
            "La anémona parece sencilla desde lejos, pero su centro cambia por completo cuando uno se acerca.",

        linkCancion:
            "https://www.youtube.com/watch?v=4Ja6WLrZlAE",

        textoBoton:
            "♪ Confieso"
    },


    {
        tipo: "magnolia",

        titulo:
            "Magnolia rosa 🌸",

        mensaje:
            "Hay personas que desde el primer momento dejan algo difícil de explicar. A veces uno tarda en entender qué fue, pero no en notar que algo cambió.",

        carta:
            "Elegí una magnolia porque hay algo especial en la forma en que abre sus pétalos.",

        linkCancion:
            "https://www.youtube.com/watch?v=PKZFG4BTQL4",

        textoBoton:
            "♪ Amor a Primera"
    },


    {
        tipo: "nomeolvides",

        titulo:
            "No me olvides 💙",

        mensaje:
            "Este es mi artista favorito y esta canción es un pedacito de mí para ti.",

        carta:
            "Hay canciones que uno simplemente escucha y otras que se sienten un poco más propias. Esta viene de mi artista favorito.",

        linkCancion:
            "https://www.youtube.com/watch?v=J5RyC2nW0Oo",

        textoBoton:
            "♪ Si supieras"
    },


    {
        tipo: "clavel",

        titulo:
            "Clavel rojo ❤️",

        mensaje:
            "Hay canciones que dicen demasiado por uno. Esta vez preferí dejar que la música hablara y que esta flor simplemente la acompañara.",

        carta:
            "Elegí un clavel porque tiene una forma distinta de llamar la atención.",

        busquedaCancion:
            "Te Amo y Más El Libro de la Vida",

        textoBoton:
            "♪ Te Amo y Más"
    },


    /* =================================================
       FLOR DE LOTO — REGRESA AL JARDÍN
    ================================================= */

    {
        tipo: "loto",

        titulo:
            "Flor de loto 🪷",

        mensaje:
            "",

        carta:
            "Si ya lo sospechabas, entonces sí: me clavé en ti incluso sin haberte besado. Este jardín fue mi manera de acercarme, de decirte lo que sentía poco a poco, escondiéndolo entre flores, canciones y detalles. Y aunque intenté disimularlo con indirectas, al final tuve que ser más claro en la nota del tulipán, solo para ver si así lograba que lo notaras.",

        busquedaCancion:
            "Permíteme Los Parras",

        textoBoton:
            "♪ Permíteme",

        especial:
            "loto"
    },


    /* =================================================
       CARTA DE HOY
    ================================================= */

    {
        tipo: "cartaHoy",

        titulo:
            "Una carta para ti 💌",

        mensaje:
            "",

        cartaHtml:
            `
                <p>
                    Holi, Esme… o bueno, te diría algún apodo, pero todavía no hemos llegado a eso. Es más, ni siquiera somos algo más que amigos… por ahora.
                </p>

                <p>
                    Quería decirte algo que llevo guardando desde hace como seis o siete meses: <strong>estoy enamorado de ti</strong>. Me daba miedo decírtelo porque no quería arruinar nada de lo que ya teníamos. Aun así, con verte feliz me bastaba para sentirme feliz yo también.
                </p>

                <p>
                    Ahora sé que empezaste a sentir algo por mí y no sabes lo mucho que me alegró saberlo. Perdón si en ese momento no lo demostré demasiado; la verdad me ganaron los nervios, pero por dentro estaba demasiado feliz.
                </p>

                <p>
                    Y como hay un montón de cosas de mí que todavía no sabes, pensé que esta carta también podía servir para contarte un poquito más de quién soy.
                </p>

                <p>
                    Mis películas favoritas son <strong>Titanes del Pacífico</strong>, <strong>Mulán</strong> y <strong>Cómo entrenar a tu dragón</strong>. De verdad las amo. Mis artistas y agrupaciones favoritas son <strong>Kevin Kaarl</strong>, <strong>Siddhartha</strong> y <strong>la Rondalla de Saltillo</strong>. Escucho prácticamente de todo, pero siempre termino regresando a ellos.
                </p>

                <p>
                    Me gusta muchísimo jugar <strong>Minecraft</strong>. También disfruto ver a gente que lo juega, como <strong>VEGETTA777</strong>, <strong>Conterstine</strong> o <strong>Farfadox</strong>. Mis colores favoritos son el <strong>morado</strong> y el <strong>verde</strong>, y la historia de por qué tiene que ver justamente con dos de esos creadores.
                </p>

                <p>
                    Mi número favorito es el <strong>7</strong> y, por si algún día ese dato sirve para algo jaja, soy <strong>Acuario</strong>.
                </p>

                <p>
                    También tengo una historia medio nerd con un color: <strong>rgb(25, 3, 35)</strong>. Es un tono de morado oscuro que vi en un programa cuando estaba en la prepa y, por alguna razón, me gustó tanto que se me quedó grabado.
                </p>

                <p>
                    Mi comida favorita son las <strong>enchiladas</strong>. Me encantan las <strong>naranjas</strong> y las <strong>mandarinas</strong>; con eso ya me haces bastante feliz. También me gusta mucho el <strong>anime</strong>, aunque no tengo uno favorito en concreto.
                </p>

                <p>
                    En fin… esto es solo un poquito de mí. No sé si algún día te sirvan todos estos datos, pero quería que los conocieras porque me importa que poco a poco conozcas también esas partes pequeñas de mí que casi nunca cuento.
                </p>

                <p class="carta-hoy-final">
                    Y sí… después de tantas flores, canciones, notas e indirectas, supongo que ya puedo dejar de intentar esconderlo tanto: <strong>me gustas muchísimo</strong>.
                </p>

                <p class="carta-hoy-pd">
                    <strong>P. D.</strong> Todavía tengo que aprender a disimularlo… aunque contigo está difícil jaja.
                </p>
            `,

        busquedaCancion:
            "Permíteme Los Parras",

        textoBoton:
            "♪ Permíteme — Los Parras",

        especial:
            "carta"
    },


    /* =================================================
       FLOR DE HOY — CEREZO
    ================================================= */

    {
        tipo: "cerezo",

        titulo:
            "Flor de cerezo 🌸",

        mensaje:
            "Creo que hay momentos en los que hablar de más arruina un poquito las cosas. Así que esta vez no voy a intentar explicarlo todo. Quédate un momento aquí, escucha la canción y no digas nada.",

        carta:
            "No todo necesita una explicación. A veces basta con compartir un momento, dejar que una canción haga lo suyo y quedarse un ratito sin intentar ponerle nombre a todo.",

        microMensaje:
            "A veces basta con quedarse un momento.",

        linkCancion:
            "https://m.youtube.com/watch?v=9G9WhNiEqMs&pp=ygUZbm8gZGlnYXMgbmFkYSBsYXRpbiBtYWZpYQ%3D%3D",

        textoBoton:
            "♪ No digas nada"
    },


    /* =================================================
       FLOR DE HOY — DAMA DE NOCHE
    ================================================= */

    {
        tipo: "damanoche",

        titulo:
            "Dama de noche 🤍🌙",

        mensaje:
            "Hay noches que pasan como cualquier otra y otras que, por alguna razón, uno quisiera alargar un poquito más. Esta flor tenía que aparecer de noche.",

        carta:
            "Hay momentos que se sienten distintos cuando cae la noche. No sé si sea por la calma, por la música o simplemente porque algunas cosas se disfrutan más cuando el mundo baja un poquito el ruido.",

        microMensaje:
            "Hay noches que uno quisiera alargar un poco más.",

        busquedaCancion:
            "Toda la noche Barrio Pobre",

        textoBoton:
            "♪ Toda la noche"
    },


    /* =================================================
       OTRA CARTA DE HOY — ADÁN Y EVA
    ================================================= */

    {
        tipo: "cartaHoy2",

        titulo:
            "Otra carta para ti 💌",

        mensaje:
            "",

        cartaHtml:
            `
                <p>
                    Holi holi, Esme. Sabes, me di cuenta de que omití varias cosas en la carta anterior jaja. Por ejemplo, <strong>me gustan mucho los dinosaurios</strong>. Mi favorito siempre va a ser el <strong>Spinosaurus</strong>; lo nerfean cada cierto tiempo, peroooo aun así sigue siendo mi dinosaurio favorito.
                </p>

                <p>
                    Mi flor favorita son las <strong>flores de nube</strong> y, sí, de vez en cuando me compro uno que otro juguete de dinosaurios jaja.
                </p>

                <p>
                    También <strong>amo los atardeceres</strong> y me gustan muchísimo las cosas relacionadas con el <strong>espacio</strong>. Hay algo de mirar el cielo, ya sea cuando se está ocultando el sol o cuando está lleno de estrellas, que simplemente me encanta.
                </p>

                <p>
                    Y otra cosa que no dije: quizá no todas sean mis películas favoritas, pero disfruto muchísimo ver la saga de <strong>Parque Jurásico</strong> y <strong>Mundo Jurásico</strong>, <strong>Interestelar</strong> y hasta <strong>Cars</strong>. También me gustan series como <strong>The Blacklist</strong>, <strong>El Mentalista</strong> o cosas un poquito más caricaturescas como <strong>Dino Rey</strong> y <strong>Dr. Stone</strong>.
                </p>

                <p>
                    Bueno, otro punto que quería decirte es lo de los sábados. Sin problema te puedes desaparecer desde el viernes en la tarde hasta el lunes jaja. <strong>No es necesario que me contestes</strong>. Si tienes poco tiempo libre, prefiero que lo uses para descansar, dormir un rato o hacer lo que tú quieras.
                </p>

                <p>
                    Tal vez ya lo notaste —o quizá todavía no—, pero suelo ser un poquito hostigoso por así decirlo jaja. No sé cómo estructurar bien la idea, pero básicamente puedo escribir bastante o estar muy pendiente. Aun así, no quiero que sientas que tienes que gastar tu tiempo libre contestándome.
                </p>

                <p>
                    Yo no voy a desaparecer de la noche a la mañana… o no sé jaja, la vida siempre da vueltas inesperadas. Pero mientras tanto, si un día estás cansada, ocupada o simplemente quieres desconectarte, hazlo sin problema.
                </p>

                <p class="carta-hoy-final">
                    Y bueno, nada más era eso por esta carta. <strong>Te quiero mucho</strong>. Ojalá que cuando leas esto estés bien &lt;3
                </p>
            `,

        linkCancion:
            "https://www.youtube.com/watch?v=aSjflT_J0Xo&list=RDUeDKgWpw7kI&index=5",

        nombreCancion:
            "Adán y Eva",

        artistaCancion:
            "Paulo Londra",

        textoBoton:
            "♪ Adán y Eva — Paulo Londra",

        especial:
            "carta"
    },


    /* =================================================
       FLOR NUEVA — GARDENIA
    ================================================= */

    {
        tipo: "gardenia",

        titulo:
            "Gardenia blanca 🤍",

        mensaje:
            "Oye, te garantizo que habrá días difíciles. Te garantizo que en algún momento uno o ambos querremos separarnos. Pero también te garantizo que, si no te pido que seas mía, lo lamentaré por el resto de mi vida, porque mi corazón me está diciendo que eres la única para mí.",

        carta:
            "Oye, te garantizo que habrá días difíciles. Te garantizo que en algún momento uno o ambos querremos separarnos. Pero también te garantizo que, si no te pido que seas mía, lo lamentaré por el resto de mi vida, porque mi corazón me está diciendo que eres la única para mí.",

        microMensaje:
            "Prefiero intentarlo que quedarme con la duda.",

        linkCancion:
            "https://m.youtube.com/watch?v=8sY9Cf4HNfY&pp=ygUXZXNxdWUgeW8gdGUgcXVpZXJvIGEgdGk%3D",

        textoBoton:
            "♪ Es que yo te quiero a ti"
    },


    /* =================================================
       FLOR NUEVA — JACARANDA
    ================================================= */

    {
        tipo: "jacaranda",

        titulo:
            "Jacaranda 💜",

        mensaje:
            "To begin with, I love you with a depth and passion that I have felt for no one else in this life. And if it astonishes you, it astonishes me as well. I would never have thought it possible that another human being could occupy my waking and sleeping thoughts to the exclusion of almost everything else. I want nothing else in this life than to be with you, to listen and watch you. Your beautiful voice, your beauty. To argue with you, to laugh with you. To show you things and share things with you. To explore your magnificent mind, to explore your wonderful body. To help you, protect you, serve you, and bash you on the head when I think you are wrong.",

        carta:
            "To begin with, I love you with a depth and passion that I have felt for no one else in this life. And if it astonishes you, it astonishes me as well. I would never have thought it possible that another human being could occupy my waking and sleeping thoughts to the exclusion of almost everything else. I want nothing else in this life than to be with you, to listen and watch you. Your beautiful voice, your beauty. To argue with you, to laugh with you. To show you things and share things with you. To explore your magnificent mind, to explore your wonderful body. To help you, protect you, serve you, and bash you on the head when I think you are wrong.",

        microMensaje:
            "Hay lugares que cambian cuando alguien empieza a importarte.",

        linkCancion:
            "https://m.youtube.com/watch?v=7E9-c2Z6adU&pp=ygUcdG9kYSBlc3RhIGNpdWRhZCBrZXZpbiBrYWFybA%3D%3D",

        textoBoton:
            "♪ Toda esta ciudad"
    }
];


/* =====================================================
   CONTENIDO NUEVO CARGADO DESDE contenido-nuevo.js
===================================================== */

if (
    window.JARDIN_EXT &&
    Array.isArray(
        window.JARDIN_EXT.flores
    )
) {
    floresDelJardin.push(
        ...window.JARDIN_EXT.flores
    );
}


const cantidadFloresPublicas =
    floresDelJardin.filter(
        item =>
            item.especial !==
            "carta"
    ).length;


const cantidadCartasPublicas =
    floresDelJardin.filter(
        item =>
            item.especial ===
            "carta"
    ).length;


/* =====================================================
   DALIA SECRETA
===================================================== */

const florSecreta = {

    tipo:
        "dalia",

    titulo:
        "Dalia nocturna",

    mensaje:
        "Algunas flores tardan un poco más en aparecer. No porque no estuvieran ahí, sino porque necesitaban su momento.",

    carta:
        "Esta flor estuvo escondida desde que comenzó el jardín.",

    microMensaje:
        "No siempre estuvo visible."
};


const florSecretaAmor =
    window.JARDIN_EXT?.florSecretaAmor || null;


/* =====================================================
   SECRETOS DE 3 TOQUES
===================================================== */

const cancionesSecretas = [

    {
        tipo: "tulipan",

        flor:
            "Tulipán morado 💜",

        cancion:
            "Te quiero tanto",

        artista:
            "Kevin Kaarl",

        nota:
            "Aunque no te he besado, ya me clavé.",

        busqueda:
            "Te quiero tanto Kevin Kaarl"
    },


    {
        tipo: "lirio",

        flor:
            "Lirio blanco 🤍",

        cancion:
            "Te lo prometo",

        artista:
            "HUMBE",

        nota:
            "Hay promesas que suenan mejor cuando todavía no necesitan explicarse.",

        busqueda:
            "Te lo prometo HUMBE"
    },


    {
        tipo: "nube",

        flor:
            "Flor de nube 🤍",

        cancion:
            "Morfina",

        artista:
            "HUMBE",

        nota:
            "Hay canciones que consiguen quedarse flotando bastante más de lo esperado.",

        busqueda:
            "Morfina HUMBE"
    },


    {
        tipo: "peonia",

        flor:
            "Peonía rosa 🌸",

        cancion:
            "Aquí hay para llevar",

        artista:
            "La Arrolladora Banda El Limón",

        nota:
            "Por si algún día alguien pregunta si aquí había de sobra.",

        busqueda:
            "Aquí hay para llevar La Arrolladora Banda El Limón"
    },


    {
        tipo: "camelia",

        flor:
            "Camelia roja ❤️",

        cancion:
            "309",

        artista:
            "NSQK",

        nota:
            "Hay números que no significan nada hasta que una canción decide convertirlos en otra cosa.",

        busqueda:
            "309 NSQK"
    },


    {
        tipo: "jazmin",

        flor:
            "Jazmín blanco 🤍",

        cancion:
            "Enculado",

        artista:
            "NSQK y Yakun",

        nota:
            "Esta mejor se queda en la parte secreta por razones bastante obvias.",

        busqueda:
            "Enculado NSQK Yakun"
    },


    {
        tipo: "orquidea",

        flor:
            "Orquídea rosa 🌺",

        cancion:
            "Viento",

        artista:
            "Caifanes",

        nota:
            "Hay cosas que no se ven, pero de todas formas terminan moviéndolo todo.",

        busqueda:
            "Viento Caifanes"
    },


    {
        tipo: "lavanda",

        flor:
            "Lavanda violeta 💜",

        cancion:
            "Flores",

        artista:
            "LATIN MAFIA",

        nota:
            "Era imposible hacer todo un jardín y no terminar escondiendo esta canción en algún lugar.",

        busqueda:
            "Flores LATIN MAFIA"
    },


    {
        tipo: "anemona",

        flor:
            "Anémona blanca 🤍",

        cancion:
            "Ropa de bazar",

        artista:
            "Ed Maverick",

        nota:
            "Hay cosas que parecen comunes hasta que alguien termina dándoles otro significado.",

        busqueda:
            "Ropa de bazar Ed Maverick"
    },


    {
        tipo: "magnolia",

        flor:
            "Magnolia rosa 🌸",

        cancion:
            "Paraíso Lunar",

        artista:
            "Siddhartha",

        nota:
            "Hay lugares a los que uno llega solamente por unos minutos y aun así quisiera quedarse.",

        busqueda:
            "Paraíso Lunar Siddhartha"
    },


    {
        tipo: "nomeolvides",

        flor:
            "No me olvides 💙",

        cancion:
            "Paraíso Lunar",

        artista:
            "Siddhartha",

        nota:
            "Tal vez por eso esta canción terminó encontrando más de un lugar dentro del jardín.",

        busqueda:
            "Paraíso Lunar Siddhartha"
    },


    {
        tipo: "clavel",

        flor:
            "Clavel rojo ❤️",

        cancion:
            "Me Hace Falta",

        artista:
            "Siddhartha",

        nota:
            "A veces se puede notar que algo haría falta incluso antes de que realmente se vaya.",

        busqueda:
            "Me Hace Falta Siddhartha"
    }
];


let secretosVistos =
    leerJSON(
        CLAVES.secretosVistos,
        []
    );


let secretoDesbloqueado =
    localStorage.getItem(
        CLAVES.secretoDesbloqueado
    ) === "si";


/* =====================================================
   LLUVIA DE PÉTALOS DEL LOTO
===================================================== */

function lluviaLoto() {

    const anterior =
        document.querySelector(
            ".lluvia-petalos-loto"
        );


    if (anterior) {

        anterior.remove();
    }


    const lluvia =
        document.createElement(
            "div"
        );


    lluvia.className =
        "lluvia-petalos-loto";


    for (let i = 0; i < 70; i++) {

        const petalo =
            document.createElement(
                "span"
            );


        petalo.className =
            "petalo-lluvia-loto";


        petalo.style.left =
            `${Math.random() * 100}%`;


        petalo.style.setProperty(
            "--loto-ancho",
            `${8 + Math.random() * 12}px`
        );


        petalo.style.setProperty(
            "--loto-duracion",
            `${4.5 + Math.random() * 4}s`
        );


        petalo.style.setProperty(
            "--loto-retraso",
            `${Math.random() * 1.3}s`
        );


        petalo.style.setProperty(
            "--desvio-1",
            `${-50 + Math.random() * 100}px`
        );


        petalo.style.setProperty(
            "--desvio-2",
            `${-80 + Math.random() * 160}px`
        );


        petalo.style.setProperty(
            "--desvio-3",
            `${-110 + Math.random() * 220}px`
        );


        lluvia.appendChild(
            petalo
        );
    }


    document.body.appendChild(
        lluvia
    );


    setTimeout(
        () => {

            lluvia.remove();

        },
        9500
    );
}


/* =====================================================
   CARTA NORMAL
===================================================== */

function abrirCarta(
    config
) {

    contenidoModal.innerHTML = `
        <div class="carta-flor">

            <p class="modal-etiqueta">
                UNA PEQUEÑA CARTA
            </p>

            <h2>
                ${config.titulo}
            </h2>

            <div class="papel-carta">

                <p>
                    ${config.carta}
                </p>

            </div>

        </div>
    `;


    cerrarModalBoton.style.display =
        "";


    capaModal.classList.add(
        "mostrar"
    );
}


/* =====================================================
   CARTA DE HOY
===================================================== */

function abrirCartaHoy(
    config
) {

    const enlace =
        config.linkCancion ||
        (
            config.busquedaCancion
                ?
                enlaceYouTube(
                    config.busquedaCancion
                )
                :
                ""
        );


    contenidoModal.innerHTML = `
        <div
            class="carta-flor carta-hoy"
        >

            <p class="modal-etiqueta">
                HOY EL JARDÍN TRAJO UNA CARTA
            </p>

            <h2>
                ${config.titulo}
            </h2>

            <div class="papel-carta carta-hoy-contenido">

                ${config.cartaHtml}

                <div class="carta-hoy-separador"></div>

                <div class="carta-hoy-cancion">

                    <span>
                        UNA CANCIÓN PARA ESTA CARTA
                    </span>

                    <strong>
                        ${config.nombreCancion || "Permíteme"}
                    </strong>

                    <small>
                        ${config.artistaCancion || "Los Parras"}
                    </small>

                    ${
                        enlace
                            ?
                            `
                                <a
                                    class="boton-cancion-secreta-modal boton-permiteme"
                                    href="${enlace}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ${config.textoBoton}
                                </a>
                            `
                            :
                            ""
                    }

                </div>

            </div>

        </div>
    `;


    capaModal.classList.add(
        "mostrar"
    );


    lluviaLoto();
}


/* =====================================================
   CANCIÓN SECRETA
===================================================== */

function abrirCancionSecreta(
    tipo
) {

    const secreto =
        cancionesSecretas.find(
            elemento =>
                elemento.tipo ===
                tipo
        );


    if (!secreto) {

        return;
    }


    if (
        !secretosVistos.includes(
            secreto.tipo
        )
    ) {

        secretosVistos.push(
            secreto.tipo
        );


        guardarJSON(
            CLAVES.secretosVistos,
            secretosVistos
        );
    }


    revelarSecreto(
        false
    );


    actualizarSecreto();


    contenidoModal.innerHTML = `
        <div class="carta-flor">

            <p class="modal-etiqueta">
                UNA PEQUEÑA CARTA
            </p>

            <h2>
                ${secreto.flor}
            </h2>

            <div class="papel-carta">

                <p>
                    ${secreto.nota}
                </p>

                <div class="cancion-escondida">

                    <span>
                        CANCIÓN ESCONDIDA
                    </span>

                    <strong>
                        ${secreto.cancion}
                    </strong>

                    <small>
                        ${secreto.artista}
                    </small>

                    <a
                        class="boton-cancion-secreta-modal"
                        href="${enlaceYouTube(secreto.busqueda)}"
                        target="_blank"
                    >
                        Escuchar canción
                    </a>

                </div>

            </div>

        </div>
    `;


    capaModal.classList.add(
        "mostrar"
    );
}


/* =====================================================
   3 TOQUES
===================================================== */

const secuenciasSecretas =
    {};


function toqueSecreto(
    tipo
) {

    const existe =
        cancionesSecretas.some(
            item =>
                item.tipo === tipo
        );


    if (!existe) {

        return false;
    }


    if (
        !secuenciasSecretas[tipo]
    ) {

        secuenciasSecretas[tipo] = {

            cantidad:
                0,

            timer:
                null
        };
    }


    const estado =
        secuenciasSecretas[tipo];


    clearTimeout(
        estado.timer
    );


    estado.cantidad++;


    if (
        estado.cantidad >= 3
    ) {

        estado.cantidad =
            0;


        return true;
    }


    estado.timer =
        setTimeout(
            () => {

                estado.cantidad =
                    0;

            },
            1300
        );


    return false;
}


/* =====================================================
   SOBRE DE LA CARTA DE HOY
===================================================== */

function crearSobreCartaHoy() {

    const sobre =
        document.createElement(
            "div"
        );


    sobre.className =
        "sobre-carta-hoy";


    sobre.innerHTML = `
        <div class="sobre-carta-sombra"></div>

        <div class="sobre-carta-papel">

            <span class="linea-sobre linea-sobre-1"></span>
            <span class="linea-sobre linea-sobre-2"></span>
            <span class="linea-sobre linea-sobre-3"></span>
            <span class="linea-sobre linea-sobre-4"></span>

            <small>
                PARA ESME
            </small>

        </div>

        <div class="sobre-carta-base"></div>

        <div
            class="sobre-carta-lado sobre-carta-lado-izquierdo"
        ></div>

        <div
            class="sobre-carta-lado sobre-carta-lado-derecho"
        ></div>

        <div class="sobre-carta-tapa"></div>

        <div class="sobre-carta-sello">
            ♡
        </div>
    `;


    return sobre;
}


/* =====================================================
   TARJETA DE FLOR
===================================================== */

function crearTarjetaFlor(
    config,
    esSecreta = false
) {

    const esLoto =
        config.tipo === "loto";


    const esCartaHoy =
        config.especial ===
        "carta";


    const tarjeta =
        document.createElement(
            "article"
        );


    tarjeta.className =
        `tarjeta-flor tarjeta-${config.tipo}`;


    tarjeta.dataset.flor =
        config.tipo;


    if (esSecreta) {

        tarjeta.classList.add(
            "tarjeta-flor-secreta"
        );
    }


    if (esCartaHoy) {

        tarjeta.classList.add(
            "tarjeta-carta-hoy"
        );
    }


    const titulo =
        document.createElement(
            "h2"
        );


    titulo.className =
        "titulo-flor";


    titulo.textContent =
        config.titulo;


    const envoltura =
        document.createElement(
            "div"
        );


    envoltura.className =
        "envoltura-flor flor-interactiva";


    envoltura.tabIndex =
        0;


    if (esCartaHoy) {

        envoltura.classList.add(
            "envoltura-carta-hoy"
        );


        envoltura.appendChild(
            crearSobreCartaHoy()
        );

    } else if (
        Flores[config.tipo]
    ) {

        envoltura.appendChild(
            Flores[config.tipo]()
        );
    }


    const memoria =
        document.createElement(
            "p"
        );


    memoria.className =
        "memoria-flor";


    const pista =
        document.createElement(
            "p"
        );


    pista.className =
        "pista-carta";


    pista.textContent =
        esCartaHoy
            ?
            "Toca el sobre"
            :
            esLoto
                ?
                "Toca el loto"
                :
                "Toca la flor";


    const nota =
        document.createElement(
            "div"
        );


    nota.className =
        "nota-flor";


    if (
        !esLoto &&
        !esCartaHoy &&
        config.mensaje
    ) {

        const texto =
            document.createElement(
                "p"
            );


        texto.textContent =
            config.mensaje;


        nota.appendChild(
            texto
        );
    }


    const enlace =
        config.linkCancion ||
        (
            config.busquedaCancion
                ?
                enlaceYouTube(
                    config.busquedaCancion
                )
                :
                ""
        );


    if (
        enlace &&
        !esCartaHoy
    ) {

        if (
            config.tipoAccion ===
            "playlist-secreta"
        ) {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "boton-cancion boton-playlist-secreta";


            boton.textContent =
                config.textoBoton;


            let clicks =
                0;


            let timer;


            boton.addEventListener(
                "click",
                evento => {

                    evento.stopPropagation();


                    clearTimeout(
                        timer
                    );


                    clicks++;


                    boton.classList.remove(
                        "boton-pulsado"
                    );


                    void boton.offsetWidth;


                    boton.classList.add(
                        "boton-pulsado"
                    );


                    if (
                        clicks === 3
                    ) {

                        clicks = 0;


                        contenidoModal.innerHTML = `
                            <div class="carta-flor">

                                <p class="modal-etiqueta">
                                    UNA PEQUEÑA CARTA
                                </p>

                                <h2>
                                    Girasol 🌻
                                </h2>

                                <div class="papel-carta">

                                    <p>
                                        La primera flor también guardaba algo. Esta vez no era otra canción, sino una playlist que estaba escondida aquí desde el principio.
                                    </p>

                                    <div class="cancion-escondida">

                                        <span>
                                            PLAYLIST ESCONDIDA
                                        </span>

                                        <strong>
                                            Otra parte del jardín
                                        </strong>

                                        <a
                                            href="${enlace}"
                                            target="_blank"
                                            class="boton-spotify-secreto"
                                        >
                                            Abrir en Spotify
                                        </a>

                                    </div>

                                </div>

                            </div>
                        `;


                        capaModal.classList.add(
                            "mostrar"
                        );


                        revelarSecreto(
                            false
                        );


                        return;
                    }


                    timer =
                        setTimeout(
                            () => {

                                clicks = 0;

                            },
                            1500
                        );
                }
            );


            nota.appendChild(
                boton
            );

        } else {

            const boton =
                document.createElement(
                    "a"
                );


            boton.className =
                "boton-cancion";


            boton.href =
                enlace;


            boton.target =
                "_blank";


            boton.rel =
                "noopener noreferrer";


            boton.textContent =
                config.textoBoton;


            nota.appendChild(
                boton
            );
        }
    }


    let botonFavorita =
        null;


    if (
        !esLoto &&
        !esCartaHoy
    ) {

        botonFavorita =
            document.createElement(
                "button"
            );


        botonFavorita.className =
            "boton-favorita";


        botonFavorita.type =
            "button";


        botonFavorita.addEventListener(
            "click",
            evento => {

                evento.stopPropagation();


                florFavorita =
                    config.tipo;


                localStorage.setItem(
                    CLAVES.favorita,
                    florFavorita
                );


                actualizarFavoritas();


                mostrarToast(
                    "Favorita guardada."
                );
            }
        );
    }


    let timerCarta;


    function reaccionar() {

        visitasFlores[
            config.tipo
        ] =
            (
                visitasFlores[
                    config.tipo
                ] || 0
            ) + 1;


        guardarJSON(
            CLAVES.visitasFlores,
            visitasFlores
        );


        /* =========================================
           CARTA DE HOY
        ========================================= */

        if (esCartaHoy) {

            const sobre =
                envoltura.querySelector(
                    ".sobre-carta-hoy"
                );


            if (!sobre) {

                return;
            }


            sobre.classList.remove(
                "abierto"
            );


            void sobre.offsetWidth;


            sobre.classList.add(
                "abierto"
            );


            setTimeout(
                () => {

                    abrirCartaHoy(
                        config
                    );

                },
                900
            );


            setTimeout(
                () => {

                    sobre.classList.remove(
                        "abierto"
                    );

                },
                4300
            );


            return;
        }


        /* =========================================
           LOTO
        ========================================= */

        if (esLoto) {

            const loto =
                envoltura.querySelector(
                    ".loto"
                );


            if (!loto) {

                return;
            }


            loto.classList.remove(
                "abierta"
            );


            void loto.offsetWidth;


            loto.classList.add(
                "abierta"
            );


            setTimeout(
                () => {

                    abrirCartaLoto(
                        config
                    );

                },
                900
            );


            setTimeout(
                () => {

                    loto.classList.remove(
                        "abierta"
                    );

                },
                4500
            );


            return;
        }


        /* =========================================
           FLORES NORMALES
        ========================================= */

        const secreto =
            toqueSecreto(
                config.tipo
            );


        clearTimeout(
            timerCarta
        );


        if (secreto) {

            abrirCancionSecreta(
                config.tipo
            );


            return;
        }


        timerCarta =
            setTimeout(
                () => {

                    abrirCarta(
                        config
                    );

                },
                720
            );
    }


    envoltura.addEventListener(
        "click",
        reaccionar
    );


    envoltura.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key ===
                "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                reaccionar();
            }
        }
    );


    tarjeta.appendChild(
        titulo
    );


    tarjeta.appendChild(
        envoltura
    );


    tarjeta.appendChild(
        memoria
    );


    tarjeta.appendChild(
        pista
    );


    tarjeta.appendChild(
        nota
    );


    if (botonFavorita) {

        tarjeta.appendChild(
            botonFavorita
        );
    }


    return tarjeta;
}


/* =====================================================
   INTRO
===================================================== */

function crearIntro() {

    const intro =
        document.createElement(
            "section"
        );


    intro.className =
        "intro-jardin";


    let texto =
        "No todo aparece durante la primera visita.";


    if (
        visitasJardin >= 3
    ) {

        texto =
            "Parece que este jardín ya reconoce esta visita.";
    }


    if (
        visitasJardin >= 7
    ) {

        texto =
            "A estas alturas, algunas flores ya saben que volverás.";
    }


    intro.innerHTML = `
        <div class="intro-destello"></div>

        <p class="intro-kicker">
            UN JARDÍN QUE CAMBIA POCO A POCO
        </p>

        <h2>
            Algunas flores dicen más
            cuando las miras de cerca.
        </h2>

        <p class="resumen-intro">
            Cada flor guarda una canción,
            una nota y, de vez en cuando,
            algo que no aparece a simple vista.
        </p>

        <div class="intro-badges">

            <span class="intro-badge">
                ${cantidadFloresPublicas} flores
            </span>

            <span class="intro-badge">
                ${cantidadCartasPublicas} carta${cantidadCartasPublicas === 1 ? "" : "s"}
            </span>

            <span class="intro-badge">
                20 notas
            </span>

            <span class="intro-badge">
                20 despedidas
            </span>

            <span class="intro-badge">
                secretos
            </span>

        </div>

        <p class="intro-frase">
            ${texto}
        </p>
    `;


    return intro;
}


/* =====================================================
   PANEL SUPERIOR
===================================================== */

function crearPanelSuperior() {

    const panel =
        document.createElement(
            "section"
        );


    panel.className =
        "panel-superior";


    panel.innerHTML = `
        <div class="panel-icono-musica">
            ♫
        </div>

        <div class="panel-superior-texto">

            <p class="panel-etiqueta">
                BANDA SONORA
            </p>

            <h3>
                Las canciones del jardín
            </h3>

            <p class="texto-playlist">
                Todas las canciones que acompañan
                las flores están reunidas aquí.
            </p>

        </div>

        <div class="acciones-superiores">

            <button
                id="boton-playlist-principal"
                class="boton-playlist"
            >
                Abrir playlist en Spotify
            </button>

            <button
                id="boton-fondo"
                class="boton-fondo"
            >
                Cambiar a fondo morado
            </button>

        </div>
    `;


    panel
        .querySelector(
            "#boton-playlist-principal"
        )
        .addEventListener(
            "click",
            () => {

                contenidoModal.innerHTML = `
                    <div class="carta-flor">

                        <p class="modal-etiqueta">
                            LAS CANCIONES DEL JARDÍN
                        </p>

                        <h2>
                            Playlist
                        </h2>

                        <div class="papel-carta">

                            <p>
                                Todas las canciones que han ido apareciendo entre las flores están reunidas aquí.
                            </p>

                            <a
                                class="boton-spotify-secreto"
                                href="https://open.spotify.com/playlist/6XCeXM270zHmOE1vY9MeXA?si=wHKqXyp-SyKISRnlus0oMQ&utm_source=whatsapp&pi=wjAzlEK-QASgo"
                                target="_blank"
                            >
                                Abrir en Spotify
                            </a>

                        </div>

                    </div>
                `;


                capaModal.classList.add(
                    "mostrar"
                );
            }
        );


    return panel;
}


/* =====================================================
   PANEL PROGRESO
===================================================== */

const panelProgreso =
    document.createElement(
        "section"
    );


panelProgreso.className =
    "panel-progreso";


function htmlFrase() {

    return coleccionables
        .map(
            item => {

                const encontrada =
                    notasObtenidas.includes(
                        item.id
                    );


                return `
                    <span
                        class="
                            fragmento-frase
                            ${
                                encontrada
                                    ?
                                    "descubierto"
                                    :
                                    "oculto"
                            }
                        "
                    >
                        ${
                            encontrada
                                ?
                                item.fragmento
                                :
                                "•••"
                        }
                    </span>
                `;
            }
        )
        .join("");
}


function htmlFraseAmor() {

    return fraseAmor
        .map(
            item => {

                const encontrada =
                    notasAmorObtenidas.includes(
                        item.id
                    );


                return `
                    <span
                        class="
                            fragmento-frase
                            ${
                                encontrada
                                    ?
                                    "descubierto"
                                    :
                                    "oculto"
                            }
                        "
                    >
                        ${
                            encontrada
                                ?
                                item.fragmento
                                :
                                "•••"
                        }
                    </span>
                `;
            }
        )
        .join("");
}


function actualizarProgreso() {

    const total =
        notasObtenidas.length +
        despedidasObtenidas.length;


    const porcentaje =
        Math.min(
            100,
            total / 40 * 100
        );


    const fraseUnoCompleta =
        notasObtenidas.length >= 20;


    const fraseDosCompleta =
        fraseAmor.length > 0 &&
        notasAmorObtenidas.length >=
        fraseAmor.length;


    panelProgreso.innerHTML = `
        <div class="progreso-cabecera">

            <div>

                <p class="panel-etiqueta">
                    TU RECORRIDO
                </p>

                <h3>
                    Coleccionables
                </h3>

            </div>

            <div class="contador-jardin">

                <strong>
                    ${total}
                </strong>

                <span>
                    /40
                </span>

            </div>

        </div>

        <div class="barra-progreso">

            <span
                style="
                    width:${porcentaje}%
                "
            ></span>

        </div>

        <div class="datos-progreso">

            <span>
                ${cantidadFloresPublicas} flores + ${cantidadCartasPublicas} carta${cantidadCartasPublicas === 1 ? "" : "s"}
            </span>

            <span>
                ${notasObtenidas.length}/20 notas
            </span>

            <span>
                ${despedidasObtenidas.length}/20 despedidas
            </span>

            ${
                fraseUnoCompleta
                    ?
                    `<span>${notasAmorObtenidas.length}/${fraseAmor.length} frase II</span>`
                    :
                    ""
            }

        </div>

        <button
            id="abrir-coleccion"
            class="abrir-coleccion"
        >
            Ver coleccionables
        </button>

        <p
            id="favorita-actual"
            class="favorita-actual"
        ></p>

        <div class="mensaje-en-construccion">

            <p>
                MENSAJE EN CONSTRUCCIÓN
            </p>

            <div class="frase-fragmentos">
                ${htmlFrase()}
            </div>

        </div>

        ${
            fraseUnoCompleta
                ?
                `
                    <div class="frase-amor-panel">
                        <p>
                            SEGUNDA FRASE
                        </p>

                        <div class="frase-fragmentos">
                            ${htmlFraseAmor()}
                        </div>

                        <span class="frase-amor-estado ${fraseDosCompleta ? "frase-amor-completa" : ""}">
                            ${
                                fraseDosCompleta
                                    ?
                                    "Frase completa · apareció algo nuevo"
                                    :
                                    `${notasAmorObtenidas.length}/${fraseAmor.length} fragmentos encontrados`
                            }
                        </span>
                    </div>
                `
                :
                ""
        }
    `;


    document
        .getElementById(
            "abrir-coleccion"
        )
        .addEventListener(
            "click",
            abrirColeccion
        );


    actualizarFavoritas();
}


/* =====================================================
   FAVORITA
===================================================== */

function actualizarFavoritas() {

    document
        .querySelectorAll(
            ".tarjeta-flor"
        )
        .forEach(
            tarjeta => {

                const boton =
                    tarjeta.querySelector(
                        ".boton-favorita"
                    );


                if (!boton) {

                    return;
                }


                const activa =
                    tarjeta.dataset.flor ===
                    florFavorita;


                tarjeta.classList.toggle(
                    "es-favorita",
                    activa
                );


                boton.textContent =
                    activa
                        ?
                        "Tu favorita"
                        :
                        "Guardar como favorita";
            }
        );


    const texto =
        document.getElementById(
            "favorita-actual"
        );


    if (!texto) {

        return;
    }


    if (!florFavorita) {

        texto.textContent =
            "Aún no has elegido una flor favorita.";

        return;
    }


    const flor =
        floresDelJardin.find(
            item =>
                item.tipo ===
                florFavorita
        );


    texto.textContent =
        flor
            ?
            `Flor favorita: ${flor.titulo}`
            :
            "Flor favorita guardada.";
}


/* =====================================================
   COLECCIÓN
===================================================== */

function abrirColeccion() {

    const fraseUnoCompleta =
        notasObtenidas.length >= 20;


    contenidoModal.innerHTML = `
        <div class="coleccion-modal">

            <p class="modal-etiqueta">
                COLECCIONABLES
            </p>

            <h2>
                Tu colección
            </h2>

            <div class="tabs-coleccion">

                <button
                    class="tab-coleccion activo"
                    data-tab="notas"
                >
                    Notas ${notasObtenidas.length}/20
                </button>

                <button
                    class="tab-coleccion"
                    data-tab="despedidas"
                >
                    Despedidas ${despedidasObtenidas.length}/20
                </button>

                ${
                    fraseUnoCompleta
                        ?
                        `
                            <button
                                class="tab-coleccion"
                                data-tab="amor"
                            >
                                Frase II ${notasAmorObtenidas.length}/${fraseAmor.length}
                            </button>
                        `
                        :
                        ""
                }

            </div>

            <div
                id="tab-notas"
                class="contenido-tab-coleccion"
            ></div>

            <div
                id="tab-despedidas"
                class="contenido-tab-coleccion oculto"
            ></div>

            ${
                fraseUnoCompleta
                    ?
                    `
                        <div
                            id="tab-amor"
                            class="contenido-tab-coleccion oculto"
                        ></div>
                    `
                    :
                    ""
            }

        </div>
    `;


    const notas =
        document.getElementById(
            "tab-notas"
        );


    notas.innerHTML = `
        <div class="frase-coleccion">

            <p>
                Lo que llevas descubierto:
            </p>

            <div class="frase-fragmentos">
                ${htmlFrase()}
            </div>

        </div>

        <div class="rejilla-coleccion">

            ${
                coleccionables.map(
                    item => {

                        const encontrada =
                            notasObtenidas.includes(
                                item.id
                            );


                        return `
                            <article
                                class="
                                    coleccion-item
                                    ${
                                        encontrada
                                            ?
                                            "conseguido"
                                            :
                                            "bloqueado"
                                    }
                                "
                            >

                                <span class="numero-coleccion">
                                    ${String(item.id).padStart(2,"0")}
                                </span>

                                <p class="estado-coleccion">
                                    ${
                                        encontrada
                                            ?
                                            "ENCONTRADA"
                                            :
                                            "BLOQUEADA"
                                    }
                                </p>

                                <h4>
                                    ${
                                        encontrada
                                            ?
                                            item.titulo
                                            :
                                            "Nota desconocida"
                                    }
                                </h4>

                                <p>
                                    ${
                                        encontrada
                                            ?
                                            item.nota
                                            :
                                            "Todavía no ha llegado su momento."
                                    }
                                </p>

                            </article>
                        `;
                    }
                ).join("")
            }

        </div>
    `;


    const desp =
        document.getElementById(
            "tab-despedidas"
        );


    desp.innerHTML = `
        <div class="rejilla-coleccion">

            ${
                despedidas.map(
                    (
                        texto,
                        indice
                    ) => {

                        const id =
                            indice + 1;


                        const encontrada =
                            despedidasObtenidas.includes(
                                id
                            );


                        return `
                            <article
                                class="
                                    coleccion-item
                                    ${
                                        encontrada
                                            ?
                                            "conseguido"
                                            :
                                            "bloqueado"
                                    }
                                "
                            >

                                <span class="numero-coleccion">
                                    ${String(id).padStart(2,"0")}
                                </span>

                                <p class="estado-coleccion">
                                    ${
                                        encontrada
                                            ?
                                            "GUARDADA"
                                            :
                                            "BLOQUEADA"
                                    }
                                </p>

                                <p>
                                    ${
                                        encontrada
                                            ?
                                            texto
                                            :
                                            "Vuelve otro día."
                                    }
                                </p>

                            </article>
                        `;
                    }
                ).join("")
            }

        </div>
    `;


    const amor =
        document.getElementById(
            "tab-amor"
        );


    if (amor) {

        amor.innerHTML = `
            <div class="frase-coleccion">

                <p>
                    Esta vez la frase ya no intenta disimular demasiado:
                </p>

                <div class="frase-fragmentos">
                    ${htmlFraseAmor()}
                </div>

            </div>

            <div class="rejilla-coleccion">

                ${
                    fraseAmor.map(
                        (
                            item,
                            indice
                        ) => {

                            const encontrada =
                                notasAmorObtenidas.includes(
                                    item.id
                                );


                            return `
                                <article
                                    class="
                                        coleccion-item
                                        ${
                                            encontrada
                                                ?
                                                "conseguido"
                                                :
                                                "bloqueado"
                                        }
                                    "
                                >

                                    <span class="numero-coleccion">
                                        ${String(indice + 1).padStart(2,"0")}
                                    </span>

                                    <p class="estado-coleccion">
                                        ${
                                            encontrada
                                                ?
                                                "ENCONTRADA"
                                                :
                                                "BLOQUEADA"
                                        }
                                    </p>

                                    <h4>
                                        ${
                                            encontrada
                                                ?
                                                item.titulo
                                                :
                                                "Nota desconocida"
                                        }
                                    </h4>

                                    <p>
                                        ${
                                            encontrada
                                                ?
                                                item.nota
                                                :
                                                "La segunda frase sigue creciendo."
                                        }
                                    </p>

                                </article>
                            `;
                        }
                    ).join("")
                }

            </div>
        `;
    }


    document
        .querySelectorAll(
            ".tab-coleccion"
        )
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".tab-coleccion"
                            )
                            .forEach(
                                otro =>
                                    otro.classList.remove(
                                        "activo"
                                    )
                            );


                        boton.classList.add(
                            "activo"
                        );


                        const tab =
                            boton.dataset.tab;


                        document
                            .querySelectorAll(
                                ".contenido-tab-coleccion"
                            )
                            .forEach(
                                contenido => {

                                    contenido.classList.toggle(
                                        "oculto",
                                        contenido.id !==
                                        `tab-${tab}`
                                    );
                                }
                            );
                    }
                );
            }
        );


    capaModal.classList.add(
        "mostrar"
    );
}


/* =====================================================
   HORAS PARES
===================================================== */

function revisarHoraFraseAmor() {

    if (
        notasObtenidas.length < 20 ||
        !fraseAmor.length ||
        notasAmorObtenidas.length >=
        fraseAmor.length
    ) {
        return;
    }


    const ahora =
        new Date();


    if (
        ahora.getHours() % 2 !== 0
    ) {
        return;
    }


    const clave =
        claveHora(
            ahora
        );


    /* Evita entregar una nota de la segunda frase
       en la misma hora en la que apareció una de la primera. */
    if (
        horasNotas.includes(
            clave
        ) ||
        horasNotasAmor.includes(
            clave
        )
    ) {
        return;
    }


    const siguiente =
        fraseAmor[
            notasAmorObtenidas.length
        ];


    horasNotasAmor.push(
        clave
    );


    notasAmorObtenidas.push(
        siguiente.id
    );


    guardarJSON(
        "jardin_horas_notas_amor_v1",
        horasNotasAmor
    );


    guardarJSON(
        "jardin_notas_amor_v1",
        notasAmorObtenidas
    );


    actualizarProgreso();


    comprobarFlorSecretaAmor();


    contenidoModal.innerHTML = `
        <div class="nuevo-coleccionable">

            <p class="modal-etiqueta">
                APARECIÓ UNA NOTA DE LA SEGUNDA FRASE
            </p>

            <h2>
                ${siguiente.titulo}
            </h2>

            <div class="nota-encontrada">

                <p>
                    ${siguiente.nota}
                </p>

                <strong>
                    ${siguiente.fragmento}
                </strong>

            </div>

        </div>
    `;


    capaModal.classList.add(
        "mostrar"
    );
}


function revisarHoraColeccionable() {

    if (
        notasObtenidas.length >= 20
    ) {

        revisarHoraFraseAmor();
        return;
    }


    const ahora =
        new Date();


    if (
        ahora.getHours() % 2 !== 0
    ) {
        return;
    }


    const clave =
        claveHora(
            ahora
        );


    if (
        horasNotas.includes(
            clave
        )
    ) {
        return;
    }


    const siguiente =
        coleccionables[
            notasObtenidas.length
        ];


    horasNotas.push(
        clave
    );


    notasObtenidas.push(
        siguiente.id
    );


    guardarJSON(
        CLAVES.horasNotas,
        horasNotas
    );


    guardarJSON(
        CLAVES.notas,
        notasObtenidas
    );


    actualizarProgreso();


    comprobarDalia();


    contenidoModal.innerHTML = `
        <div class="nuevo-coleccionable">

            <p class="modal-etiqueta">
                APARECIÓ ALGO NUEVO
            </p>

            <h2>
                ${siguiente.titulo}
            </h2>

            <div class="nota-encontrada">

                <p>
                    ${siguiente.nota}
                </p>

                <strong>
                    ${siguiente.fragmento}
                </strong>

            </div>

        </div>
    `;


    capaModal.classList.add(
        "mostrar"
    );
}


/* =====================================================
   ESTRUCTURA
===================================================== */

const intro =
    crearIntro();


const panelSuperior =
    crearPanelSuperior();


jardin.insertBefore(
    intro,
    contenedorFlores
);


jardin.insertBefore(
    panelSuperior,
    contenedorFlores
);


jardin.insertBefore(
    panelProgreso,
    contenedorFlores
);


/* =====================================================
   MOSTRAR FLORES
===================================================== */

floresDelJardin.forEach(
    flor => {

        contenedorFlores.appendChild(
            crearTarjetaFlor(
                flor
            )
        );
    }
);


/* =====================================================
   DALIA
===================================================== */

function comprobarDalia() {

    if (
        notasObtenidas.length < 10
    ) {

        return;
    }


    if (
        document.querySelector(
            '[data-flor="dalia"]'
        )
    ) {

        return;
    }


    const tarjeta =
        crearTarjetaFlor(
            florSecreta,
            true
        );


    contenedorFlores.appendChild(
        tarjeta
    );


    requestAnimationFrame(
        () => {

            tarjeta.classList.add(
                "revelada"
            );
        }
    );
}


/* =====================================================
   FLOR SECRETA DE LA SEGUNDA FRASE
===================================================== */

function comprobarFlorSecretaAmor() {

    if (
        !florSecretaAmor ||
        !fraseAmor.length ||
        notasAmorObtenidas.length <
        fraseAmor.length
    ) {
        return;
    }


    if (
        document.querySelector(
            '[data-flor="corazonSangrante"]'
        )
    ) {
        return;
    }


    const tarjeta =
        crearTarjetaFlor(
            florSecretaAmor,
            true
        );


    contenedorFlores.appendChild(
        tarjeta
    );


    requestAnimationFrame(
        () => {

            tarjeta.classList.add(
                "revelada"
            );
        }
    );
}
