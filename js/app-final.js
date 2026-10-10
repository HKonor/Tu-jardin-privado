/* =====================================================
   FINAL
===================================================== */

const finalJardin =
    document.createElement(
        "section"
    );


finalJardin.className =
    "final-jardin";


const ultimaDespedida =
    despedidasObtenidas.length
        ?
        despedidas[
        despedidasObtenidas[
        despedidasObtenidas.length - 1
        ] - 1
        ]
        :
        "Vuelve de vez en cuando.";


finalJardin.innerHTML = `
    <p class="final-pequeno">
        LLEGASTE AL FINAL DEL JARDÍN
    </p>

    <h2>
        Por ahora.
    </h2>

    <p class="despedida-dia">
        ${ultimaDespedida}
    </p>

    <div class="final-linea"></div>

    <p class="final-pista">
        Algunas cosas necesitan su momento.
        Otras necesitan que vuelvas.
    </p>

    <button
        id="boton-no-tocar"
        class="boton-no-tocar"
    >
        No tocar
    </button>
`;


jardin.appendChild(
    finalJardin
);


/* =====================================================
   BOTÓN NO TOCAR
===================================================== */

let nivel =
    0;


document
    .getElementById(
        "boton-no-tocar"
    )
    .addEventListener(
        "click",
        evento => {

            nivel++;


            if (
                nivel === 1
            ) {

                evento.target.textContent =
                    "¿Segura?";

                return;
            }


            if (
                nivel === 2
            ) {

                evento.target.textContent =
                    "¿Segura, segura?";

                return;
            }


            if (
                nivel === 3
            ) {

                evento.target.textContent =
                    "La curiosidad ganó";


                contenidoModal.innerHTML = `
                    <div class="carta-flor">

                        <p class="modal-etiqueta">
                            ENCONTRASTE ALGO
                        </p>

                        <h2>
                            La curiosidad ganó
                        </h2>

                        <div class="papel-carta">

                            <p>
                                Si llegaste hasta aquí y además presionaste algo que decía claramente que no tocaras, supongo que la curiosidad ganó otra vez.
                            </p>

                            <p style="margin-top:14px;">
                                Aunque parece que el botón todavía guarda una cosa más.
                            </p>

                        </div>

                    </div>
                `;


                capaModal.classList.add(
                    "mostrar"
                );

                return;
            }


            contenidoModal.innerHTML =
                window.JARDIN_EXT?.cartaCuriosidad ||
                `
                    <div class="carta-flor">
                        <p class="modal-etiqueta">OTRA VEZ</p>
                        <h2>La curiosidad volvió a ganar</h2>
                        <div class="papel-carta">
                            <p>Parece que aquí había otra carta.</p>
                        </div>
                    </div>
                `;


            capaModal.classList.add(
                "mostrar"
            );
        }
    );


/* =====================================================
   AVISO INICIAL
===================================================== */

function avisoInicial() {

    if (
        localStorage.getItem(
            CLAVES.aviso
        ) === "si"
    ) {

        return;
    }


    contenidoModal.innerHTML = `
        <div class="aviso-coleccionables">

            <p class="modal-etiqueta">
                ANTES DE ENTRAR
            </p>

            <h2>
                Este jardín guarda más de lo que parece
            </h2>

            <div class="icono-aviso">
                20
            </div>

            <p>
                Existen 20 notas ocultas
                que aparecen durante horas pares.
            </p>

            <p>
                También existen 20 despedidas.
                Solo se consigue una nueva por día.
            </p>

            <p class="aviso-pista">
                No todo está señalado.
            </p>

            <div class="acciones-aviso">

                <button
                    id="aceptar-aviso"
                    class="boton-modal-principal"
                >
                    Entrar al jardín
                </button>

                <button
                    id="ocultar-aviso"
                    class="boton-modal-secundario"
                >
                    No volver a mostrar
                </button>

            </div>

        </div>
    `;


    capaModal.classList.add(
        "mostrar"
    );


    document
        .getElementById(
            "aceptar-aviso"
        )
        .addEventListener(
            "click",
            async () => {

                cerrarModal();


                await iniciarMusicaFondo();
            }
        );


    document
        .getElementById(
            "ocultar-aviso"
        )
        .addEventListener(
            "click",
            async () => {

                localStorage.setItem(
                    CLAVES.aviso,
                    "si"
                );


                cerrarModal();


                await iniciarMusicaFondo();
            }
        );
}


/* =====================================================
   INICIALIZACIÓN
===================================================== */

actualizarProgreso();


comprobarDalia();


comprobarFlorSecretaAmor();


actualizarFavoritas();


actualizarSecreto();


activarMusicaEnPrimeraInteraccion();


avisoInicial();


revisarHoraColeccionable();


revisar1111();


setInterval(
    revisarHoraColeccionable,
    30000
);


setInterval(
    revisar1111,
    15000
);