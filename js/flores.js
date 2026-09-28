const Flores = {
  girasol: function () {
    const flor = document.createElement("div");

    flor.className = "girasol";

    const cabeza = document.createElement("div");

    cabeza.className = "girasol-cabeza";

    for (let i = 0; i < 20; i++) {
      const petalo = document.createElement("div");

      petalo.className = "girasol-petalo";

      petalo.style.transform = `rotate(${i * 18}deg)`;

      cabeza.appendChild(petalo);
    }

    const centro = document.createElement("div");

    centro.className = "girasol-centro";

    for (let i = 0; i < 65; i++) {
      const semilla = document.createElement("span");

      semilla.className = "semilla";

      const angulo = i * 137.5;

      const radio = 4 * Math.sqrt(i);

      const radian = (angulo * Math.PI) / 180;

      semilla.style.left = 47 + Math.cos(radian) * radio + "px";

      semilla.style.top = 47 + Math.sin(radian) * radio + "px";

      centro.appendChild(semilla);
    }

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="girasol-tallo"></div>
            <div class="girasol-hoja hoja-izquierda"></div>
            <div class="girasol-hoja hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  tulipan: function () {
    const flor = document.createElement("div");

    flor.className = "tulipan";

    const cabeza = document.createElement("div");

    cabeza.className = "tulipan-cabeza";

    [
      "petalo-fondo-izq",
      "petalo-fondo-der",
      "petalo-centro-izq",
      "petalo-centro-der",
      "petalo-frontal",
    ].forEach((clase) => {
      const petalo = document.createElement("div");

      petalo.className = `tulipan-petalo ${clase}`;

      if (clase === "petalo-frontal") {
        for (let i = 1; i <= 3; i++) {
          const vena = document.createElement("span");

          vena.className = `vena vena-${i}`;

          petalo.appendChild(vena);
        }
      }

      cabeza.appendChild(petalo);
    });

    flor.innerHTML += `
            <div class="tulipan-tallo"></div>
            <div class="tulipan-hoja tulipan-hoja-izquierda"></div>
            <div class="tulipan-hoja tulipan-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  lirio: function () {
    const flor = document.createElement("div");

    flor.className = "lirio";

    const cabeza = document.createElement("div");

    cabeza.className = "lirio-cabeza";

    for (let i = 1; i <= 6; i++) {
      const petalo = document.createElement("div");

      petalo.className = `lirio-petalo lirio-petalo-${i}`;

      cabeza.appendChild(petalo);
    }

    const centro = document.createElement("div");

    centro.className = "lirio-centro";

    cabeza.appendChild(centro);

    const pistilo = document.createElement("div");

    pistilo.className = "lirio-pistilo";

    cabeza.appendChild(pistilo);

    for (let i = 1; i <= 6; i++) {
      const estambre = document.createElement("div");

      estambre.className = `lirio-estambre lirio-estambre-${i}`;

      const antera = document.createElement("span");

      antera.className = "lirio-antera";

      estambre.appendChild(antera);

      cabeza.appendChild(estambre);
    }

    flor.innerHTML += `
            <div class="lirio-tallo"></div>
            <div class="lirio-hoja lirio-hoja-izquierda"></div>
            <div class="lirio-hoja lirio-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  nube: function () {
    const flor = document.createElement("div");

    flor.className = "flor-nube";

    const tallo = document.createElement("div");

    tallo.className = "nube-tallo-principal";

    flor.appendChild(tallo);

    const ramas = [
      [-38, 118],
      [-25, 133],
      [-12, 145],
      [0, 150],
      [13, 145],
      [27, 132],
      [40, 116],
    ];

    ramas.forEach(([rotacion, altura]) => {
      const rama = document.createElement("div");

      rama.className = "nube-rama";

      rama.style.height = `${altura}px`;

      rama.style.transform = `rotate(${rotacion}deg)`;

      flor.appendChild(rama);
    });

    const ramo = document.createElement("div");

    ramo.className = "nube-ramo";

    function crearFlorecita(x, y, escala, delay) {
      const wrap = document.createElement("div");

      wrap.className = "nube-florecita-wrap";

      wrap.style.left = `${x}px`;

      wrap.style.top = `${y}px`;

      wrap.style.setProperty("--escala", escala);

      wrap.style.setProperty("--delay", delay);

      const pequena = document.createElement("div");

      pequena.className = "nube-florecita";

      for (let i = 1; i <= 5; i++) {
        const petalo = document.createElement("span");

        petalo.className = `nube-petalo nube-petalo-${i}`;

        pequena.appendChild(petalo);
      }

      const centro = document.createElement("span");

      centro.className = "nube-centro";

      pequena.appendChild(centro);

      wrap.appendChild(pequena);

      ramo.appendChild(wrap);
    }

    for (let i = 0; i < 125; i++) {
      const angulo = i * 137.5;

      const radio = 20 + (i % 13) * 8.4;

      const rad = (angulo * Math.PI) / 180;

      const x = 152 + Math.cos(rad) * radio;

      const y = 118 + Math.sin(rad) * radio * 0.48;

      crearFlorecita(x, y, 0.6 + (i % 5) * 0.065, `${-(i % 10) * 0.12}s`);
    }

    flor.appendChild(ramo);

    flor.innerHTML += `
            <div class="nube-hoja nube-hoja-1"></div>
            <div class="nube-hoja nube-hoja-2"></div>
        `;

    return flor;
  },

  peonia: function () {
    const flor = document.createElement("div");

    flor.className = "peonia";

    const cabeza = document.createElement("div");

    cabeza.className = "peonia-cabeza";

    function capa(cantidad, radio, escala, clase) {
      for (let i = 0; i < cantidad; i++) {
        const wrap = document.createElement("div");

        wrap.className = `peonia-petalo-wrap ${clase}`;

        wrap.style.setProperty("--angulo", `${(360 / cantidad) * i}deg`);

        wrap.style.setProperty("--radio", `${radio}px`);

        wrap.style.setProperty("--escala", escala);

        const petalo = document.createElement("div");

        petalo.className = "peonia-petalo";

        wrap.appendChild(petalo);

        cabeza.appendChild(wrap);
      }
    }

    capa(16, 45, 1, "peonia-capa-externa");

    capa(12, 29, 0.86, "peonia-capa-media");

    capa(9, 14, 0.7, "peonia-capa-interna");

    flor.innerHTML += `
            <div class="peonia-tallo"></div>
            <div class="peonia-hoja peonia-hoja-izquierda"></div>
            <div class="peonia-hoja peonia-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  camelia: function () {
    const flor = document.createElement("div");

    flor.className = "camelia";

    const cabeza = document.createElement("div");

    cabeza.className = "camelia-cabeza";

    for (let i = 1; i <= 8; i++) {
      const petalo = document.createElement("div");

      petalo.className = `camelia-petalo camelia-petalo-exterior camelia-exterior-${i}`;

      cabeza.appendChild(petalo);
    }

    for (let i = 1; i <= 6; i++) {
      const petalo = document.createElement("div");

      petalo.className = `camelia-petalo camelia-petalo-interior camelia-interior-${i}`;

      cabeza.appendChild(petalo);
    }

    const centro = document.createElement("div");

    centro.className = "camelia-centro";

    for (let i = 0; i < 30; i++) {
      const punto = document.createElement("span");

      punto.className = "camelia-estambre";

      const angulo = i * 137.5;

      const radio = 2.4 * Math.sqrt(i);

      const rad = (angulo * Math.PI) / 180;

      punto.style.left = 23 + Math.cos(rad) * radio + "px";

      punto.style.top = 23 + Math.sin(rad) * radio + "px";

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="camelia-tallo"></div>
            <div class="camelia-hoja camelia-hoja-izquierda"></div>
            <div class="camelia-hoja camelia-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  jazmin: function () {
    const flor = document.createElement("div");

    flor.className = "jazmin";

    const cabeza = document.createElement("div");

    cabeza.className = "jazmin-cabeza";

    for (let i = 1; i <= 8; i++) {
      const petalo = document.createElement("span");

      petalo.className = `jazmin-petalo jazmin-petalo-${i}`;

      cabeza.appendChild(petalo);
    }

    const centro = document.createElement("div");

    centro.className = "jazmin-centro";

    for (let i = 0; i < 22; i++) {
      const estambre = document.createElement("span");

      estambre.className = "jazmin-estambre";

      const ang = i * 137.5;

      const radio = 2.1 * Math.sqrt(i);

      const rad = (ang * Math.PI) / 180;

      estambre.style.left = 18 + Math.cos(rad) * radio + "px";

      estambre.style.top = 18 + Math.sin(rad) * radio + "px";

      centro.appendChild(estambre);
    }

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="jazmin-tallo"></div>
            <div class="jazmin-rama jazmin-rama-izquierda"></div>
            <div class="jazmin-rama jazmin-rama-derecha"></div>
            <div class="jazmin-hoja jazmin-hoja-izquierda"></div>
            <div class="jazmin-hoja jazmin-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  orquidea: function () {
    const flor = document.createElement("div");

    flor.className = "orquidea";

    const cabeza = document.createElement("div");

    cabeza.className = "orquidea-cabeza";

    [
      "superior",
      "lateral-izq",
      "lateral-der",
      "inferior-izq",
      "inferior-der",
    ].forEach((clase) => {
      const petalo = document.createElement("div");

      petalo.className = `orquidea-petalo ${clase}`;

      cabeza.appendChild(petalo);
    });

    const labelo = document.createElement("div");

    labelo.className = "orquidea-labelo";

    cabeza.appendChild(labelo);

    const centro = document.createElement("div");

    centro.className = "orquidea-centro";

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="orquidea-tallo"></div>
            <div class="orquidea-rama"></div>
            <div class="orquidea-hoja orquidea-hoja-izquierda"></div>
            <div class="orquidea-hoja orquidea-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  lavanda: function () {
    const flor = document.createElement("div");

    flor.className = "lavanda";

    [
      [70, 70, -12, 10],
      [110, 45, -4, 12],
      [150, 65, 8, 10],
      [190, 85, 16, 9],
    ].forEach(([x, top, rotacion, cantidad]) => {
      const tallo = document.createElement("div");

      tallo.className = "lavanda-tallo";

      tallo.style.left = `${x}px`;

      tallo.style.top = `${top}px`;

      tallo.style.transform = `rotate(${rotacion}deg)`;

      const linea = document.createElement("div");

      linea.className = "lavanda-linea";

      tallo.appendChild(linea);

      for (let i = 0; i < cantidad; i++) {
        const brote = document.createElement("span");

        brote.className = `lavanda-brote ${i % 2 === 0 ? "izq" : "der"}`;

        brote.style.top = `${8 + i * 12}px`;

        tallo.appendChild(brote);
      }

      flor.appendChild(tallo);
    });

    flor.innerHTML += `
            <div class="lavanda-base-tallo"></div>
            <div class="lavanda-hoja lavanda-hoja-izquierda"></div>
            <div class="lavanda-hoja lavanda-hoja-derecha"></div>
        `;

    return flor;
  },

  anemona: function () {
    const flor = document.createElement("div");

    flor.className = "anemona";

    const cabeza = document.createElement("div");

    cabeza.className = "anemona-cabeza";

    for (let i = 0; i < 8; i++) {
      const wrap = document.createElement("div");

      wrap.className = "anemona-petalo-wrap";

      wrap.style.setProperty("--angulo", `${i * 45}deg`);

      const petalo = document.createElement("div");

      petalo.className = "anemona-petalo";

      wrap.appendChild(petalo);

      cabeza.appendChild(wrap);
    }

    const centro = document.createElement("div");

    centro.className = "anemona-centro";

    for (let i = 0; i < 55; i++) {
      const punto = document.createElement("span");

      punto.className = "anemona-estambre";

      const ang = i * 137.5;

      const radio = 3.4 * Math.sqrt(i);

      const rad = (ang * Math.PI) / 180;

      punto.style.left = 34 + Math.cos(rad) * radio + "px";

      punto.style.top = 34 + Math.sin(rad) * radio + "px";

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="anemona-tallo"></div>
            <div class="anemona-hoja anemona-hoja-izquierda"></div>
            <div class="anemona-hoja anemona-hoja-derecha"></div>
            <div class="anemona-hoja anemona-hoja-centro"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       MAGNOLIA ROSA
    ===================================================== */

  magnolia: function () {
    const flor = document.createElement("div");

    flor.className = "magnolia";

    const cabeza = document.createElement("div");

    cabeza.className = "magnolia-cabeza";

    for (let i = 1; i <= 6; i++) {
      const petalo = document.createElement("div");

      petalo.className = `magnolia-petalo magnolia-petalo-${i}`;

      cabeza.appendChild(petalo);
    }

    for (let i = 1; i <= 3; i++) {
      const petalo = document.createElement("div");

      petalo.className = `magnolia-petalo-interno magnolia-interno-${i}`;

      cabeza.appendChild(petalo);
    }

    const centro = document.createElement("div");

    centro.className = "magnolia-centro";

    for (let i = 0; i < 18; i++) {
      const punto = document.createElement("span");

      punto.className = "magnolia-estambre";

      punto.style.transform = `rotate(${i * 20}deg) translateY(-11px)`;

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="magnolia-tallo"></div>
            <div class="magnolia-hoja magnolia-hoja-izquierda"></div>
            <div class="magnolia-hoja magnolia-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       DALIA SECRETA
    ===================================================== */

  dalia: function () {
    const flor = document.createElement("div");

    flor.className = "dalia";

    const cabeza = document.createElement("div");

    cabeza.className = "dalia-cabeza";

    function crearCapa(cantidad, radio, ancho, alto, clase) {
      for (let i = 0; i < cantidad; i++) {
        const wrap = document.createElement("div");

        wrap.className = `dalia-wrap ${clase}`;

        wrap.style.setProperty("--angulo", `${(360 / cantidad) * i}deg`);

        wrap.style.setProperty("--radio", `${radio}px`);

        const petalo = document.createElement("span");

        petalo.className = "dalia-petalo";

        petalo.style.width = `${ancho}px`;

        petalo.style.height = `${alto}px`;

        wrap.appendChild(petalo);

        cabeza.appendChild(wrap);
      }
    }

    crearCapa(16, 48, 38, 74, "dalia-capa-1");

    crearCapa(13, 31, 34, 64, "dalia-capa-2");

    crearCapa(10, 17, 28, 52, "dalia-capa-3");

    const centro = document.createElement("div");

    centro.className = "dalia-centro";

    cabeza.appendChild(centro);

    flor.innerHTML += `
            <div class="dalia-tallo"></div>
            <div class="dalia-hoja dalia-hoja-izquierda"></div>
            <div class="dalia-hoja dalia-hoja-derecha"></div>
        `;

    flor.appendChild(cabeza);

    return flor;
  },
};
