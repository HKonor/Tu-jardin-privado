/* =====================================================
   FLORES DE SORPRESAS

   Extiende la biblioteca Flores sin modificar las
   funciones anteriores.
===================================================== */

function crearParteSorpresa(clases) {
    const elemento = document.createElement("div");
    elemento.className = clases;
    return elemento;
}

/* =====================================================
   RANÚNCULO ROJO
===================================================== */

Flores.ranunculoRojo = function () {
    const flor = crearParteSorpresa("ranunculo-rojo");
    flor.appendChild(crearParteSorpresa("ranunculo-tallo"));
    flor.appendChild(crearParteSorpresa("ranunculo-hoja ranunculo-hoja-1"));
    flor.appendChild(crearParteSorpresa("ranunculo-hoja ranunculo-hoja-2"));

    const cabeza = crearParteSorpresa("ranunculo-cabeza");
    const capas = [
        [18, 92, 1],
        [15, 66, .82],
        [12, 43, .64],
        [9, 24, .46]
    ];

    capas.forEach(([cantidad, radio, escala], capa) => {
        for (let i = 0; i < cantidad; i++) {
            const wrap = crearParteSorpresa("ranunculo-petalo-wrap");
            wrap.style.setProperty("--angulo", `${(360 / cantidad) * i + capa * 7}deg`);
            wrap.style.setProperty("--radio", `${radio}px`);
            wrap.style.setProperty("--escala-petalo", escala);
            wrap.appendChild(crearParteSorpresa("ranunculo-petalo"));
            cabeza.appendChild(wrap);
        }
    });

    cabeza.appendChild(crearParteSorpresa("ranunculo-centro"));
    flor.appendChild(cabeza);
    return flor;
};

/* =====================================================
   ALSTROEMERIA
===================================================== */

Flores.alstroemeria = function () {
    const flor = crearParteSorpresa("alstroemeria");
    flor.appendChild(crearParteSorpresa("alstroemeria-tallo"));
    flor.appendChild(crearParteSorpresa("alstroemeria-rama alstroemeria-rama-1"));
    flor.appendChild(crearParteSorpresa("alstroemeria-rama alstroemeria-rama-2"));

    const posiciones = [
        [150, 70, 0, 1],
        [98, 106, -18, .86],
        [205, 108, 18, .88],
        [126, 150, -8, .74],
        [180, 155, 10, .76]
    ];

    posiciones.forEach(([x, y, rotacion, escala], indice) => {
        const cabeza = crearParteSorpresa("alstroemeria-flor");
        cabeza.style.left = `${x}px`;
        cabeza.style.top = `${y}px`;
        cabeza.style.transform = `translate(-50%,-50%) rotate(${rotacion}deg) scale(${escala})`;
        cabeza.style.setProperty("--alstro-delay", `${indice * -.32}s`);

        for (let i = 1; i <= 6; i++) {
            const petalo = crearParteSorpresa(`alstroemeria-petalo alstroemeria-petalo-${i}`);
            if (i <= 3) {
                for (let m = 0; m < 3; m++) {
                    petalo.appendChild(crearParteSorpresa("alstroemeria-marca"));
                }
            }
            cabeza.appendChild(petalo);
        }

        cabeza.appendChild(crearParteSorpresa("alstroemeria-centro"));
        flor.appendChild(cabeza);
    });

    for (let i = 1; i <= 5; i++) {
        flor.appendChild(crearParteSorpresa(`alstroemeria-hoja alstroemeria-hoja-${i}`));
    }

    return flor;
};

/* =====================================================
   CAMPANILLA VIOLETA
===================================================== */

Flores.campanillaVioleta = function () {
    const flor = crearParteSorpresa("campanilla-violeta");
    flor.appendChild(crearParteSorpresa("campanilla-tallo"));
    flor.appendChild(crearParteSorpresa("campanilla-rama campanilla-rama-1"));
    flor.appendChild(crearParteSorpresa("campanilla-rama campanilla-rama-2"));

    const flores = [
        [93, 96, -20, 1],
        [151, 67, 1, .96],
        [207, 104, 20, .9],
        [117, 155, -12, .77],
        [184, 164, 14, .78]
    ];

    flores.forEach(([x, y, rotacion, escala], indice) => {
        const campana = crearParteSorpresa("campanilla-flor");
        campana.style.left = `${x}px`;
        campana.style.top = `${y}px`;
        campana.style.transform = `rotate(${rotacion}deg) scale(${escala})`;
        campana.style.setProperty("--camp-delay", `${indice * -.41}s`);
        campana.appendChild(crearParteSorpresa("campanilla-corola"));
        campana.appendChild(crearParteSorpresa("campanilla-centro"));
        flor.appendChild(campana);
    });

    for (let i = 1; i <= 5; i++) {
        flor.appendChild(crearParteSorpresa(`campanilla-hoja campanilla-hoja-${i}`));
    }

    return flor;
};

/* =====================================================
   AZALEA ROSA
===================================================== */

