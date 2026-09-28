const contenedorFlores = document.getElementById("contenedor-flores");

const jardin =
  document.querySelector(".jardin") || contenedorFlores.parentElement;

/* =====================================================
   ALMACENAMIENTO
===================================================== */

const CLAVES = {
  aviso: "jardin_no_mostrar_aviso_v1",
  coleccionables: "jardin_coleccionables_v1",
  horas: "jardin_horas_reclamadas_v1",
  noche: "jardin_modo_noche_descubierto_v1",
};

function leerJSON(clave, valorInicial) {
  try {
    const valor = localStorage.getItem(clave);

    return valor ? JSON.parse(valor) : valorInicial;
  } catch {
    return valorInicial;
  }
}

function guardarJSON(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

/* =====================================================
   20 COLECCIONABLES
===================================================== */

const coleccionables = [
  {
    id: 1,
    titulo: "Nota 01",
    fragmento: "Hay",
    nota: "Algunas cosas empiezan siendo pequeñas y terminan encontrando su propio lugar.",
  },

  {
    id: 2,
    titulo: "Nota 02",
    fragmento: "personas",
    nota: "Hay presencias que uno comienza a reconocer incluso entre muchos otros detalles.",
  },

  {
    id: 3,
    titulo: "Nota 03",
    fragmento: "que llegan",
    nota: "No todo lo importante avisa antes de aparecer.",
  },

  {
    id: 4,
    titulo: "Nota 04",
    fragmento: "sin avisar",
    nota: "A veces lo inesperado termina siendo precisamente lo que más se recuerda.",
  },

  {
    id: 5,
    titulo: "Nota 05",
    fragmento: "y",
    nota: "Incluso las palabras más pequeñas pueden unir cosas mucho más grandes.",
  },

  {
    id: 6,
    titulo: "Nota 06",
    fragmento: "poco a poco",
    nota: "Hay cosas que funcionan mejor cuando no necesitan apresurarse.",
  },

  {
    id: 7,
    titulo: "Nota 07",
    fragmento: "terminan",
    nota: "Algunas historias no se entienden en el primer capítulo.",
  },

  {
    id: 8,
    titulo: "Nota 08",
    fragmento: "convirtiéndose",
    nota: "Es curioso cómo algo puede cambiar sin que uno note exactamente cuándo ocurrió.",
  },

  {
    id: 9,
    titulo: "Nota 09",
    fragmento: "en",
    nota: "A veces una palabra solamente sirve para acercarnos a la siguiente.",
  },

  {
    id: 10,
    titulo: "Nota 10",
    fragmento: "esos lugares",
    nota: "Hay lugares que no aparecen en ningún mapa.",
  },

  {
    id: 11,
    titulo: "Nota 11",
    fragmento: "que uno",
    nota: "Algunas cosas solo cobran sentido dependiendo de quién las mira.",
  },

  {
    id: 12,
    titulo: "Nota 12",
    fragmento: "no estaba",
    nota: "No siempre encontramos aquello que originalmente salimos a buscar.",
  },

  {
    id: 13,
    titulo: "Nota 13",
    fragmento: "buscando,",
    nota: "Y quizá ahí esté lo interesante de algunas coincidencias.",
  },

  {
    id: 14,
    titulo: "Nota 14",
    fragmento: "pero",
    nota: "Siempre hay una palabra capaz de cambiar el sentido de todo lo anterior.",
  },

  {
    id: 15,
    titulo: "Nota 15",
    fragmento: "que después",
    nota: "El tiempo suele darle otro significado a detalles que parecían normales.",
  },

  {
    id: 16,
    titulo: "Nota 16",
    fragmento: "cuesta",
    nota: "Hay cosas sencillas que con el tiempo dejan de sentirse tan fáciles de ignorar.",
  },

  {
    id: 17,
    titulo: "Nota 17",
    fragmento: "imaginar",
    nota: "A veces la imaginación empieza justo donde terminan las explicaciones.",
  },

  {
    id: 18,
    titulo: "Nota 18",
    fragmento: "que",
    nota: "Otra palabra pequeña. Tal vez todavía falte algo importante.",
  },

  {
    id: 19,
    titulo: "Nota 19",
    fragmento: "no estuvieran",
    nota: "Uno suele notar cuánto significa algo cuando intenta imaginar su ausencia.",
  },

  {
    id: 20,
    titulo: "Nota 20",
    fragmento: "ahí.",
    nota: "Llegaste hasta la última. Ahora la frase ya no necesita esconder nada más.",
  },
];

let notasObtenidas = leerJSON(CLAVES.coleccionables, []);

let horasReclamadas = leerJSON(CLAVES.horas, []);

/* =====================================================
   MODAL GENERAL
===================================================== */

const capaModal = document.createElement("div");

capaModal.className = "capa-modal";

capaModal.innerHTML = `
    <div class="ventana-modal">
        <button
            class="cerrar-modal"
            type="button"
            aria-label="Cerrar"
        >
            ×
        </button>

        <div class="contenido-modal"></div>
    </div>
`;

document.body.appendChild(capaModal);

const contenidoModal = capaModal.querySelector(".contenido-modal");

const cerrarModalBoton = capaModal.querySelector(".cerrar-modal");

function cerrarModal() {
  capaModal.classList.remove("mostrar");
}

cerrarModalBoton.addEventListener("click", cerrarModal);

capaModal.addEventListener("click", (evento) => {
  if (evento.target === capaModal) {
    cerrarModal();
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

/* =====================================================
   TOAST
===================================================== */

const toast = document.createElement("div");

toast.className = "toast-jardin";

document.body.appendChild(toast);

let temporizadorToast;

function mostrarToast(texto) {
  clearTimeout(temporizadorToast);

  toast.textContent = texto;

  toast.classList.add("mostrar");

  temporizadorToast = setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 3000);
}

/* =====================================================
   AVISO INICIAL
===================================================== */

function mostrarAvisoInicial() {
  const ocultarAviso = localStorage.getItem(CLAVES.aviso);

  if (ocultarAviso === "si") {
    revisarHoraColeccionable();

    return;
  }

  contenidoModal.innerHTML = `
        <div class="aviso-coleccionables">

            <p class="modal-etiqueta">
                ALGO NUEVO
            </p>

            <h2>
                Hay cosas escondidas en este jardín
            </h2>

            <p>
                Algunas no aparecen inmediatamente.
                En ciertas horas puede surgir una pequeña
                nota entre las flores.
            </p>

            <p>
                Existen <strong>20 coleccionables</strong>
                y no es posible encontrarlos todos en un
                solo día.
            </p>

            <p>
                Cada nota guarda además una pequeña parte
                de algo más grande.
            </p>

            <div class="acciones-aviso">

                <button
                    id="aceptar-aviso"
                    class="boton-modal-principal"
                    type="button"
                >
                    Aceptar
                </button>

                <button
                    id="ocultar-aviso"
                    class="boton-modal-secundario"
                    type="button"
                >
                    No volver a mostrar
                </button>

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "none";

  capaModal.classList.add("mostrar");

  document.getElementById("aceptar-aviso").addEventListener("click", () => {
    cerrarModal();

    cerrarModalBoton.style.display = "";

    revisarHoraColeccionable();
  });

  document.getElementById("ocultar-aviso").addEventListener("click", () => {
    localStorage.setItem(CLAVES.aviso, "si");

    cerrarModal();

    cerrarModalBoton.style.display = "";

    revisarHoraColeccionable();
  });
}

/* =====================================================
   CARTAS DE LAS FLORES
===================================================== */

function abrirCarta(config) {
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

                ${
                  config.secretoCarta
                    ? `
                        <button
                            class="marca-secreta"
                            id="abrir-postdata"
                            type="button"
                            aria-label="Detalle oculto"
                        >
                            •
                        </button>

                        <div
                            class="postdata-carta"
                            id="postdata-carta"
                        >
                            <strong>P.D.</strong>
                            ${config.secretoCarta}
                        </div>
                        `
                    : ""
                }

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");

  const botonPostdata = document.getElementById("abrir-postdata");

  if (botonPostdata) {
    botonPostdata.addEventListener("click", () => {
      document.getElementById("postdata-carta").classList.toggle("mostrar");
    });
  }
}

/* =====================================================
   PANEL SUPERIOR
===================================================== */

function crearPanelSuperior() {
  const panel = document.createElement("section");

  panel.className = "panel-superior";

  panel.innerHTML = `
        <p class="texto-playlist">
            Todas las canciones que acompañan este
            pequeño jardín están reunidas aquí.
        </p>

        <div class="acciones-superiores">

            <a
                class="boton-playlist"
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/playlist/6XCeXM270zHmOE1vY9MeXA?si=wHKqXyp-SyKISRnlus0oMQ&utm_source=whatsapp&pi=wjAzlEK-QASgo"
            >
                Abrir playlist en Spotify
            </a>

            <button
                class="boton-fondo"
                id="boton-fondo"
                type="button"
            >
                Cambiar a fondo morado
            </button>

        </div>
    `;

  return panel;
}

/* =====================================================
   PROGRESO
===================================================== */

const panelProgreso = document.createElement("section");

panelProgreso.className = "panel-progreso";

const normalCantidadInicial = 11;

function actualizarProgreso() {
  const cantidad = notasObtenidas.length;

  const secreta = cantidad >= 10;

  const flores = secreta ? normalCantidadInicial + 1 : normalCantidadInicial;

  const textoFlores = secreta ? `${flores} flores` : `${flores}/? flores`;

  const frase = coleccionables
    .map((item) =>
      notasObtenidas.includes(item.id) ? item.fragmento : "_____",
    )
    .join(" ");

  panelProgreso.innerHTML = `
        <div class="contador-jardin">
            <span>
                ${textoFlores}
            </span>

            <span class="separador-contador">
                ·
            </span>

            <span>
                ${cantidad}/20 notas
            </span>
        </div>

        <button
            class="abrir-coleccion"
            id="abrir-coleccion"
            type="button"
        >
            Coleccionables
        </button>

        <p class="frase-progreso">
            ${frase}
        </p>
    `;

  document
    .getElementById("abrir-coleccion")
    .addEventListener("click", abrirColeccion);
}

/* =====================================================
   COLECCIÓN
===================================================== */

function abrirColeccion() {
  const tarjetas = coleccionables
    .map((item) => {
      const conseguido = notasObtenidas.includes(item.id);

      return `
                        <article
                            class="
                                coleccion-item
                                ${conseguido ? "conseguido" : "bloqueado"}
                            "
                        >

                            <span class="numero-coleccion">
                                ${String(item.id).padStart(2, "0")}
                            </span>

                            ${
                              conseguido
                                ? `
                                        <h4>
                                            ${item.titulo}
                                        </h4>

                                        <p>
                                            ${item.nota}
                                        </p>

                                        <small>
                                            ${item.fragmento}
                                        </small>
                                    `
                                : `
                                        <h4>
                                            Nota desconocida
                                        </h4>

                                        <p>
                                            Todavía no ha aparecido.
                                        </p>
                                    `
                            }

                        </article>
                    `;
    })
    .join("");

  contenidoModal.innerHTML = `
        <div class="coleccion-modal">

            <p class="modal-etiqueta">
                COLECCIONABLES
            </p>

            <h2>
                ${notasObtenidas.length}/20 encontradas
            </h2>

            <div class="frase-coleccion">

                ${coleccionables
                  .map((item) =>
                    notasObtenidas.includes(item.id) ? item.fragmento : "_____",
                  )
                  .join(" ")}

            </div>

            <div class="rejilla-coleccion">
                ${tarjetas}
            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");
}

/* =====================================================
   COLECCIONABLES POR HORA PAR
===================================================== */

function claveHoraActual(fecha) {
  const anio = fecha.getFullYear();

  const mes = String(fecha.getMonth() + 1).padStart(2, "0");

  const dia = String(fecha.getDate()).padStart(2, "0");

  const hora = String(fecha.getHours()).padStart(2, "0");

  return `${anio}-${mes}-${dia}-${hora}`;
}

function revisarHoraColeccionable() {
  if (notasObtenidas.length >= coleccionables.length) {
    return;
  }

  const ahora = new Date();

  const hora = ahora.getHours();

  if (hora % 2 !== 0) {
    return;
  }

  const clave = claveHoraActual(ahora);

  if (horasReclamadas.includes(clave)) {
    return;
  }

  const siguiente = coleccionables[notasObtenidas.length];

  horasReclamadas.push(clave);

  notasObtenidas.push(siguiente.id);

  guardarJSON(CLAVES.horas, horasReclamadas);

  guardarJSON(CLAVES.coleccionables, notasObtenidas);

  actualizarProgreso();

  comprobarFlorSecreta();

  mostrarColeccionable(siguiente, ahora);
}

function mostrarColeccionable(item, fecha) {
  const hora = `${String(fecha.getHours()).padStart(2, "0")}:00`;

  contenidoModal.innerHTML = `
        <div class="nuevo-coleccionable">

            <p class="hora-especial">
                ${hora}
            </p>

            <p class="modal-etiqueta">
                ENCONTRASTE ALGO NUEVO
            </p>

            <h2>
                ${item.titulo}
            </h2>

            <div class="nota-encontrada">

                <p>
                    ${item.nota}
                </p>

                <span>
                    Fragmento encontrado:
                </span>

                <strong>
                    “${item.fragmento}”
                </strong>

            </div>

            <p class="texto-secundario-modal">
                La nota ya fue agregada
                a tus coleccionables.
            </p>

            <button
                class="boton-modal-principal"
                id="cerrar-coleccionable"
                type="button"
            >
                Continuar
            </button>

        </div>
    `;

  cerrarModalBoton.style.display = "none";

  capaModal.classList.add("mostrar");

  document
    .getElementById("cerrar-coleccionable")
    .addEventListener("click", () => {
      cerrarModal();

      cerrarModalBoton.style.display = "";
    });
}

/* =====================================================
   FLORES
===================================================== */

const floresDelJardin = [
  {
    tipo: "girasol",
    titulo: "Girasol 🌻",

    mensaje: "Esta es la primera flor de este pequeño jardín.",

    carta:
      "Todo jardín necesita un comienzo. Este girasol fue el primero y por eso siempre tendrá algo distinto: fue la primera pequeña idea que terminó convirtiéndose en todo lo demás.",

    secretoCarta:
      "Las primeras cosas suelen tener un lugar que ninguna otra puede ocupar.",

    microMensaje: "Esta fue la primera.",
  },

  {
    tipo: "tulipan",
    titulo: "Tulipán morado 💜",

    mensaje:
      "Quise dejarte este tulipán morado como un detalle lindo, suave y especial para ti.",

    carta:
      "Este tulipán empezó como un detalle sencillo. Tal vez por eso me gusta: no necesita llamar demasiado la atención para tener un lugar especial dentro del jardín.",

    secretoCarta:
      "Hay detalles que empiezan pequeños y terminan significando bastante.",

    microMensaje: "Los pétalos también guardan cosas.",

    linkCancion: "https://www.youtube.com/watch?v=3AsvjEGlwyY",

    textoBoton: "♪ Escuchar canción",
  },

  {
    tipo: "lirio",
    titulo: "Lirio blanco 🤍",

    mensaje:
      "Te dejo este lirio blanco como un detalle lleno de calma, ternura y luz, para recordarte lo bonita que eres.",

    carta:
      "El lirio tiene algo tranquilo. Tal vez por eso terminó aquí: para representar esos momentos en los que basta con que algo bonito esté presente para cambiar un poco el ambiente.",

    secretoCarta: "A veces la calma también puede venir de una persona.",

    microMensaje: "Mira el centro.",

    linkCancion:
      "https://www.youtube.com/watch?v=-XZud3y0aLI&list=RDF193VAMdcBg&index=6",

    textoBoton: "♪ Escuchar canción",
  },

  {
    tipo: "nube",
    titulo: "Flor de nube 🤍",

    mensaje:
      "Hay detalles pequeños que, sin hacer mucho ruido, terminan significando más de lo que parecen. Esta flor de nube es uno de ellos: algo sencillo, bonito y especial que quise dejar aquí para ti. Tal vez algunas cosas no necesitan explicarse demasiado para entenderse. 🤍",

    carta:
      "La flor de nube está hecha de muchas cosas pequeñas que juntas terminan formando algo mucho más bonito. Me pareció una buena forma de esconder una idea sin escribirla directamente.",

    secretoCarta: "Quizá este jardín también se ha ido formando así.",

    microMensaje: "Una sola flor no hace toda la nube.",

    linkCancion: "https://youtu.be/k3Uz-UI2IgY?is=kEqXKDfnneC-rH2Z",

    textoBoton: "♪ Tú y yo y tú",
  },

  {
    tipo: "peonia",
    titulo: "Peonía rosa 🌸",

    mensaje:
      "Hay cosas que se vuelven especiales sin necesidad de buscarles demasiadas explicaciones. A veces basta con mirar un poco más de cerca para darse cuenta de que los motivos siempre estuvieron ahí. 🌸",

    carta:
      "La peonía parece complicada cuando uno mira todos sus pétalos, aunque en realidad cada uno simplemente ocupa su lugar. Algunas cosas se entienden mejor de esa manera.",

    secretoCarta: "Tal vez por eso sobraban motivos.",

    microMensaje: "Tiene más capas de las que parece.",

    linkCancion: "https://youtu.be/6wgTJm5ns7A?si=3Es4iR3dYLfdKBXN",

    textoBoton: "♪ Me sobran motivos",
  },

  {
    tipo: "camelia",
    titulo: "Camelia roja ❤️",

    mensaje:
      "Algunas flores llaman la atención sin intentarlo. Tal vez sea el color, la forma o simplemente la manera en que terminan destacando entre todas las demás. ❤️",

    carta:
      "No escogí la camelia porque necesitara destacar. La escogí precisamente porque lo hace sin intentarlo. Algunas cosas simplemente terminan llamando nuestra atención de esa forma.",

    secretoCarta:
      "Supongo que el título de la canción tampoco quedó ahí por accidente.",

    microMensaje: "Entre todas, alguna termina destacando.",

    linkCancion: "https://www.youtube.com/watch?v=yhuop3GEf-4",

    textoBoton: "♪ NADIE MÁS!",
  },

  {
    tipo: "jazmin",
    titulo: "Jazmín blanco 🤍",

    mensaje:
      "Hay flores cuyo aroma parece quedarse incluso cuando ya no están cerca. Tal vez algunas presencias funcionan de la misma manera. 🤍",

    carta:
      "El jazmín tiene esa extraña capacidad de seguir presente incluso cuando uno ya no lo está mirando. Esta flor quedó aquí por algo bastante parecido.",

    secretoCarta:
      "Algunas personas también consiguen quedarse un rato en la cabeza.",

    microMensaje: "Todavía queda un poco de su aroma.",

    linkCancion: "https://www.youtube.com/watch?v=PSjeJrDI4a4",

    textoBoton: "♪ Cómo dormiste",
  },

  {
    tipo: "orquidea",
    titulo: "Orquídea rosa 🌺",

    mensaje:
      "Hay dedicatorias que se hacen por bonito detalle, y otras que nacen porque alguien realmente inspira algo especial. Esta canción es de esas que no elegí al azar.",

    carta:
      "Esta orquídea sí ocupa un lugar un poco diferente. Desde antes de agregarla ya sabía que su canción tenía que funcionar como una dedicatoria especial. Así que no, esta no apareció aquí por casualidad.",

    secretoCarta: "Te dije que esta dedicatoria iba a ser diferente.",

    microMensaje: "Esta sabe exactamente por qué está aquí.",

    linkCancion: "https://www.youtube.com/watch?v=4O1CNtVG7s8",

    textoBoton: "♪ AMOR DE CINE",
  },

  {
    tipo: "lavanda",
    titulo: "Lavanda violeta 💜",

    mensaje:
      "Hay aromas que uno reconoce incluso antes de darse cuenta de dónde vienen. Supongo que algunas cosas se quedan en la memoria de una forma parecida.",

    carta:
      "Hay recuerdos que funcionan como ciertos aromas: aparecen sin que uno los llame y de repente están ahí. La lavanda quedó como una pequeña forma de representar eso.",

    secretoCarta: "Tal vez hay cosas que uno todavía no ha dicho.",

    microMensaje: "Algo se quedó por aquí.",

    linkCancion: "https://www.youtube.com/watch?v=2vo_BzD9gu0",

    textoBoton: "♪ Te diré",
  },

  {
    tipo: "anemona",
    titulo: "Anémona blanca 🤍",

    mensaje:
      "Supongo que hay cosas que uno termina admitiendo poco a poco, incluso cuando al principio intenta hacer como si no pasara nada.",

    carta:
      "La anémona parece sencilla desde lejos, pero su centro cambia por completo cuando uno se acerca. Supongo que algunas confesiones funcionan parecido: primero parecen pequeñas y luego uno descubre todo lo que había detrás.",

    secretoCarta: "Supongo que el título ya decía suficiente.",

    microMensaje: "Quizá aquí había algo que confesar.",

    linkCancion: "https://www.youtube.com/watch?v=4Ja6WLrZlAE",

    textoBoton: "♪ Confieso",
  },

  {
    tipo: "magnolia",
    titulo: "Magnolia rosa 🌷",

    mensaje:
      "Hay personas que desde el primer momento dejan algo difícil de explicar. A veces uno tarda en entender qué fue, pero no en notar que algo cambió.",

    carta:
      "Elegí una magnolia porque hay algo especial en la forma en que abre sus pétalos: no necesita demasiados para hacerse notar. Algunas primeras impresiones funcionan parecido; uno quizá todavía no entiende qué ocurrió, pero sabe que hubo algo distinto desde el comienzo.",

    secretoCarta:
      "Algunas primeras impresiones duran bastante más de lo esperado.",

    microMensaje: "Algunas cosas comienzan antes de que uno las entienda.",

    linkCancion: "https://www.youtube.com/watch?v=0hoI8IHfse0",

    textoBoton: "♪ Amor a Primera",
  },
];

/* =====================================================
   FLOR SECRETA
===================================================== */

const florSecreta = {
  tipo: "dalia",

  titulo: "Dalia nocturna",

  mensaje:
    "Algunas flores tardan un poco más en aparecer. No porque no estuvieran ahí, sino porque necesitaban su momento.",

  carta:
    "Esta flor estuvo escondida desde que comenzó el jardín. No hacía falta encontrar un botón secreto ni saber una combinación. Solo hacía falta volver suficientes veces para que tuviera sentido aparecer.",

  secretoCarta:
    "Si encontraste esta flor, ya sabes que todavía quedan más cosas escondidas.",

  microMensaje: "No siempre estuvo visible.",
};

/* =====================================================
   CREAR TARJETA
===================================================== */

const contadorClicksFlor = {};

function crearTarjetaFlor(config, esSecreta = false) {
  const tarjeta = document.createElement("article");

  tarjeta.className = `tarjeta-flor tarjeta-${config.tipo}`;

  if (esSecreta) {
    tarjeta.classList.add("tarjeta-flor-secreta");
  }

  const titulo = document.createElement("h2");

  titulo.className = "titulo-flor";

  titulo.textContent = config.titulo;

  const envoltura = document.createElement("div");

  envoltura.className = "envoltura-flor flor-interactiva";

  envoltura.tabIndex = 0;

  if (Flores[config.tipo]) {
    envoltura.appendChild(Flores[config.tipo]());
  }

  function interactuar() {
    envoltura.classList.remove("reaccion-activa");

    void envoltura.offsetWidth;

    envoltura.classList.add("reaccion-activa");

    setTimeout(() => {
      envoltura.classList.remove("reaccion-activa");
    }, 900);

    contadorClicksFlor[config.tipo] =
      (contadorClicksFlor[config.tipo] || 0) + 1;

    if (contadorClicksFlor[config.tipo] === 3) {
      mostrarToast(config.microMensaje);
    }

    setTimeout(() => {
      abrirCarta(config);
    }, 180);
  }

  envoltura.addEventListener("click", interactuar);

  envoltura.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();

      interactuar();
    }
  });

  const pista = document.createElement("p");

  pista.className = "pista-carta";

  pista.textContent = "Toca la flor";

  const nota = document.createElement("div");

  nota.className = "nota-flor";

  const textoNota = document.createElement("p");

  textoNota.textContent = config.mensaje;

  nota.appendChild(textoNota);

  if (config.linkCancion) {
    const boton = document.createElement("a");

    boton.className = "boton-cancion";

    boton.href = config.linkCancion;

    boton.target = "_blank";

    boton.rel = "noopener noreferrer";

    boton.textContent = config.textoBoton;

    nota.appendChild(boton);
  }

  tarjeta.appendChild(titulo);

  tarjeta.appendChild(envoltura);

  tarjeta.appendChild(pista);

  tarjeta.appendChild(nota);

  return tarjeta;
}

