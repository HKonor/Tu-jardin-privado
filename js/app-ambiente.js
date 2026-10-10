/* =====================================================
   FONDO
===================================================== */

const botonFondo =
    document.getElementById(
        "boton-fondo"
    );


let timerNoche;


let larga =
    false;


botonFondo.addEventListener(
    "pointerdown",
    () => {

        timerNoche =
            setTimeout(
                () => {

                    larga = true;


                    document.body.classList.toggle(
                        "modo-noche"
                    );


                    setTimeout(
                        () => {

                            larga = false;

                        },
                        500
                    );

                },
                2800
            );
    }
);


[
    "pointerup",
    "pointerleave",
    "pointercancel"
].forEach(
    evento => {

        botonFondo.addEventListener(
            evento,
            () => {

                clearTimeout(
                    timerNoche
                );
            }
        );
    }
);


botonFondo.addEventListener(
    "click",
    () => {

        if (larga) {

            return;
        }


        if (
            document.body.classList.contains(
                "modo-noche"
            )
        ) {

            document.body.classList.remove(
                "modo-noche"
            );

            return;
        }


        document.body.classList.toggle(
            "tema-morado"
        );


        botonFondo.textContent =
            document.body.classList.contains(
                "tema-morado"
            )
                ?
                "Cambiar a fondo amarillo"
                :
                "Cambiar a fondo morado";
    }
);


/* =====================================================
   LLUVIA DESPUÉS DE 2 MIN
===================================================== */

