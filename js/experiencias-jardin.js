/* =====================================================
   EXPERIENCIAS NUEVAS DEL JARDÍN

   Añade secretos y pequeñas experiencias sin cambiar
   IDs, claves o funciones maduras del proyecto.
===================================================== */

(function () {

    const SORPRESAS = window.JARDIN_SORPRESAS || {};

    const CLAVES_NUEVAS = {
        petaloBeso: "jardin_petalo_beso_v1",
        crecimientoInicio: "jardin_crecimiento_inicio_v1",
        mariposaDoradaEncuentros: "jardin_mariposa_dorada_encuentros_v1",
        mariposaDoradaFlor: "jardin_mariposa_dorada_flor_v1",
        sobresFuturo: "jardin_sobres_futuro_v1",
        constelacion: "jardin_constelacion_v1",
        hitosMariposas: "jardin_hitos_mariposas_v1"
    };


    function abrirModalSorpresa(html) {
        contenidoModal.innerHTML = html;
        capaModal.classList.add("mostrar");
    }


    function quitarFavoritaDeTarjeta(tarjeta) {
        const boton = tarjeta?.querySelector(".boton-favorita");
        if (boton) boton.remove();
        return tarjeta;
    }


    function crearTarjetaSorpresa(config, secreta = true) {
        if (!config || !Flores[config.tipo]) return null;
        const tarjeta = crearTarjetaFlor(config, secreta);
        quitarFavoritaDeTarjeta(tarjeta);
        return tarjeta;
    }


    /* =================================================
       1. PÉTALO ESCONDIDO DESPUÉS DEL BESO
    ================================================= */

    function revelarFlorDelBeso(animar = true) {
        if (!SORPRESAS.petaloBeso) return;

        if (document.querySelector('[data-flor="florLunaBeso"]')) {
            return;
        }

        const tarjeta = crearTarjetaSorpresa(SORPRESAS.petaloBeso, true);
        if (!tarjeta) return;

        contenedorFlores.appendChild(tarjeta);

        if (animar) {
            requestAnimationFrame(() => tarjeta.classList.add("revelada"));
        }

        actualizarMemoriaDeTarjeta(tarjeta);
        activarMemoriaMusicalEnTarjeta(tarjeta);
    }


    function instalarPetaloDelBeso() {
        const desbloqueado =
            localStorage.getItem(CLAVES_NUEVAS.petaloBeso) === "si";

        if (desbloqueado) {
            revelarFlorDelBeso(false);
            return;
        }

        const tarjetaObjetivo =
            document.querySelector('[data-flor="rosaCereza"]') ||
            document.querySelector('.tarjeta-flor:not(.tarjeta-carta-hoy)');

        const envoltura = tarjetaObjetivo?.querySelector('.envoltura-flor');
        if (!envoltura || envoltura.querySelector('.petalo-beso-secreto')) return;

        const petalo = document.createElement("button");
        petalo.type = "button";
        petalo.className = "petalo-beso-secreto";
        petalo.setAttribute("aria-label", "Pétalo escondido");
        petalo.title = "Algo se ve distinto aquí";
        petalo.innerHTML = "♡";

        petalo.addEventListener("click", evento => {
            evento.preventDefault();
            evento.stopPropagation();

            localStorage.setItem(CLAVES_NUEVAS.petaloBeso, "si");
            petalo.classList.add("petalo-encontrado");

            mostrarToast(
                "Creo que desde aquel beso este jardín dejó de ser solo de indirectas."
            );

            setTimeout(() => {
                petalo.remove();
                revelarFlorDelBeso(true);
            }, 650);
        });

        envoltura.appendChild(petalo);
    }


    /* =================================================
       2. FLOR QUE CRECE CON LAS VISITAS
    ================================================= */

    function obtenerEtapaCrecimiento() {
        let inicio = Number(
            localStorage.getItem(CLAVES_NUEVAS.crecimientoInicio)
        );

        if (!inicio) {
            inicio = visitasJardin;
            localStorage.setItem(
                CLAVES_NUEVAS.crecimientoInicio,
                String(inicio)
            );
        }

        const regresos = Math.max(1, visitasJardin - inicio + 1);

        if (regresos >= 7) return { etapa: 4, regresos };
        if (regresos >= 4) return { etapa: 3, regresos };
        if (regresos >= 2) return { etapa: 2, regresos };
        return { etapa: 1, regresos };
    }


    function agregarFlorCreciente() {
        if (!SORPRESAS.florCreciente) return;
        if (document.querySelector('[data-flor="florCreciente"]')) return;

        const estado = obtenerEtapaCrecimiento();
        window.JARDIN_ETAPA_CRECIMIENTO = estado.etapa;

        const mensajes = {
            1: "Hoy apenas es un brote. Tendrás que volver otro día para ver qué pasa.",
            2: "Ya le salieron sus primeras hojas. Parece que sí recuerda que volviste.",
            3: "Ya tiene un botón. Está muy cerca, pero todavía no piensa apresurarse.",
            4: "Ya floreció. Supongo que algunas cosas bonitas también necesitan tiempo."
        };

        const config = {
            ...SORPRESAS.florCreciente,
            mensaje: mensajes[estado.etapa],
            carta:
                estado.etapa === 4
                    ? "Esta flor no apareció terminada. Fue creciendo cada vez que regresaste al jardín, hasta que finalmente estuvo lista para abrirse."
                    : `Esta flor está en la etapa ${estado.etapa} de 4. No hay atajo: necesita que vuelvas en días distintos.`,
            microMensaje:
                estado.etapa === 4
                    ? "Siete regresos después, por fin floreció."
                    : `Regresos desde que empezó a crecer: ${estado.regresos}.`
        };

        const tarjeta = crearTarjetaSorpresa(config, false);
        if (!tarjeta) return;

        tarjeta.classList.add("tarjeta-crecimiento-visitas");
        contenedorFlores.appendChild(tarjeta);
        actualizarMemoriaDeTarjeta(tarjeta);
    }


    /* =================================================
       3. MARIPOSA DORADA + FLOR SECRETA
    ================================================= */

    function obtenerEncuentrosDorados() {
        return Number(
            localStorage.getItem(CLAVES_NUEVAS.mariposaDoradaEncuentros) || 0
        );
    }


    function revelarFlorDorada(animar = true) {
        if (!SORPRESAS.florDorada) return;
        if (document.querySelector('[data-flor="craspediaDorada"]')) return;

        const tarjeta = crearTarjetaSorpresa(SORPRESAS.florDorada, true);
        if (!tarjeta) return;

        contenedorFlores.appendChild(tarjeta);
        if (animar) {
            requestAnimationFrame(() => tarjeta.classList.add("revelada"));
        }
        actualizarMemoriaDeTarjeta(tarjeta);
    }


    function crearMariposaDorada() {
        if (document.querySelectorAll('.mariposa-jardin').length >= 4) return;

        const mariposa = document.createElement("button");
        mariposa.type = "button";
        mariposa.className = "mariposa-jardin mariposa-dorada";

        if (Math.random() < .5) {
            mariposa.classList.add("mariposa-inversa");
        }

        mariposa.innerHTML = `
            <span class="ala ala-izquierda"></span>
            <span class="cuerpo-mariposa"></span>
            <span class="ala ala-derecha"></span>
            <span class="brillo-mariposa-dorada">✦</span>
        `;

        mariposa.style.top = `${12 + Math.random() * 68}%`;
        mariposa.style.animationDuration = `${10 + Math.random() * 5}s`;

        mariposa.addEventListener("click", evento => {
            evento.preventDefault();
            evento.stopPropagation();

            let encuentros = obtenerEncuentrosDorados() + 1;
            localStorage.setItem(
                CLAVES_NUEVAS.mariposaDoradaEncuentros,
                String(encuentros)
            );

            const mensajes = [
                "Esa no. Algunas cosas bonitas son para cuidarlas, no para atraparlas.",
                "Otra vez la dorada. Parece que quiere comprobar si aprendiste la primera vez.",
                "Tres encuentros. Creo que ya se ganó dejarte algo en el jardín."
            ];

            mostrarToast(
                mensajes[Math.min(encuentros, 3) - 1] ||
                "La mariposa dorada volvió a escapar."
            );

            mariposa.classList.add("mariposa-dorada-escapa");

            if (encuentros >= 3) {
                localStorage.setItem(CLAVES_NUEVAS.mariposaDoradaFlor, "si");
                revelarFlorDorada(true);
            }

            setTimeout(() => mariposa.remove(), 800);
        });

        document.body.appendChild(mariposa);
        setTimeout(() => mariposa.remove(), 18000);
    }


    function instalarMariposaDorada() {
        if (localStorage.getItem(CLAVES_NUEVAS.mariposaDoradaFlor) === "si") {
            revelarFlorDorada(false);
        }

        if (typeof crearMariposa !== "function") return;

        const crearMariposaBase = crearMariposa;

        crearMariposa = function () {
            const yaDesbloqueada =
                localStorage.getItem(CLAVES_NUEVAS.mariposaDoradaFlor) === "si";

            const probabilidad = yaDesbloqueada ? .025 : .05;

            if (Math.random() < probabilidad) {
                crearMariposaDorada();
                return;
            }

            crearMariposaBase();
        };
    }


    /* =================================================
       4. MAPA DEL JARDÍN
    ================================================= */

    function estadoSecreto(condicion) {
        return condicion ? "descubierto" : "oculto";
    }


    function abrirMapaJardin() {
        const publicas = floresDelJardin.filter(item => item.especial !== "carta");
        const secretos = [
            {
                titulo: "Dalia nocturna",
                visible: notasObtenidas.length >= 10
            },
            {
                titulo: "Corazón sangrante ❤️",
                visible: fraseAmor.length > 0 && notasAmorObtenidas.length >= fraseAmor.length
            },
            {
                titulo: "Flor de luna 🌙",
                visible: localStorage.getItem(CLAVES_NUEVAS.petaloBeso) === "si"
            },
            {
                titulo: "Craspedia dorada ✨",
                visible: localStorage.getItem(CLAVES_NUEVAS.mariposaDoradaFlor) === "si"
            }
        ];

        abrirModalSorpresa(`
            <div class="mapa-jardin-modal">
                <p class="modal-etiqueta">MAPA DEL JARDÍN</p>
                <h2>Todo lo que ha ido creciendo</h2>
                <p class="mapa-jardin-explicacion">
                    Las flores secretas siguen apareciendo como ??? hasta que encuentres su forma de entrar al jardín.
                </p>

                <div class="sendero-jardin">
                    ${publicas.map((flor, indice) => `
                        <div class="punto-mapa punto-publico">
                            <span>${indice + 1}</span>
                            <strong>${flor.titulo}</strong>
                        </div>
                    `).join("")}

                    <div class="punto-mapa punto-crecimiento">
                        <span>🌱</span>
                        <strong>Flor que crece contigo</strong>
                    </div>
                </div>

                <h3 class="titulo-rincones-secretos">Rincones secretos</h3>
                <div class="rincones-secretos-mapa">
                    ${secretos.map(secreto => `
                        <div class="secreto-mapa ${estadoSecreto(secreto.visible)}">
                            <span>${secreto.visible ? "✦" : "?"}</span>
                            <strong>${secreto.visible ? secreto.titulo : "???"}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        `);
    }


    /* =================================================
       5. MEMORIAS MUSICALES — MANTENER PRESIONADO
    ================================================= */

    function configDeTarjeta(tarjeta) {
        const tipo = tarjeta?.dataset?.flor;
        if (!tipo) return null;

        return (
            floresDelJardin.find(item => item.tipo === tipo) ||
            (SORPRESAS.petaloBeso?.tipo === tipo ? SORPRESAS.petaloBeso : null) ||
            (SORPRESAS.florDorada?.tipo === tipo ? SORPRESAS.florDorada : null)
        );
    }


    function abrirMemoriaMusical(tarjeta) {
        const config = configDeTarjeta(tarjeta);
        if (!config) return;

        const visitas = Number(visitasFlores[config.tipo] || 0);
        const tieneCancion = Boolean(config.linkCancion || config.busquedaCancion);

        let detalleFecha = "";

        if (config.fechaAgregada && tieneCancion) {
            detalleFecha = `
                <p class="dato-memoria-musical">
                    Esta canción llegó al jardín el <strong>${config.fechaAgregada}</strong>.
                </p>
            `;
        } else if (tieneCancion) {
            detalleFecha = `
                <p class="dato-memoria-musical">
                    Esta canción llegó antes de que el jardín empezara a guardar fechas.
                </p>
            `;
        } else {
            detalleFecha = `
                <p class="dato-memoria-musical">
                    Este rincón guarda una historia, aunque no tenga canción propia.
                </p>
            `;
        }

        abrirModalSorpresa(`
            <div class="memoria-musical-modal">
                <p class="modal-etiqueta">RECUERDO DEL JARDÍN</p>
                <h2>${config.titulo}</h2>
                <div class="papel-carta">
                    ${detalleFecha}
                    <p>
                        Has vuelto a esta flor <strong>${visitas}</strong>
                        ${visitas === 1 ? "vez" : "veces"}.
                    </p>
                    <p class="pista-memoria-musical">
                        Encontraste esto por mantener la flor presionada.
                    </p>
                </div>
            </div>
        `);
    }


    function activarMemoriaMusicalEnTarjeta(tarjeta) {
        if (!tarjeta || tarjeta.dataset.memoriaLarga === "si") return;

        const envoltura = tarjeta.querySelector('.envoltura-flor');
        if (!envoltura) return;

        tarjeta.dataset.memoriaLarga = "si";

        let timer = null;
        let inicioX = 0;
        let inicioY = 0;
        let suprimirClick = false;

        const cancelar = () => {
            clearTimeout(timer);
            timer = null;
        };

        envoltura.addEventListener("pointerdown", evento => {
            inicioX = evento.clientX;
            inicioY = evento.clientY;
            cancelar();

            timer = setTimeout(() => {
                suprimirClick = true;
                abrirMemoriaMusical(tarjeta);
            }, 780);
        });

        envoltura.addEventListener("pointermove", evento => {
            if (
                Math.abs(evento.clientX - inicioX) > 12 ||
                Math.abs(evento.clientY - inicioY) > 12
            ) {
                cancelar();
            }
        });

        envoltura.addEventListener("pointerup", cancelar);
        envoltura.addEventListener("pointercancel", cancelar);
        envoltura.addEventListener("pointerleave", cancelar);
        envoltura.addEventListener("contextmenu", evento => evento.preventDefault());

        envoltura.addEventListener("click", evento => {
            if (!suprimirClick) return;
            evento.preventDefault();
            evento.stopImmediatePropagation();
            suprimirClick = false;
        }, true);
    }


    function activarMemoriasMusicales() {
        document.querySelectorAll('.tarjeta-flor').forEach(activarMemoriaMusicalEnTarjeta);
    }


    /* =================================================
       6. SOBRES PARA EL FUTURO
    ================================================= */

    function leerSobresAbiertos() {
        return leerJSON(CLAVES_NUEVAS.sobresFuturo, []);
    }


    function abrirSobreFuturo(clave, boton) {
        const sobre = SORPRESAS.sobres?.[clave];
        if (!sobre) return;

        const abiertos = leerSobresAbiertos();
        if (!abiertos.includes(clave)) {
            abiertos.push(clave);
            guardarJSON(CLAVES_NUEVAS.sobresFuturo, abiertos);
        }

        boton?.classList.add("sobre-abierto");

        abrirModalSorpresa(`
            <div class="carta-flor carta-sobre-futuro">
                <p class="modal-etiqueta">UN SOBRE PARA OTRO MOMENTO</p>
                <h2>${sobre.titulo}</h2>
                <div class="papel-carta">
                    ${sobre.texto.map(parrafo => `<p>${parrafo}</p>`).join("")}
                </div>
            </div>
        `);
    }


    function crearSobresFuturo() {
        if (!SORPRESAS.sobres || document.querySelector('.sobres-futuro')) return;

        const abiertos = leerSobresAbiertos();
        const seccion = document.createElement("section");
        seccion.className = "sobres-futuro";
        seccion.innerHTML = `
            <p class="panel-etiqueta">CARTAS PARA OTRO MOMENTO</p>
            <h3>Tres sobres que no tienes que abrir hoy</h3>
            <p class="sobres-futuro-pista">Guárdalos para cuando el nombre del sobre tenga sentido.</p>
            <div class="rejilla-sobres-futuro">
                <button class="sobre-futuro ${abiertos.includes("triste") ? "sobre-abierto" : ""}" data-sobre="triste">
                    <span>💌</span>
                    <strong>Cuando estés triste</strong>
                </button>
                <button class="sobre-futuro ${abiertos.includes("dormir") ? "sobre-abierto" : ""}" data-sobre="dormir">
                    <span>🌙</span>
                    <strong>Cuando no puedas dormir</strong>
                </button>
                <button class="sobre-futuro ${abiertos.includes("extranar") ? "sobre-abierto" : ""}" data-sobre="extranar">
                    <span>❤️</span>
                    <strong>Cuando me extrañes</strong>
                </button>
            </div>
        `;

        seccion.querySelectorAll('[data-sobre]').forEach(boton => {
            boton.addEventListener("click", () => {
                abrirSobreFuturo(boton.dataset.sobre, boton);
            });
        });

        jardin.insertBefore(seccion, contenedorFlores);
    }


    /* =================================================
       7. CONSTELACIÓN SECRETA
    ================================================= */

    const ESTRELLAS_CORAZON = [
        [50, 82],
        [30, 62],
        [18, 42],
        [22, 24],
        [36, 16],
        [50, 31],
        [64, 16],
        [78, 24],
        [82, 42],
        [70, 62]
    ];


    function dibujarLineaConstelacion(svg, a, b) {
        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", String(a[0]));
        linea.setAttribute("y1", String(a[1]));
        linea.setAttribute("x2", String(b[0]));
        linea.setAttribute("y2", String(b[1]));
        linea.setAttribute("class", "linea-constelacion");
        svg.appendChild(linea);
    }


    function prepararConstelacion(completadaAlEntrar = false) {
        const cielo = document.getElementById("constelacion-cielo");
        const svg = document.getElementById("lineas-constelacion");
        if (!cielo || !svg) return;

        let paso = 0;

        ESTRELLAS_CORAZON.forEach((posicion, indice) => {
            const estrella = document.createElement("button");
            estrella.type = "button";
            estrella.className = "estrella-tocable";
            estrella.style.left = `${posicion[0]}%`;
            estrella.style.top = `${posicion[1]}%`;
            estrella.dataset.indice = String(indice);
            estrella.setAttribute("aria-label", `Estrella ${indice + 1}`);
            estrella.innerHTML = "✦";
            cielo.appendChild(estrella);
        });

        const estrellas = [...cielo.querySelectorAll('.estrella-tocable')];

        const marcarSiguiente = () => {
            estrellas.forEach((estrella, indice) => {
                estrella.classList.toggle("estrella-siguiente", indice === paso);
            });
        };

        const completarVisual = () => {
            svg.innerHTML = "";
            for (let i = 1; i < ESTRELLAS_CORAZON.length; i++) {
                dibujarLineaConstelacion(svg, ESTRELLAS_CORAZON[i - 1], ESTRELLAS_CORAZON[i]);
            }
            dibujarLineaConstelacion(
                svg,
                ESTRELLAS_CORAZON[ESTRELLAS_CORAZON.length - 1],
                ESTRELLAS_CORAZON[0]
            );
            estrellas.forEach(estrella => estrella.classList.add("estrella-descubierta"));
            const mensaje = document.getElementById("mensaje-constelacion");
            if (mensaje) {
                mensaje.textContent = SORPRESAS.constelacionMensaje ||
                    "Entre tantas estrellas, qué suerte haber coincidido contigo.";
                mensaje.classList.add("visible");
            }
        };

        if (completadaAlEntrar) {
            completarVisual();
            return;
        }

        marcarSiguiente();

        estrellas.forEach((estrella, indice) => {
            estrella.addEventListener("click", () => {
                if (indice !== paso) {
                    paso = 0;
                    svg.innerHTML = "";
                    estrellas.forEach(item => item.classList.remove("estrella-descubierta"));
                    marcarSiguiente();
                    mostrarToast("Esa estrella todavía no. Sigue el pequeño brillo.");
                    return;
                }

                estrella.classList.add("estrella-descubierta");

                if (paso > 0) {
                    dibujarLineaConstelacion(
                        svg,
                        ESTRELLAS_CORAZON[paso - 1],
                        ESTRELLAS_CORAZON[paso]
                    );
                }

                paso++;

                if (paso >= ESTRELLAS_CORAZON.length) {
                    dibujarLineaConstelacion(
                        svg,
                        ESTRELLAS_CORAZON[ESTRELLAS_CORAZON.length - 1],
                        ESTRELLAS_CORAZON[0]
                    );
                    localStorage.setItem(CLAVES_NUEVAS.constelacion, "si");
                    estrellas.forEach(item => item.classList.remove("estrella-siguiente"));
                    const mensaje = document.getElementById("mensaje-constelacion");
                    if (mensaje) {
                        mensaje.textContent = SORPRESAS.constelacionMensaje ||
                            "Entre tantas estrellas, qué suerte haber coincidido contigo.";
                        mensaje.classList.add("visible");
                    }
                    return;
                }

                marcarSiguiente();
            });
        });
    }


    function abrirConstelacion() {
        const hora = new Date().getHours();
        const esNoche = hora >= 19 || hora <= 5;

        if (!esNoche) {
            abrirModalSorpresa(`
                <div class="carta-flor">
                    <p class="modal-etiqueta">UN SECRETO NOCTURNO</p>
                    <h2>Todavía hay demasiada luz ✨</h2>
                    <div class="papel-carta">
                        <p>Esta parte del jardín solo funciona entre las 7 de la noche y las 6 de la mañana.</p>
                        <p>Vuelve de noche. Las estrellas van a estar esperando.</p>
                    </div>
                </div>
            `);
            return;
        }

        const completada = localStorage.getItem(CLAVES_NUEVAS.constelacion) === "si";

        abrirModalSorpresa(`
            <div class="constelacion-modal">
                <p class="modal-etiqueta">CONSTELACIÓN SECRETA</p>
                <h2>Une las estrellas</h2>
                <p class="constelacion-pista">Toca la estrella que brilla un poquito más y sigue el camino.</p>
                <div id="constelacion-cielo" class="constelacion-cielo">
                    <svg id="lineas-constelacion" viewBox="0 0 100 100" preserveAspectRatio="none"></svg>
                </div>
                <p id="mensaje-constelacion" class="mensaje-constelacion"></p>
            </div>
        `);

        prepararConstelacion(completada);
    }


    /* =================================================
       8. CLIMA EMOCIONAL DEL MOMENTO
       No se guarda nada en localStorage.
    ================================================= */

    let timeoutClima = null;


    function limpiarClimaEmocional() {
        clearTimeout(timeoutClima);
        document.querySelectorAll('.clima-jardin-overlay').forEach(item => item.remove());
        document.body.classList.remove(
            "clima-jardin-feliz",
            "clima-jardin-cansada",
            "clima-jardin-dificil"
        );
    }


    function aplicarClimaEmocional(tipo) {
        limpiarClimaEmocional();

        const overlay = document.createElement("div");
        overlay.className = `clima-jardin-overlay clima-${tipo}`;

        if (tipo === "feliz") {
            for (let i = 0; i < 18; i++) {
                const brillo = document.createElement("span");
                brillo.className = "brillo-clima";
                brillo.style.left = `${Math.random() * 100}%`;
                brillo.style.top = `${Math.random() * 100}%`;
                brillo.style.animationDelay = `${Math.random() * 2.5}s`;
                overlay.appendChild(brillo);
            }
            document.body.classList.add("clima-jardin-feliz");
            mostrarToast("Entonces hoy el jardín celebra contigo ✨");
            setTimeout(() => crearMariposa(), 450);
            setTimeout(() => crearMariposa(), 1350);
        }

        if (tipo === "cansada") {
            for (let i = 0; i < 16; i++) {
                const luz = document.createElement("span");
                luz.className = "luz-clima-cansado";
                luz.style.left = `${Math.random() * 100}%`;
                luz.style.top = `${20 + Math.random() * 75}%`;
                luz.style.animationDelay = `${Math.random() * 4}s`;
                overlay.appendChild(luz);
            }
            document.body.classList.add("clima-jardin-cansada");
            mostrarToast("Entonces quédate un ratito. Hoy el jardín va despacio.");
        }

        if (tipo === "dificil") {
            for (let i = 0; i < 34; i++) {
                const gota = document.createElement("span");
                gota.className = "gota-clima";
                gota.style.left = `${Math.random() * 100}%`;
                gota.style.animationDelay = `${Math.random() * 1.7}s`;
                gota.style.animationDuration = `${1.2 + Math.random() * .8}s`;
                overlay.appendChild(gota);
            }
            document.body.classList.add("clima-jardin-dificil");
            mostrarToast("No tienes que arreglar el día aquí. Solo quédate un momento.");
        }

        document.body.appendChild(overlay);

        timeoutClima = setTimeout(limpiarClimaEmocional, 20000);
        cerrarModal();
    }


    function abrirClimaEmocional() {
        abrirModalSorpresa(`
            <div class="clima-emocional-modal">
                <p class="modal-etiqueta">SOLO POR ESTE MOMENTO</p>
                <h2>¿Cómo estuvo tu día?</h2>
                <p>Esto no se guarda. Solo cambia el jardín durante unos segundos.</p>
                <div class="opciones-clima-emocional">
                    <button data-clima="feliz">✨ Bonito</button>
                    <button data-clima="cansada">🌙 Cansado</button>
                    <button data-clima="dificil">🌧️ Difícil</button>
                </div>
            </div>
        `);

        document.querySelectorAll('[data-clima]').forEach(boton => {
            boton.addEventListener("click", () => aplicarClimaEmocional(boton.dataset.clima));
        });
    }


    /* =================================================
       9. FLORES QUE RECUERDAN LAS VISITAS
    ================================================= */

    function textoMemoriaFlor(visitas) {
        if (visitas >= 20) return "Esta flor ya perdió la cuenta de cuántas veces volviste.";
        if (visitas >= 10) return "Definitivamente esta flor ya te reconoce.";
        if (visitas >= 5) return "¿Otra vez aquí? Creo que esta flor ya te reconoce.";
        if (visitas >= 2) return "Parece que no fue la primera vez que volviste.";
        return "";
    }


    function actualizarMemoriaDeTarjeta(tarjeta) {
        if (!tarjeta) return;
        const tipo = tarjeta.dataset.flor;
        const memoria = tarjeta.querySelector('.memoria-flor');
        if (!tipo || !memoria) return;

        const visitas = Number(visitasFlores[tipo] || 0);
        const texto = textoMemoriaFlor(visitas);
        memoria.textContent = texto;
        memoria.classList.toggle("visible", Boolean(texto));
    }


    function activarMemoriaVisitas() {
        document.querySelectorAll('.tarjeta-flor').forEach(tarjeta => {
            actualizarMemoriaDeTarjeta(tarjeta);

            if (tarjeta.dataset.memoriaVisitas === "si") return;
            tarjeta.dataset.memoriaVisitas = "si";

            const envoltura = tarjeta.querySelector('.envoltura-flor');
            if (!envoltura) return;

            envoltura.addEventListener("click", () => {
                setTimeout(() => actualizarMemoriaDeTarjeta(tarjeta), 0);
            });
        });
    }


    /* =================================================
       10. HITOS DE MARIPOSAS + CEMENTERIO
    ================================================= */

    const HITOS_MARIPOSAS = [
        [10, "Diez mariposas. Creo que ya empezaron a hablar de ti."],
        [25, "Veinticinco. Las mariposas están considerando cambiar de jardín."],
        [50, "Esme... ya son cincuenta. Esto ya parece personal."],
        [100, "Cien mariposas. El jardín tuvo que abrir un pequeño memorial."]
    ];


    function crearCementerioMariposas() {
        if (document.querySelector('.cementerio-mariposas')) return;

        const seccion = document.createElement("section");
        seccion.className = "cementerio-mariposas";
        seccion.innerHTML = `
            <button type="button" class="cementerio-mariposas-boton">
                <span class="cementerio-iconos">† 𓆩🦋𓆪 †</span>
                <strong>Pequeño memorial de mariposas</strong>
                <small>Desbloqueado a las 100 atrapadas</small>
            </button>
        `;

        seccion.querySelector('button').addEventListener("click", () => {
            abrirModalSorpresa(`
                <div class="carta-flor memorial-mariposas-modal">
                    <p class="modal-etiqueta">EN MEMORIA DE MUCHÍSIMAS MARIPOSAS</p>
                    <h2>El jardín no olvida 🦋</h2>
                    <div class="papel-carta">
                        <p>Después de 100 mariposas, el jardín decidió que un simple contador ya no era suficiente.</p>
                        <p>Causa oficial: curiosidad excesiva de Esme.</p>
                        <p>Las que siguen volando han sido advertidas.</p>
                    </div>
                </div>
            `);
        });

        finalJardin.parentNode.insertBefore(seccion, finalJardin);
    }


    function revisarHitosMariposas() {
        const cantidad = Number(mariposasAplastadas || 0);
        const alcanzados = leerJSON(CLAVES_NUEVAS.hitosMariposas, []);

        let ultimoNuevo = null;

        HITOS_MARIPOSAS.forEach(([numero, mensaje]) => {
            if (cantidad >= numero && !alcanzados.includes(numero)) {
                alcanzados.push(numero);
                ultimoNuevo = [numero, mensaje];
            }
        });

        if (ultimoNuevo) {
            guardarJSON(CLAVES_NUEVAS.hitosMariposas, alcanzados);
            mostrarToast(ultimoNuevo[1]);
        }

        if (cantidad >= 100) {
            crearCementerioMariposas();
        }
    }


    function observarContadorMariposas() {
        revisarHitosMariposas();

        if (!contadorMariposas) return;

        const observer = new MutationObserver(() => {
            revisarHitosMariposas();
        });

        observer.observe(contadorMariposas, {
            childList: true,
            characterData: true,
            subtree: true
        });
    }


    /* =================================================
       11. NUESTRO JARDÍN + ESPACIO FUTURO
    ================================================= */

    function puedeVerNuestroJardin() {
        return (
            notasObtenidas.length >= 20 &&
            (
                notasAmorObtenidas.length >= 5 ||
                visitasJardin >= 12
            )
        );
    }


    function crearNuestroJardin() {
        if (!puedeVerNuestroJardin()) return;
        if (document.querySelector('.nuestro-jardin-placa')) return;

        const seccion = document.createElement("section");
        seccion.className = "nuestro-jardin-placa";
        seccion.innerHTML = `
            <p class="panel-etiqueta">UN RINCÓN QUE CAMBIÓ DE NOMBRE</p>
            <h2>${SORPRESAS.nuestroJardin?.titulo || "Nuestro jardín"}</h2>
            <p>${SORPRESAS.nuestroJardin?.texto || "Supongo que ya no es solamente mi jardín."}</p>
            <button type="button" class="espacio-futuro-jardin">
                <span>＋</span>
                <strong>Aquí todavía falta algo…</strong>
                <small>Este espacio está reservado para una flor futura.</small>
            </button>
        `;

        seccion.querySelector('.espacio-futuro-jardin').addEventListener("click", () => {
            mostrarToast("Todavía no. Esa flor necesita su propio momento.");
        });

        finalJardin.parentNode.insertBefore(seccion, finalJardin);
    }


    /* =================================================
       12. MENÚ COMPACTO DE EXPERIENCIAS
    ================================================= */

    function abrirExploradorJardin() {
        abrirModalSorpresa(`
            <div class="explorador-jardin-modal">
                <p class="modal-etiqueta">MÁS DEL JARDÍN</p>
                <h2>Hay otras formas de recorrerlo</h2>
                <div class="opciones-explorador-jardin">
                    <button id="abrir-mapa-sorpresa">🗺️ <span>Mapa del jardín</span></button>
                    <button id="abrir-constelacion-sorpresa">✨ <span>Constelación</span></button>
                    <button id="abrir-clima-sorpresa">🌦️ <span>¿Cómo estuvo tu día?</span></button>
                </div>
                <p class="pista-explorador">Pista: algunas flores también reaccionan si las mantienes presionadas.</p>
            </div>
        `);

        document.getElementById("abrir-mapa-sorpresa")?.addEventListener("click", abrirMapaJardin);
        document.getElementById("abrir-constelacion-sorpresa")?.addEventListener("click", abrirConstelacion);
        document.getElementById("abrir-clima-sorpresa")?.addEventListener("click", abrirClimaEmocional);
    }


    function agregarBotonExplorador() {
        const acciones = document.querySelector('.acciones-superiores');
        if (!acciones || document.getElementById('boton-explorar-jardin')) return;

        const boton = document.createElement("button");
        boton.type = "button";
        boton.id = "boton-explorar-jardin";
        boton.className = "boton-explorar-jardin";
        boton.textContent = "Más del jardín ✦";
        boton.addEventListener("click", abrirExploradorJardin);
        acciones.appendChild(boton);
    }


    /* =================================================
       INICIALIZACIÓN
    ================================================= */

    agregarFlorCreciente();
    instalarPetaloDelBeso();
    instalarMariposaDorada();
    crearSobresFuturo();
    agregarBotonExplorador();
    activarMemoriaVisitas();
    activarMemoriasMusicales();
    observarContadorMariposas();
    crearNuestroJardin();

    setInterval(() => {
        crearNuestroJardin();
        activarMemoriaVisitas();
        activarMemoriasMusicales();
    }, 15000);

})();