/* =====================================================
   RENDER FLORES
===================================================== */

floresDelJardin.forEach((config) => {
  contenedorFlores.appendChild(crearTarjetaFlor(config));
});

/* =====================================================
   FLOR SECRETA
===================================================== */

let florSecretaMostrada = false;

function comprobarFlorSecreta() {
  if (notasObtenidas.length < 10 || florSecretaMostrada) {
    return;
  }

  florSecretaMostrada = true;

  const tarjeta = crearTarjetaFlor(florSecreta, true);

  contenedorFlores.appendChild(tarjeta);

  setTimeout(() => {
    tarjeta.classList.add("revelada");
  }, 100);

  mostrarToast("Algo cambió entre las flores...");

  actualizarProgreso();
}

/* =====================================================
   MODO DE FONDO
===================================================== */

const panelSuperior = crearPanelSuperior();

jardin.insertBefore(panelSuperior, contenedorFlores);

jardin.insertBefore(panelProgreso, contenedorFlores);

const botonFondo = document.getElementById("boton-fondo");

let temporizadorNoche;
let pulsacionLarga = false;

function actualizarTextoFondo() {
  if (document.body.classList.contains("modo-noche")) {
    botonFondo.textContent = "Volver al jardín";

    return;
  }

  if (document.body.classList.contains("tema-morado")) {
    botonFondo.textContent = "Cambiar a fondo amarillo";
  } else {
    botonFondo.textContent = "Cambiar a fondo morado";
  }
}

