/* =====================================================
   FLORES NUEVAS

   Se mantienen separadas de flores.js para no modificar
   la biblioteca madura del jardín.
===================================================== */

function crearParteNueva(clase) {
    const elemento = document.createElement("div");
    elemento.className = clase;
    return elemento;
}


/* =====================================================
   ESTRELLA DE BELÉN
===================================================== */

Flores.estrellaBelen = function () {
    const flor = crearParteNueva("estrella-belen");

    flor.appendChild(crearParteNueva("estrella-belen-tallo"));
    flor.appendChild(crearParteNueva("estrella-belen-hoja estrella-belen-hoja-1"));
    flor.appendChild(crearParteNueva("estrella-belen-hoja estrella-belen-hoja-2"));

    const posiciones = [
        [150,72,1], [100,112,.82], [201,118,.86],
        [128,156,.72], [178,164,.70], [151,204,.62]
    ];

    posiciones.forEach(([x,y,escala], indice) => {
        const cabeza = crearParteNueva("estrella-belen-flor");
        cabeza.style.left = `${x}px`;
        cabeza.style.top = `${y}px`;
        cabeza.style.setProperty("--estrella-escala", escala);
        cabeza.style.setProperty("--estrella-delay", `${indice * -.35}s`);

        for (let i=1; i<=6; i++) {
            cabeza.appendChild(crearParteNueva(`estrella-belen-petalo estrella-belen-petalo-${i}`));
        }
        cabeza.appendChild(crearParteNueva("estrella-belen-centro"));
        flor.appendChild(cabeza);
    });

    return flor;
};


/* =====================================================
   BUGAMBILIA
===================================================== */

Flores.bugambilia = function () {
    const flor = crearParteNueva("bugambilia");
    flor.appendChild(crearParteNueva("bugambilia-rama-principal"));
    flor.appendChild(crearParteNueva("bugambilia-rama bugambilia-rama-1"));
    flor.appendChild(crearParteNueva("bugambilia-rama bugambilia-rama-2"));
    flor.appendChild(crearParteNueva("bugambilia-rama bugambilia-rama-3"));

    const posiciones = [
        [82,74,-12],[132,48,5],[184,66,17],[220,105,25],
        [103,126,-9],[157,112,8],[196,154,15],[126,184,-6],
        [174,202,10]
    ];

    posiciones.forEach(([x,y,r], idx) => {
        const grupo = crearParteNueva("bugambilia-grupo");
        grupo.style.left = `${x}px`;
        grupo.style.top = `${y}px`;
        grupo.style.transform = `rotate(${r}deg)`;
        grupo.style.setProperty("--bugambilia-delay", `${(idx%5)*-.28}s`);

        for (let i=1;i<=3;i++) {
            grupo.appendChild(crearParteNueva(`bugambilia-bractea bugambilia-bractea-${i}`));
        }
        grupo.appendChild(crearParteNueva("bugambilia-centro"));
        flor.appendChild(grupo);
    });

    for (let i=1;i<=5;i++) flor.appendChild(crearParteNueva(`bugambilia-hoja bugambilia-hoja-${i}`));
    return flor;
};


/* =====================================================
   CALÉNDULA MIEL
===================================================== */

Flores.calendulaMiel = function () {
    const flor = crearParteNueva("calendula-miel");
    const cabeza = crearParteNueva("calendula-cabeza");

    for (let i=0;i<24;i++) {
        const wrap = crearParteNueva("calendula-petalo-wrap");
        wrap.style.setProperty("--calendula-angulo", `${i*15}deg`);
        wrap.appendChild(crearParteNueva("calendula-petalo"));
        cabeza.appendChild(wrap);
    }

    for (let i=0;i<14;i++) {
        const wrap = crearParteNueva("calendula-petalo-wrap calendula-petalo-interior-wrap");
        wrap.style.setProperty("--calendula-angulo", `${i*(360/14)}deg`);
        wrap.appendChild(crearParteNueva("calendula-petalo calendula-petalo-interior"));
        cabeza.appendChild(wrap);
    }

    cabeza.appendChild(crearParteNueva("calendula-centro"));
    flor.appendChild(cabeza);
    flor.appendChild(crearParteNueva("calendula-tallo"));
    flor.appendChild(crearParteNueva("calendula-hoja calendula-hoja-1"));
    flor.appendChild(crearParteNueva("calendula-hoja calendula-hoja-2"));
    return flor;
};


/* =====================================================
   ROSA CEREZA
===================================================== */