Flores.azaleaRosa = function () {
    const flor = crearParteSorpresa("azalea-rosa");
    flor.appendChild(crearParteSorpresa("azalea-rama-principal"));
    flor.appendChild(crearParteSorpresa("azalea-rama azalea-rama-1"));
    flor.appendChild(crearParteSorpresa("azalea-rama azalea-rama-2"));

    const posiciones = [
        [104, 89, .92],
        [157, 64, 1],
        [208, 97, .9],
        [128, 138, .78],
        [181, 144, .8],
        [151, 190, .68]
    ];

    posiciones.forEach(([x, y, escala], indice) => {
        const cabeza = crearParteSorpresa("azalea-flor");
        cabeza.style.left = `${x}px`;
        cabeza.style.top = `${y}px`;
        cabeza.style.transform = `translate(-50%,-50%) scale(${escala})`;
        cabeza.style.setProperty("--azalea-delay", `${indice * -.28}s`);

        for (let i = 1; i <= 5; i++) {
            cabeza.appendChild(crearParteSorpresa(`azalea-petalo azalea-petalo-${i}`));
        }
        cabeza.appendChild(crearParteSorpresa("azalea-centro"));
        flor.appendChild(cabeza);
    });

    for (let i = 1; i <= 6; i++) {
        flor.appendChild(crearParteSorpresa(`azalea-hoja azalea-hoja-${i}`));
    }

    return flor;
};

/* =====================================================
   FLOR DE LUNA — SECRETO DEL BESO
===================================================== */

Flores.florLunaBeso = function () {
    const flor = crearParteSorpresa("flor-luna-beso");
    flor.appendChild(crearParteSorpresa("flor-luna-tallo"));
    flor.appendChild(crearParteSorpresa("flor-luna-hoja flor-luna-hoja-1"));
    flor.appendChild(crearParteSorpresa("flor-luna-hoja flor-luna-hoja-2"));

    const cabeza = crearParteSorpresa("flor-luna-cabeza");
    for (let i = 1; i <= 8; i++) {
        cabeza.appendChild(crearParteSorpresa(`flor-luna-petalo flor-luna-petalo-${i}`));
    }
    cabeza.appendChild(crearParteSorpresa("flor-luna-centro"));
    flor.appendChild(cabeza);
    return flor;
};

/* =====================================================
   CRASPEDIA DORADA — SECRETO DE MARIPOSA
===================================================== */

Flores.craspediaDorada = function () {
    const flor = crearParteSorpresa("craspedia-dorada");

    const tallos = [
        [91, 104, -12, .82],
        [139, 65, -2, 1],
        [190, 98, 10, .88],
        [223, 139, 18, .7]
    ];

    tallos.forEach(([x, y, rot, escala], indice) => {
        const grupo = crearParteSorpresa("craspedia-grupo");
        grupo.style.left = `${x}px`;
        grupo.style.top = `${y}px`;
        grupo.style.transform = `rotate(${rot}deg) scale(${escala})`;
        grupo.style.setProperty("--craspedia-delay", `${indice * -.35}s`);
        grupo.appendChild(crearParteSorpresa("craspedia-tallo"));
        const esfera = crearParteSorpresa("craspedia-esfera");
        for (let p = 0; p < 20; p++) {
            const punto = crearParteSorpresa("craspedia-punto");
            punto.style.left = `${8 + Math.random() * 34}px`;
            punto.style.top = `${8 + Math.random() * 34}px`;
            esfera.appendChild(punto);
        }
        grupo.appendChild(esfera);
        flor.appendChild(grupo);
    });

    flor.appendChild(crearParteSorpresa("craspedia-hoja craspedia-hoja-1"));
    flor.appendChild(crearParteSorpresa("craspedia-hoja craspedia-hoja-2"));
    return flor;
};

/* =====================================================
   FLOR QUE CRECE CON LAS VISITAS
===================================================== */

Flores.florCreciente = function () {
    const etapa = Math.max(1, Math.min(4, Number(window.JARDIN_ETAPA_CRECIMIENTO || 1)));
    const flor = crearParteSorpresa(`flor-creciente flor-creciente-etapa-${etapa}`);
    flor.dataset.etapa = String(etapa);

    flor.appendChild(crearParteSorpresa("creciente-tierra"));
    flor.appendChild(crearParteSorpresa("creciente-tallo"));
    flor.appendChild(crearParteSorpresa("creciente-hoja creciente-hoja-1"));
    flor.appendChild(crearParteSorpresa("creciente-hoja creciente-hoja-2"));
    flor.appendChild(crearParteSorpresa("creciente-boton"));

    const cabeza = crearParteSorpresa("creciente-cabeza");
    for (let i = 1; i <= 7; i++) {
        cabeza.appendChild(crearParteSorpresa(`creciente-petalo creciente-petalo-${i}`));
    }
    cabeza.appendChild(crearParteSorpresa("creciente-centro"));
    flor.appendChild(cabeza);

    return flor;
};