function lluviaEspecial() {

    const lluvia =
        document.createElement(
            "div"
        );


    lluvia.className =
        "lluvia-especial";


    for (let i = 0; i < 48; i++) {

        const petalo =
            document.createElement(
                "span"
            );


        petalo.className =
            "particula-lluvia";


        petalo.style.left =
            `${Math.random() * 100}%`;


        petalo.style.setProperty(
            "--retraso",
            `${Math.random() * -8}s`
        );


        petalo.style.setProperty(
            "--duracion",
            `${5 + Math.random() * 5}s`
        );


        petalo.style.setProperty(
            "--tamano",
            `${6 + Math.random() * 8}px`
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
        14500
    );
}


setTimeout(
    lluviaEspecial,
    120000
);


/* =====================================================
   MARIPOSAS
===================================================== */

let mariposasAplastadas =
    Number(
        localStorage.getItem(
            CLAVES.mariposasAplastadas
        ) || 0
    );


const mensajesMariposa = [

    "La alcanzaste.",

    "Pobre mariposa...",

    "Otra cayó en el jardín.",

    "Definitivamente te gusta aplastarlas.",

    "Bueno... esa tampoco sobrevivió.",

    "Los pétalos fueron lo único que quedó.",

    "Otra más. Ya les estás agarrando práctica."
];


const contadorMariposas =
    document.createElement(
        "div"
    );


contadorMariposas.id =
    "contador-mariposas";


contadorMariposas.className =
    "contador-mariposas-jardin";


document.body.appendChild(
    contadorMariposas
);


function actualizarContadorMariposas() {

    contadorMariposas.textContent =
        `🦋 Mariposas: ${mariposasAplastadas}`;
}


actualizarContadorMariposas();


const coloresMariposas = [

    "mariposa-rosa",

    "mariposa-azul",

    "mariposa-morada",

    "mariposa-naranja",

    "mariposa-verde",

    "mariposa-roja",

    "mariposa-blanca",

    "mariposa-turquesa"
];


function explosionPetalos(
    x,
    y,
    color1,
    color2
) {

    const explosion =
        document.createElement(
            "div"
        );


    explosion.className =
        "explosion-petalos";


    explosion.style.left =
        `${x}px`;


    explosion.style.top =
        `${y}px`;


    explosion.style.setProperty(
        "--petalo-golpe-1",
        color1
    );


    explosion.style.setProperty(
        "--petalo-golpe-2",
        color2
    );


    for (let i = 0; i < 22; i++) {

        const petalo =
            document.createElement(
                "span"
            );


        const angulo =
            Math.random() *
            Math.PI *
            2;


        const distancia =
            45 +
            Math.random() *
            90;


        petalo.className =
            "petalo-explosion";


        petalo.style.setProperty(
            "--petalo-x",
            `${Math.cos(angulo) * distancia}px`
        );


        petalo.style.setProperty(
            "--petalo-y",
            `${Math.sin(angulo) * distancia}px`
        );


        petalo.style.setProperty(
            "--petalo-rotacion",
            `${Math.random() * 600 - 300}deg`
        );


        petalo.style.setProperty(
            "--petalo-retraso",
            `${Math.random() * .12}s`
        );


        petalo.style.setProperty(
            "--petalo-tamano",
            `${6 + Math.random() * 8}px`
        );


        explosion.appendChild(
            petalo
        );
    }


    document.body.appendChild(
        explosion
    );


    setTimeout(
        () => {

            explosion.remove();

        },
        1500
    );
}


function crearMariposa() {

    if (
        document.querySelectorAll(
            ".mariposa-jardin"
        ).length >= 4
    ) {

        return;
    }


    const mariposa =
        document.createElement(
            "button"
        );


    mariposa.className =
        "mariposa-jardin";


    mariposa.classList.add(
        coloresMariposas[
        Math.floor(
            Math.random() *
            coloresMariposas.length
        )
        ]
    );


    if (
        Math.random() < .4
    ) {

        mariposa.classList.add(
            "mariposa-inversa"
        );
    }


    mariposa.innerHTML = `
        <span
            class="ala ala-izquierda"
        ></span>

        <span
            class="cuerpo-mariposa"
        ></span>

        <span
            class="ala ala-derecha"
        ></span>
    `;


    mariposa.style.top =
        `${10 + Math.random() * 72}%`;


    mariposa.style.animationDuration =
        `${9 + Math.random() * 6}s`;


    mariposa.addEventListener(
        "click",
        evento => {

            const estilo =
                getComputedStyle(
                    mariposa
                );


            explosionPetalos(

                evento.clientX,

                evento.clientY,

                estilo.getPropertyValue(
                    "--mariposa-color-1"
                ),

                estilo.getPropertyValue(
                    "--mariposa-color-2"
                )
            );


            mariposasAplastadas++;


            localStorage.setItem(
                CLAVES.mariposasAplastadas,
                String(
                    mariposasAplastadas
                )
            );


            actualizarContadorMariposas();


            mostrarToast(
                mensajesMariposa[
                Math.floor(
                    Math.random() *
                    mensajesMariposa.length
                )
                ]
            );


            mariposa.classList.add(
                "mariposa-atrapada"
            );


            setTimeout(
                () => {

                    mariposa.remove();

                },
                500
            );
        }
    );


    document.body.appendChild(
        mariposa
    );


    setTimeout(
        () => {

            mariposa.remove();

        },
        17000
    );
}


function programarMariposa() {

    setTimeout(
        () => {

            crearMariposa();


            if (
                Math.random() < .65
            ) {

                setTimeout(
                    crearMariposa,
                    1200
                );
            }


            programarMariposa();

        },
        8000 +
        Math.random() *
        8000
    );
}


setTimeout(
    () => {

        crearMariposa();

        programarMariposa();

    },
    4000
);


/* =====================================================
   SECCIÓN SECRETO
===================================================== */

const seccionSecreto =
    document.createElement(
        "section"
    );


seccionSecreto.className =
    "seccion-secreto";


seccionSecreto.innerHTML = `
    <div class="encabezado-secreto">

        <p class="secreto-etiqueta">
            ENCONTRASTE ALGO MÁS
        </p>

        <h2>
            Secreto
        </h2>

        <p>
            Hay cosas escondidas entre las flores.
            Algunas solo aparecen cuando insistes
            un poquito más de lo normal.
        </p>

    </div>

    <div class="kuromi-area">

        <div class="kuromi-css">

            <div
                class="kuromi-oreja kuromi-oreja-izq"
            ></div>

            <div
                class="kuromi-oreja kuromi-oreja-der"
            ></div>

            <div class="kuromi-capucha">

                <div class="kuromi-calavera">
                    ☠
                </div>

                <div class="kuromi-cara">

                    <span
                        class="kuromi-ojo kuromi-ojo-izq"
                    ></span>

                    <span
                        class="kuromi-ojo kuromi-ojo-der"
                    ></span>

                    <span
                        class="kuromi-nariz"
                    ></span>

                    <span
                        class="kuromi-boca"
                    ></span>

                </div>

            </div>

            <div
                class="kuromi-cuerpo"
            ></div>

            <div
                class="kuromi-cola"
            ></div>

        </div>

        <p class="kuromi-texto">
            Parece que ella estaba cuidando esta parte.
        </p>

    </div>

    <div class="secreto-control">

        <p class="contador-secretos">

            <span
                id="secretos-encontrados"
            >
                0
            </span>

            /

            <span>
                ${cancionesSecretas.length}
            </span>

            secretos encontrados

        </p>

        <div class="barra-secretos">

            <span
                id="barra-secretos-progreso"
            ></span>

        </div>

        <p class="pista-secretos">
            Aquí no aparecen las canciones.
            Hay que encontrarlas tocando las flores.
        </p>

    </div>
`;


jardin.appendChild(
    seccionSecreto
);


function revelarSecreto(
    aviso = true
) {

    secretoDesbloqueado =
        true;


    localStorage.setItem(
        CLAVES.secretoDesbloqueado,
        "si"
    );


    seccionSecreto.classList.add(
        "desbloqueado"
    );


    actualizarSecreto();


    if (aviso) {

        mostrarToast(
            "Se desbloqueó el apartado Secreto."
        );
    }
}


function actualizarSecreto() {

    const texto =
        document.getElementById(
            "secretos-encontrados"
        );


    const barra =
        document.getElementById(
            "barra-secretos-progreso"
        );


    if (!texto || !barra) {

        return;
    }


    texto.textContent =
        secretosVistos.length;


    barra.style.width =
        `${Math.min(
            100,
            secretosVistos.length /
            cancionesSecretas.length *
            100
        )}%`;
}


if (
    secretoDesbloqueado ||
    secretosVistos.length
) {

    revelarSecreto(
        false
    );
}


/* =====================================================
   11:11
===================================================== */

const nota1111 =
    document.createElement(
        "aside"
    );


nota1111.className =
    "nota-1111";


document.body.appendChild(
    nota1111
);


let dias1111 =
    leerJSON(
        CLAVES.nota1111,
        []
    );


function revisar1111() {

    const ahora =
        new Date();


    if (
        ahora.getHours() !== 23 ||
        ahora.getMinutes() !== 11
    ) {

        return;
    }


    const hoy =
        claveDia(
            ahora
        );


    if (
        dias1111.includes(
            hoy
        )
    ) {

        return;
    }


    dias1111.push(
        hoy
    );


    guardarJSON(
        CLAVES.nota1111,
        dias1111
    );


    nota1111.innerHTML = `
        <button
            class="cerrar-nota-1111"
        >
            ×
        </button>

        <div class="hora-1111">
            11:11
        </div>

        <h3>
            Pide un deseo
        </h3>

        <p>
            Hay momentos que duran apenas un minuto,
            pero consiguen sentirse especiales.
        </p>

        <a
            class="boton-1111"
            href="${enlaceYouTube(
        "Catorce Sebastián Romero"
    )}"
            target="_blank"
        >
            Catorce — Sebastián Romero
        </a>
    `;


    nota1111.classList.add(
        "mostrar"
    );


    nota1111
        .querySelector(
            ".cerrar-nota-1111"
        )
        .addEventListener(
            "click",
            () => {

                nota1111.classList.remove(
                    "mostrar"
                );
            }
        );
}
