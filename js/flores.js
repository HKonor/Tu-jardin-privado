function crearElemento(clase, etiqueta = "div") {
  const elemento = document.createElement(etiqueta);

  elemento.className = clase;

  return elemento;
}

const Flores = {
  /* =====================================================
       GIRASOL
    ===================================================== */

  girasol: function () {
    const flor = crearElemento("girasol");

    const cabeza = crearElemento("girasol-cabeza");

    for (let i = 0; i < 20; i++) {
      const petalo = crearElemento("girasol-petalo");

      petalo.style.transform = `rotate(${i * 18}deg)`;

      cabeza.appendChild(petalo);
    }

    const centro = crearElemento("girasol-centro");

    for (let i = 0; i < 65; i++) {
      const semilla = crearElemento("semilla", "span");

      const angulo = i * 137.5;

      const radio = 4 * Math.sqrt(i);

      const radian = (angulo * Math.PI) / 180;

      semilla.style.left = 47 + Math.cos(radian) * radio + "px";

      semilla.style.top = 47 + Math.sin(radian) * radio + "px";

      centro.appendChild(semilla);
    }

    cabeza.appendChild(centro);

    flor.appendChild(crearElemento("girasol-tallo"));

    flor.appendChild(crearElemento("girasol-hoja hoja-izquierda"));

    flor.appendChild(crearElemento("girasol-hoja hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       TULIPÁN
    ===================================================== */

  tulipan: function () {
    const flor = crearElemento("tulipan");

    const cabeza = crearElemento("tulipan-cabeza");

    [
      "petalo-fondo-izq",
      "petalo-fondo-der",
      "petalo-centro-izq",
      "petalo-centro-der",
      "petalo-frontal",
    ].forEach((clase) => {
      const petalo = crearElemento(`tulipan-petalo ${clase}`);

      if (clase === "petalo-frontal") {
        for (let i = 1; i <= 3; i++) {
          petalo.appendChild(crearElemento(`vena vena-${i}`, "span"));
        }
      }

      cabeza.appendChild(petalo);
    });

    flor.appendChild(crearElemento("tulipan-tallo"));

    flor.appendChild(crearElemento("tulipan-hoja tulipan-hoja-izquierda"));

    flor.appendChild(crearElemento("tulipan-hoja tulipan-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       LIRIO
    ===================================================== */

  lirio: function () {
    const flor = crearElemento("lirio");

    const cabeza = crearElemento("lirio-cabeza");

    for (let i = 1; i <= 6; i++) {
      cabeza.appendChild(crearElemento(`lirio-petalo lirio-petalo-${i}`));
    }

    cabeza.appendChild(crearElemento("lirio-centro"));

    cabeza.appendChild(crearElemento("lirio-pistilo"));

    for (let i = 1; i <= 6; i++) {
      const estambre = crearElemento(`lirio-estambre lirio-estambre-${i}`);

      estambre.appendChild(crearElemento("lirio-antera", "span"));

      cabeza.appendChild(estambre);
    }

    flor.appendChild(crearElemento("lirio-tallo"));

    flor.appendChild(crearElemento("lirio-hoja lirio-hoja-izquierda"));

    flor.appendChild(crearElemento("lirio-hoja lirio-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       FLOR DE NUBE
    ===================================================== */

  nube: function () {
    const flor = crearElemento("flor-nube");

    flor.appendChild(crearElemento("nube-tallo-principal"));

    const ramas = [
      [-43, 135],
      [-32, 150],
      [-22, 165],
      [-12, 176],
      [-4, 185],
      [5, 184],
      [14, 175],
      [24, 162],
      [34, 148],
      [44, 132],
    ];

    ramas.forEach(([rotacion, altura]) => {
      const rama = crearElemento("nube-rama");

      rama.style.height = `${altura}px`;

      rama.style.transform = `rotate(${rotacion}deg)`;

      flor.appendChild(rama);
    });

    const ramo = crearElemento("nube-ramo");

    function crearFlorecita(x, y, escala, retraso) {
      const wrap = crearElemento("nube-florecita-wrap");

      wrap.style.left = `${x}px`;

      wrap.style.top = `${y}px`;

      wrap.style.setProperty("--escala", escala);

      wrap.style.setProperty("--delay", retraso);

      const pequena = crearElemento("nube-florecita");

      for (let i = 1; i <= 5; i++) {
        pequena.appendChild(
          crearElemento(`nube-petalo nube-petalo-${i}`, "span"),
        );
      }

      pequena.appendChild(crearElemento("nube-centro", "span"));

      wrap.appendChild(pequena);

      ramo.appendChild(wrap);
    }

    for (let i = 0; i < 135; i++) {
      const angulo = i * 137.5;

      const radio = 18 + (i % 14) * 7.5;

      const radian = (angulo * Math.PI) / 180;

      const x = 153 + Math.cos(radian) * radio;

      const y = 112 + Math.sin(radian) * radio * 0.52;

      crearFlorecita(x, y, 0.58 + (i % 6) * 0.055, `${-(i % 11) * 0.13}s`);
    }

    flor.appendChild(ramo);

    flor.appendChild(crearElemento("nube-hoja nube-hoja-1"));

    flor.appendChild(crearElemento("nube-hoja nube-hoja-2"));

    return flor;
  },

  /* =====================================================
       PEONÍA
    ===================================================== */

  peonia: function () {
    const flor = crearElemento("peonia");

    const cabeza = crearElemento("peonia-cabeza");

    function capa(cantidad, radio, escala) {
      for (let i = 0; i < cantidad; i++) {
        const wrap = crearElemento("peonia-petalo-wrap");

        wrap.style.setProperty("--angulo", `${(360 / cantidad) * i}deg`);

        wrap.style.setProperty("--radio", `${radio}px`);

        wrap.style.setProperty("--escala", escala);

        wrap.appendChild(crearElemento("peonia-petalo"));

        cabeza.appendChild(wrap);
      }
    }

    capa(16, 45, 1);

    capa(12, 29, 0.86);

    capa(9, 14, 0.7);

    flor.appendChild(crearElemento("peonia-tallo"));

    flor.appendChild(crearElemento("peonia-hoja peonia-hoja-izquierda"));

    flor.appendChild(crearElemento("peonia-hoja peonia-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       CAMELIA
    ===================================================== */

  camelia: function () {
    const flor = crearElemento("camelia");

    const cabeza = crearElemento("camelia-cabeza");

    for (let i = 1; i <= 8; i++) {
      cabeza.appendChild(
        crearElemento(
          `camelia-petalo camelia-petalo-exterior camelia-exterior-${i}`,
        ),
      );
    }

    for (let i = 1; i <= 6; i++) {
      cabeza.appendChild(
        crearElemento(
          `camelia-petalo camelia-petalo-interior camelia-interior-${i}`,
        ),
      );
    }

    const centro = crearElemento("camelia-centro");

    for (let i = 0; i < 30; i++) {
      const punto = crearElemento("camelia-estambre", "span");

      const angulo = i * 137.5;

      const radio = 2.4 * Math.sqrt(i);

      const radian = (angulo * Math.PI) / 180;

      punto.style.left = 23 + Math.cos(radian) * radio + "px";

      punto.style.top = 23 + Math.sin(radian) * radio + "px";

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.appendChild(crearElemento("camelia-tallo"));

    flor.appendChild(crearElemento("camelia-hoja camelia-hoja-izquierda"));

    flor.appendChild(crearElemento("camelia-hoja camelia-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       JAZMÍN
    ===================================================== */

  jazmin: function () {
    const flor = crearElemento("jazmin");

    const cabeza = crearElemento("jazmin-cabeza");

    for (let i = 1; i <= 8; i++) {
      cabeza.appendChild(
        crearElemento(`jazmin-petalo jazmin-petalo-${i}`, "span"),
      );
    }

    const centro = crearElemento("jazmin-centro");

    for (let i = 0; i < 24; i++) {
      const punto = crearElemento("jazmin-estambre", "span");

      const angulo = i * 137.5;

      const radio = 2.1 * Math.sqrt(i);

      const radian = (angulo * Math.PI) / 180;

      punto.style.left = 18 + Math.cos(radian) * radio + "px";

      punto.style.top = 18 + Math.sin(radian) * radio + "px";

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.appendChild(crearElemento("jazmin-tallo"));

    flor.appendChild(crearElemento("jazmin-rama jazmin-rama-izquierda"));

    flor.appendChild(crearElemento("jazmin-rama jazmin-rama-derecha"));

    flor.appendChild(crearElemento("jazmin-hoja jazmin-hoja-izquierda"));

    flor.appendChild(crearElemento("jazmin-hoja jazmin-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       ORQUÍDEA
    ===================================================== */

  orquidea: function () {
    const flor = crearElemento("orquidea");

    const cabeza = crearElemento("orquidea-cabeza");

    [
      "superior",
      "lateral-izq",
      "lateral-der",
      "inferior-izq",
      "inferior-der",
    ].forEach((clase) => {
      cabeza.appendChild(crearElemento(`orquidea-petalo ${clase}`));
    });

    cabeza.appendChild(crearElemento("orquidea-labelo"));

    cabeza.appendChild(crearElemento("orquidea-centro"));

    flor.appendChild(crearElemento("orquidea-tallo"));

    flor.appendChild(crearElemento("orquidea-rama"));

    flor.appendChild(crearElemento("orquidea-hoja orquidea-hoja-izquierda"));

    flor.appendChild(crearElemento("orquidea-hoja orquidea-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       LAVANDA
    ===================================================== */

  lavanda: function () {
    const flor = crearElemento("lavanda");

    [
      [70, 70, -12, 10],
      [110, 45, -4, 12],
      [150, 65, 8, 10],
      [190, 85, 16, 9],
    ].forEach(([x, top, rotacion, cantidad]) => {
      const tallo = crearElemento("lavanda-tallo");

      tallo.style.left = `${x}px`;

      tallo.style.top = `${top}px`;

      tallo.style.transform = `rotate(${rotacion}deg)`;

      tallo.appendChild(crearElemento("lavanda-linea"));

      for (let i = 0; i < cantidad; i++) {
        const brote = crearElemento(
          `lavanda-brote ${i % 2 === 0 ? "izq" : "der"}`,
          "span",
        );

        brote.style.top = `${8 + i * 12}px`;

        tallo.appendChild(brote);
      }

      flor.appendChild(tallo);
    });

    flor.appendChild(crearElemento("lavanda-base-tallo"));

    flor.appendChild(crearElemento("lavanda-hoja lavanda-hoja-izquierda"));

    flor.appendChild(crearElemento("lavanda-hoja lavanda-hoja-derecha"));

    return flor;
  },

  /* =====================================================
       ANÉMONA
    ===================================================== */

  anemona: function () {
    const flor = crearElemento("anemona");

    const cabeza = crearElemento("anemona-cabeza");

    for (let i = 0; i < 8; i++) {
      const wrap = crearElemento("anemona-petalo-wrap");

      wrap.style.setProperty("--angulo", `${i * 45}deg`);

      wrap.appendChild(crearElemento("anemona-petalo"));

      cabeza.appendChild(wrap);
    }

    const centro = crearElemento("anemona-centro");

    for (let i = 0; i < 55; i++) {
      const punto = crearElemento("anemona-estambre", "span");

      const angulo = i * 137.5;

      const radio = 3.4 * Math.sqrt(i);

      const radian = (angulo * Math.PI) / 180;

      punto.style.left = 34 + Math.cos(radian) * radio + "px";

      punto.style.top = 34 + Math.sin(radian) * radio + "px";

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.appendChild(crearElemento("anemona-tallo"));

    flor.appendChild(crearElemento("anemona-hoja anemona-hoja-izquierda"));

    flor.appendChild(crearElemento("anemona-hoja anemona-hoja-derecha"));

    flor.appendChild(crearElemento("anemona-hoja anemona-hoja-centro"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       MAGNOLIA
    ===================================================== */

  magnolia: function () {
    const flor = crearElemento("magnolia");

    const cabeza = crearElemento("magnolia-cabeza");

    for (let i = 1; i <= 6; i++) {
      cabeza.appendChild(crearElemento(`magnolia-petalo magnolia-petalo-${i}`));
    }

    for (let i = 1; i <= 3; i++) {
      cabeza.appendChild(
        crearElemento(`magnolia-petalo-interno magnolia-interno-${i}`),
      );
    }

    const centro = crearElemento("magnolia-centro");

    for (let i = 0; i < 18; i++) {
      const punto = crearElemento("magnolia-estambre", "span");

      punto.style.transform = `rotate(${i * 20}deg) translateY(-11px)`;

      centro.appendChild(punto);
    }

    cabeza.appendChild(centro);

    flor.appendChild(crearElemento("magnolia-tallo"));

    flor.appendChild(crearElemento("magnolia-hoja magnolia-hoja-izquierda"));

    flor.appendChild(crearElemento("magnolia-hoja magnolia-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       NO ME OLVIDES
    ===================================================== */

  nomeolvides: function () {
    const flor = crearElemento("nomeolvides");

    flor.appendChild(crearElemento("nomeolvides-tallo-principal"));

    const ramas = [
      [144, 123, 145, -34],
      [145, 116, 160, -24],
      [146, 108, 175, -14],
      [147, 103, 185, -5],

      [149, 103, 185, 6],
      [150, 108, 175, 15],
      [151, 116, 160, 25],
      [152, 124, 145, 35],
    ];

    ramas.forEach(([left, top, alto, rotacion]) => {
      const rama = crearElemento("nomeolvides-rama");

      rama.style.left = `${left}px`;

      rama.style.top = `${top}px`;

      rama.style.height = `${alto}px`;

      rama.style.transform = `rotate(${rotacion}deg)`;

      flor.appendChild(rama);
    });

    function florecita(x, y, escala, rotacion, delay) {
      const wrap = crearElemento("nomeolvides-flor");

      wrap.style.left = `${x}px`;

      wrap.style.top = `${y}px`;

      wrap.style.setProperty("--escala", escala);

      wrap.style.setProperty("--rotacion", `${rotacion}deg`);

      wrap.style.setProperty("--delay", `${delay}s`);

      for (let i = 1; i <= 5; i++) {
        wrap.appendChild(
          crearElemento(`nomeolvides-petalo nomeolvides-petalo-${i}`, "span"),
        );
      }

      wrap.appendChild(crearElemento("nomeolvides-centro", "span"));

      flor.appendChild(wrap);
    }

    const posiciones = [
      [68, 101, 0.7, -8],
      [82, 85, 0.84, 4],
      [98, 73, 0.78, -5],
      [116, 62, 0.9, 8],
      [136, 57, 0.82, -2],
      [156, 59, 0.9, 5],
      [176, 69, 0.78, -7],
      [195, 84, 0.82, 7],
      [210, 103, 0.7, -4],

      [61, 124, 0.73, 5],
      [79, 112, 0.88, -4],
      [98, 100, 0.76, 8],
      [117, 91, 0.88, -7],
      [137, 87, 0.82, 3],
      [157, 89, 0.9, -4],
      [177, 97, 0.78, 6],
      [197, 111, 0.84, -5],
      [218, 124, 0.68, 5],

      [77, 138, 0.76, -3],
      [97, 128, 0.83, 7],
      [117, 119, 0.72, -5],
      [137, 115, 0.9, 4],
      [158, 119, 0.79, -6],
      [179, 128, 0.87, 6],
      [199, 140, 0.72, -4],

      [96, 151, 0.72, 3],
      [118, 143, 0.82, -6],
      [140, 140, 0.76, 5],
      [162, 145, 0.84, -4],
      [183, 154, 0.69, 7],

      [118, 165, 0.68, -4],
      [141, 160, 0.77, 5],
      [163, 168, 0.66, -3],
    ];

    posiciones.forEach(([x, y, escala, rotacion], indice) => {
      florecita(x, y, escala, rotacion, -(indice % 8) * 0.18);
    });

    [
      [57, 91],
      [90, 60],
      [184, 57],
      [219, 96],
      [71, 151],
      [204, 157],
    ].forEach(([x, y]) => {
      const boton = crearElemento("nomeolvides-boton");

      boton.style.left = `${x}px`;

      boton.style.top = `${y}px`;

      flor.appendChild(boton);
    });

    for (let i = 1; i <= 4; i++) {
      flor.appendChild(crearElemento(`nomeolvides-hoja nomeolvides-hoja-${i}`));
    }

    return flor;
  },

  /* =====================================================
       CLAVEL ROJO
    ===================================================== */

  clavel: function () {
    const flor = crearElemento("clavel");

    const cabeza = crearElemento("clavel-cabeza");

    function crearCapa(cantidad, radio, escala, clase) {
      for (let i = 0; i < cantidad; i++) {
        const envoltura = crearElemento(`clavel-petalo-wrap ${clase}`);

        envoltura.style.setProperty("--angulo", `${(360 / cantidad) * i}deg`);

        envoltura.style.setProperty("--radio", `${radio}px`);

        envoltura.style.setProperty("--escala", escala);

        const petalo = crearElemento("clavel-petalo");

        envoltura.appendChild(petalo);

        cabeza.appendChild(envoltura);
      }
    }

    crearCapa(15, 48, 1, "clavel-capa-externa");

    crearCapa(12, 31, 0.86, "clavel-capa-media");

    crearCapa(9, 16, 0.7, "clavel-capa-centro");

    cabeza.appendChild(crearElemento("clavel-centro"));

    flor.appendChild(crearElemento("clavel-tallo"));

    flor.appendChild(crearElemento("clavel-hoja clavel-hoja-1"));

    flor.appendChild(crearElemento("clavel-hoja clavel-hoja-2"));

    flor.appendChild(crearElemento("clavel-hoja clavel-hoja-3"));

    flor.appendChild(cabeza);

    return flor;
  },

  /* =====================================================
       DALIA SECRETA
    ===================================================== */

  dalia: function () {
    const flor = crearElemento("dalia");

    const cabeza = crearElemento("dalia-cabeza");

    function crearCapa(cantidad, radio, ancho, alto, clase) {
      for (let i = 0; i < cantidad; i++) {
        const wrap = crearElemento(`dalia-wrap ${clase}`);

        wrap.style.setProperty("--angulo", `${(360 / cantidad) * i}deg`);

        wrap.style.setProperty("--radio", `${radio}px`);

        const petalo = crearElemento("dalia-petalo", "span");

        petalo.style.width = `${ancho}px`;

        petalo.style.height = `${alto}px`;

        wrap.appendChild(petalo);

        cabeza.appendChild(wrap);
      }
    }

    crearCapa(16, 48, 38, 74, "dalia-capa-1");

    crearCapa(13, 31, 34, 64, "dalia-capa-2");

    crearCapa(10, 17, 28, 52, "dalia-capa-3");

    cabeza.appendChild(crearElemento("dalia-centro"));

    flor.appendChild(crearElemento("dalia-tallo"));

    flor.appendChild(crearElemento("dalia-hoja dalia-hoja-izquierda"));

    flor.appendChild(crearElemento("dalia-hoja dalia-hoja-derecha"));

    flor.appendChild(cabeza);

    return flor;
  },
};