function activarModoNoche() {
  pulsacionLarga = true;

  const activado = document.body.classList.toggle("modo-noche");

  localStorage.setItem(CLAVES.noche, "si");

  actualizarTextoFondo();

  mostrarToast(
    activado
      ? "Encontraste otra forma de ver el jardín."
      : "Volviste al jardín.",
  );

  setTimeout(() => {
    pulsacionLarga = false;
  }, 500);
}

botonFondo.addEventListener("pointerdown", () => {
  temporizadorNoche = setTimeout(activarModoNoche, 2800);
});

["pointerup", "pointerleave", "pointercancel"].forEach((evento) => {
  botonFondo.addEventListener(evento, () => {
    clearTimeout(temporizadorNoche);
  });
});

botonFondo.addEventListener("click", () => {
  if (pulsacionLarga) {
    return;
  }

  if (document.body.classList.contains("modo-noche")) {
    document.body.classList.remove("modo-noche");

    actualizarTextoFondo();

    return;
  }

  document.body.classList.toggle("tema-morado");

  actualizarTextoFondo();
});

/* =====================================================
   MENSAJE FINAL
===================================================== */

const finalJardin = document.createElement("section");

finalJardin.className = "final-jardin";

finalJardin.innerHTML = `
    <p class="final-pequeno">
        LLEGASTE AL FINAL DEL JARDÍN
    </p>

    <h2>
        Por ahora.
    </h2>

    <p>
        Algunas flores todavía pueden no haber aparecido,
        algunas notas necesitan su hora y probablemente
        quede algo que todavía no has tocado.
    </p>

    <span>
        Vuelve de vez en cuando.
    </span>
`;

jardin.appendChild(finalJardin);

/* =====================================================
   INICIAR
===================================================== */

actualizarProgreso();

comprobarFlorSecreta();

mostrarAvisoInicial();

setInterval(revisarHoraColeccionable, 30000);