Flores.rosaCereza = function () {
    const flor = crearParteNueva("rosa-cereza");
    const cabeza = crearParteNueva("rosa-cereza-cabeza");

    const capas = [
        {cantidad:12, radio:48, escala:1},
        {cantidad:9, radio:31, escala:.82},
        {cantidad:6, radio:17, escala:.64}
    ];

    capas.forEach((capa, c) => {
        for (let i=0;i<capa.cantidad;i++) {
            const wrap = crearParteNueva(`rosa-cereza-wrap rosa-cereza-capa-${c+1}`);
            wrap.style.setProperty("--rosa-angulo", `${i*(360/capa.cantidad)}deg`);
            wrap.style.setProperty("--rosa-radio", `${capa.radio}px`);
            wrap.style.setProperty("--rosa-escala", capa.escala);
            wrap.appendChild(crearParteNueva("rosa-cereza-petalo"));
            cabeza.appendChild(wrap);
        }
    });

    cabeza.appendChild(crearParteNueva("rosa-cereza-centro"));
    flor.appendChild(cabeza);
    flor.appendChild(crearParteNueva("rosa-cereza-tallo"));
    flor.appendChild(crearParteNueva("rosa-cereza-hoja rosa-cereza-hoja-1"));
    flor.appendChild(crearParteNueva("rosa-cereza-hoja rosa-cereza-hoja-2"));
    return flor;
};


/* =====================================================
   HIBISCO CEREZA
===================================================== */

Flores.hibiscoCereza = function () {
    const flor = crearParteNueva("hibisco-cereza");
    const cabeza = crearParteNueva("hibisco-cabeza");

    for (let i=1;i<=5;i++) cabeza.appendChild(crearParteNueva(`hibisco-petalo hibisco-petalo-${i}`));

    const pistilo = crearParteNueva("hibisco-pistilo");
    for (let i=0;i<8;i++) {
        const antera = crearParteNueva("hibisco-antera");
        antera.style.top = `${10+i*13}px`;
        antera.style.left = `${i%2 ? 7 : -4}px`;
        pistilo.appendChild(antera);
    }

    cabeza.appendChild(crearParteNueva("hibisco-centro"));
    cabeza.appendChild(pistilo);
    flor.appendChild(cabeza);
    flor.appendChild(crearParteNueva("hibisco-tallo"));
    flor.appendChild(crearParteNueva("hibisco-hoja hibisco-hoja-1"));
    flor.appendChild(crearParteNueva("hibisco-hoja hibisco-hoja-2"));
    return flor;
};


/* =====================================================
   FRESIA
===================================================== */

Flores.fresia = function () {
    const flor = crearParteNueva("fresia");
    flor.appendChild(crearParteNueva("fresia-tallo"));
    flor.appendChild(crearParteNueva("fresia-rama"));

    const posiciones = [
        [118,72,-24,1],[150,60,-8,.96],[182,68,10,.90],
        [207,91,25,.83],[222,121,37,.75],[228,151,48,.68]
    ];

    posiciones.forEach(([x,y,r,s], idx) => {
        const f = crearParteNueva("fresia-flor");
        f.style.left = `${x}px`;
        f.style.top = `${y}px`;
        f.style.transform = `rotate(${r}deg) scale(${s})`;
        f.style.setProperty("--fresia-delay", `${idx*-.24}s`);
        for (let i=1;i<=6;i++) f.appendChild(crearParteNueva(`fresia-petalo fresia-petalo-${i}`));
        f.appendChild(crearParteNueva("fresia-centro"));
        flor.appendChild(f);
    });

    flor.appendChild(crearParteNueva("fresia-hoja fresia-hoja-1"));
    flor.appendChild(crearParteNueva("fresia-hoja fresia-hoja-2"));
    flor.appendChild(crearParteNueva("fresia-hoja fresia-hoja-3"));
    return flor;
};


/* =====================================================
   CORAZÓN SANGRANTE — FLOR SECRETA II
===================================================== */

Flores.corazonSangrante = function () {
    const flor = crearParteNueva("corazon-sangrante");
    flor.appendChild(crearParteNueva("corazon-tallo"));
    flor.appendChild(crearParteNueva("corazon-rama"));

    const corazones = [
        [91,93,-18,1],[124,112,-12,.94],[158,128,-6,.88],
        [191,142,4,.82],[220,154,11,.74]
    ];

    corazones.forEach(([x,y,r,s], idx) => {
        const colgante = crearParteNueva("corazon-colgante");
        colgante.style.left = `${x}px`;
        colgante.style.top = `${y}px`;
        colgante.style.transform = `rotate(${r}deg) scale(${s})`;
        colgante.style.setProperty("--corazon-delay", `${idx*-.30}s`);
        colgante.appendChild(crearParteNueva("corazon-hilo"));
        colgante.appendChild(crearParteNueva("corazon-flor"));
        colgante.appendChild(crearParteNueva("corazon-lagrima"));
        flor.appendChild(colgante);
    });

    flor.appendChild(crearParteNueva("corazon-hoja corazon-hoja-1"));
    flor.appendChild(crearParteNueva("corazon-hoja corazon-hoja-2"));
    flor.appendChild(crearParteNueva("corazon-hoja corazon-hoja-3"));
    return flor;
};
