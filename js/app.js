const contenedorFlores = document.getElementById("contenedor-flores");

const jardin =
  document.querySelector(".jardin") || contenedorFlores.parentElement;

/* =====================================================
   CLAVES DE LOCALSTORAGE

   NO CAMBIAR LAS CLAVES V3.
===================================================== */

const CLAVES = {
  aviso: "jardin_no_mostrar_aviso_v3",

  notas: "jardin_notas_v3",

  horasNotas: "jardin_horas_notas_v3",

  despedidas: "jardin_despedidas_v3",

  diasDespedidas: "jardin_dias_despedidas_v3",

  visitasJardin: "jardin_visitas_v3",

  visitasFlores: "jardin_visitas_flores_v3",

  favorita: "jardin_flor_favorita_v3",

  nocheDescubierta: "jardin_noche_descubierta_v3",

  nota1111: "jardin_1111_v3",

  /* CLAVES NUEVAS */

  toquesSecreto: "jardin_toques_secreto_v1",

  secretoDesbloqueado: "jardin_secreto_desbloqueado_v1",

  secretosVistos: "jardin_canciones_secretas_vistas_v1",

  mariposasAplastadas: "jardin_mariposas_aplastadas_v1",

  respaldo: "jardin_respaldo_progreso_v1",
};

/* =====================================================
   ALMACENAMIENTO
===================================================== */

function leerJSON(clave, valorInicial) {
  try {
    const valor = localStorage.getItem(clave);

    return valor ? JSON.parse(valor) : valorInicial;
  } catch (error) {
    return valorInicial;
  }
}

function guardarJSON(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

/* =====================================================
   RESPALDO
===================================================== */

function crearRespaldoProgreso() {
  const respaldo = {
    notas: leerJSON(CLAVES.notas, []),

    horasNotas: leerJSON(CLAVES.horasNotas, []),

    despedidas: leerJSON(CLAVES.despedidas, []),

    diasDespedidas: leerJSON(CLAVES.diasDespedidas, []),

    visitasJardin: localStorage.getItem(CLAVES.visitasJardin),

    visitasFlores: leerJSON(CLAVES.visitasFlores, {}),

    favorita: localStorage.getItem(CLAVES.favorita),

    nocheDescubierta: localStorage.getItem(CLAVES.nocheDescubierta),

    nota1111: leerJSON(CLAVES.nota1111, []),

    toquesSecreto: localStorage.getItem(CLAVES.toquesSecreto),

    secretoDesbloqueado: localStorage.getItem(CLAVES.secretoDesbloqueado),

    secretosVistos: leerJSON(CLAVES.secretosVistos, []),

    mariposasAplastadas: localStorage.getItem(CLAVES.mariposasAplastadas),
  };

  localStorage.setItem(CLAVES.respaldo, JSON.stringify(respaldo));
}

/* =====================================================
   YOUTUBE
===================================================== */

function crearEnlaceYouTube(busqueda) {
  return (
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(busqueda)
  );
}

/* =====================================================
   VISITAS
===================================================== */

let visitasJardin = Number(localStorage.getItem(CLAVES.visitasJardin) || 0);

visitasJardin++;

localStorage.setItem(CLAVES.visitasJardin, visitasJardin);

let visitasFlores = leerJSON(CLAVES.visitasFlores, {});

let florFavorita = localStorage.getItem(CLAVES.favorita) || "";

/* =====================================================
   20 COLECCIONABLES

   NO CAMBIAR ID 1 - 20.
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
    nota: "Incluso las palabras pequeñas pueden unir cosas mucho más grandes.",
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
    nota: "Algunas historias no se entienden desde el primer capítulo.",
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
    nota: "Algunas cosas cobran sentido dependiendo de quién las mira.",
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
    nota: "Quizá ahí esté lo interesante de algunas coincidencias.",
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

let notasObtenidas = leerJSON(CLAVES.notas, []);

let horasNotas = leerJSON(CLAVES.horasNotas, []);

/* =====================================================
   20 DESPEDIDAS
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

  "Veinte despedidas después y, curiosamente, esto todavía no se siente como un final.",
];

let despedidasObtenidas = leerJSON(CLAVES.despedidas, []);

let diasDespedidas = leerJSON(CLAVES.diasDespedidas, []);

/* =====================================================
   FECHAS
===================================================== */

function claveDia(fecha = new Date()) {
  const anio = fecha.getFullYear();

  const mes = String(fecha.getMonth() + 1).padStart(2, "0");

  const dia = String(fecha.getDate()).padStart(2, "0");

  return `${anio}-${mes}-${dia}`;
}

function claveHora(fecha = new Date()) {
  const hora = String(fecha.getHours()).padStart(2, "0");

  return `${claveDia(fecha)}-${hora}`;
}

/* =====================================================
   DESPEDIDA DIARIA
===================================================== */

function registrarDespedidaDelDia() {
  const hoy = claveDia();

  if (diasDespedidas.includes(hoy)) {
    return;
  }

  if (despedidasObtenidas.length >= despedidas.length) {
    return;
  }

  const siguiente = despedidasObtenidas.length + 1;

  despedidasObtenidas.push(siguiente);

  diasDespedidas.push(hoy);

  guardarJSON(CLAVES.despedidas, despedidasObtenidas);

  guardarJSON(CLAVES.diasDespedidas, diasDespedidas);

  crearRespaldoProgreso();
}

registrarDespedidaDelDia();

/* =====================================================
   MODAL
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

        <div
            class="contenido-modal"
        ></div>

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
  }, 3200);
}

/* =====================================================
   AVISO INICIAL
===================================================== */

function mostrarAvisoInicial() {
  const ocultar = localStorage.getItem(CLAVES.aviso);

  if (ocultar === "si") {
    revisarHoraColeccionable();

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
                Entre las flores existen
                <strong>
                    20 notas ocultas
                </strong>
                que pueden aparecer durante
                las horas pares.
            </p>

            <p>
                También existen
                <strong>
                    20 despedidas diferentes
                </strong>.
                Solo puede descubrirse una nueva
                por día.
            </p>

            <p>
                Algunas flores recuerdan tus visitas
                y otras esconden cosas que no aparecen
                a simple vista.
            </p>

            <p class="aviso-pista">
                No todo está señalado.
            </p>

            <div class="acciones-aviso">

                <button
                    id="aceptar-aviso"
                    class="boton-modal-principal"
                    type="button"
                >
                    Entrar al jardín
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
   FLORES
===================================================== */

const floresDelJardin = [
  {
    tipo: "girasol",

    titulo: "Girasol 🌻",

    mensaje: "Esta es la primera flor de este pequeño jardín.",

    carta:
      "Todo jardín necesita un comienzo. Este girasol fue el primero y por eso siempre tendrá algo distinto: fue una pequeña idea que terminó convirtiéndose en todo lo demás.",

    secretoCarta:
      "Las primeras cosas suelen guardar un lugar que ninguna otra puede ocupar.",

    microMensaje: "Esta fue la primera.",

    linkCancion:
      "https://open.spotify.com/playlist/1ogLdpmc1bbYjMQCOBoVfx?si=dfa95b5cf50747a0",

    textoBoton: "Abrir playlist en Spotify",

    claseBoton: "boton-playlist-secreta",

    tipoAccion: "playlist-secreta",
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

    microMensaje: "Mira un poco más de cerca.",

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

    microMensaje: "Una sola florecita no hace toda la nube.",

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
      "No escogí la camelia porque necesitara destacar. La escogí precisamente porque lo hace sin intentarlo.",

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
      "El jazmín tiene esa extraña capacidad de seguir presente incluso cuando uno ya no lo está mirando.",

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
      "Esta orquídea ocupa un lugar un poco diferente. Desde antes de agregarla ya sabía que su canción tenía que funcionar como una dedicatoria especial.",

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
      "Hay recuerdos que funcionan como ciertos aromas: aparecen sin que uno los llame y de repente están ahí.",

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
      "La anémona parece sencilla desde lejos, pero su centro cambia por completo cuando uno se acerca.",

    secretoCarta: "Supongo que el título ya decía suficiente.",

    microMensaje: "Quizá aquí había algo que confesar.",

    linkCancion: "https://www.youtube.com/watch?v=4Ja6WLrZlAE",

    textoBoton: "♪ Confieso",
  },

  {
    tipo: "magnolia",

    titulo: "Magnolia rosa 🌸",

    mensaje:
      "Hay personas que desde el primer momento dejan algo difícil de explicar. A veces uno tarda en entender qué fue, pero no en notar que algo cambió.",

    carta:
      "Elegí una magnolia porque hay algo especial en la forma en que abre sus pétalos: no necesita demasiados para hacerse notar.",

    secretoCarta:
      "Algunas primeras impresiones duran bastante más de lo esperado.",

    microMensaje: "Algunas cosas comienzan antes de que uno las entienda.",

    linkCancion: "https://www.youtube.com/watch?v=PKZFG4BTQL4",

    textoBoton: "♪ Amor a Primera",
  },

  {
    tipo: "nomeolvides",

    titulo: "No me olvides 💙",

    mensaje:
      "Este es mi artista favorito y esta canción es un pedacito de mí para ti.",

    carta:
      "Hay canciones que uno simplemente escucha y otras que se sienten un poco más propias. Esta viene de mi artista favorito, así que dejarla aquí se siente como compartir contigo una parte pequeña de algo que significa mucho para mí.",

    secretoCarta:
      "Compartir una canción favorita también puede ser una forma de compartir un poquito de uno mismo.",

    microMensaje: "Esta lleva algo un poco más personal.",

    linkCancion: "https://www.youtube.com/watch?v=J5RyC2nW0Oo",

    textoBoton: "♪ Si supieras",
  },

  {
    tipo: "clavel",

    titulo: "Clavel rojo ❤️",

    mensaje:
      "Hay canciones que dicen demasiado por uno. Esta vez preferí dejar que la música hablara y que esta flor simplemente la acompañara.",

    carta:
      "Elegí un clavel porque tiene una forma distinta de llamar la atención. Sus pétalos parecen desordenados, pero juntos terminan teniendo sentido. La canción que lo acompaña tampoco necesita demasiada explicación.",

    secretoCarta:
      "Esta vez la canción probablemente diga más de lo que yo iba a escribir aquí.",

    microMensaje: "Esta flor llegó con algo bastante difícil de esconder.",

    busquedaCancion: "Te Amo y Más El Libro de la Vida",

    textoBoton: "♪ Te Amo y Más",
  },
];

/* =====================================================
   DALIA
===================================================== */

const florSecreta = {
  tipo: "dalia",

  titulo: "Dalia nocturna",

  mensaje:
    "Algunas flores tardan un poco más en aparecer. No porque no estuvieran ahí, sino porque necesitaban su momento.",

  carta:
    "Esta flor estuvo escondida desde que comenzó el jardín. Solo hacía falta regresar suficientes veces para que tuviera sentido aparecer.",

  secretoCarta:
    "Si encontraste esta flor, ya sabes que todavía quedan cosas escondidas.",

  microMensaje: "No siempre estuvo visible.",
};

/* =====================================================
   CANCIONES SECRETAS POR FLOR
===================================================== */

const cancionesSecretas = [
  {
    tipo: "tulipan",

    flor: "Tulipán morado 💜",

    cancion: "Te quiero tanto",

    artista: "Kevin Kaarl",

    nota: "Aunque no te he besado, ya me clavé.",

    postdata: "Esta sí estaba escondida a propósito.",

    busqueda: "Te quiero tanto Kevin Kaarl",
  },

  {
    tipo: "lirio",

    flor: "Lirio blanco 🤍",

    cancion: "Te lo prometo",

    artista: "HUMBE",

    nota: "Hay promesas que suenan mejor cuando todavía no necesitan explicarse.",

    postdata: "Tal vez esta canción explique un poquito más.",

    busqueda: "Te lo prometo HUMBE",
  },

  {
    tipo: "nube",

    flor: "Flor de nube 🤍",

    cancion: "Morfina",

    artista: "HUMBE",

    nota: "Hay canciones que consiguen quedarse flotando bastante más de lo esperado.",

    postdata: "Algunas cosas se quedan aunque nadie se los pida.",

    busqueda: "Morfina HUMBE",
  },

  {
    tipo: "peonia",

    flor: "Peonía rosa 🌸",

    cancion: "Aquí hay para llevar",

    artista: "La Arrolladora Banda El Limón",

    nota: "Por si algún día alguien pregunta si aquí había de sobra.",

    postdata: "Esta parte ya estaba poniéndose menos discreta.",

    busqueda: "Aquí hay para llevar La Arrolladora Banda El Limón",
  },

  {
    tipo: "camelia",

    flor: "Camelia roja ❤️",

    cancion: "309",

    artista: "NSQK",

    nota: "Hay números que no significan nada hasta que una canción decide convertirlos en otra cosa.",

    postdata: "Supongo que algunas canciones encuentran solas dónde quedarse.",

    busqueda: "309 NSQK",
  },

  {
    tipo: "jazmin",

    flor: "Jazmín blanco 🤍",

    cancion: "Enculado",

    artista: "NSQK y Yakun",

    nota: "Esta mejor se queda en la parte secreta por razones bastante obvias.",

    postdata: "Sí... por eso hubo que tocar tres veces.",

    busqueda: "Enculado NSQK Yakun",
  },

  {
    tipo: "orquidea",

    flor: "Orquídea rosa 🌺",

    cancion: "Viento",

    artista: "Caifanes",

    nota: "Hay cosas que no se ven, pero de todas formas terminan moviéndolo todo.",

    postdata: "Quizá algunas presencias funcionan un poco así.",

    busqueda: "Viento Caifanes",
  },

  {
    tipo: "lavanda",

    flor: "Lavanda violeta 💜",

    cancion: "Flores",

    artista: "LATIN MAFIA",

    nota: "Era imposible hacer todo un jardín y no terminar escondiendo esta canción en algún lugar.",

    postdata: "Tenía que estar aquí.",

    busqueda: "Flores LATIN MAFIA",
  },

  {
    tipo: "anemona",

    flor: "Anémona blanca 🤍",

    cancion: "Ropa de bazar",

    artista: "Ed Maverick",

    nota: "Hay cosas que parecen comunes hasta que alguien termina dándoles otro significado.",

    postdata: "Algunas cosas cambian dependiendo de quién las mire.",

    busqueda: "Ropa de bazar Ed Maverick",
  },

  {
    tipo: "magnolia",

    flor: "Magnolia rosa 🌸",

    cancion: "Paraíso Lunar",

    artista: "Siddhartha",

    nota: "Hay lugares a los que uno llega solamente por unos minutos y aun así quisiera quedarse.",

    postdata: "Esta canción sí ocupa un lugar especial.",

    busqueda: "Paraíso Lunar Siddhartha",
  },

  {
    tipo: "nomeolvides",

    flor: "No me olvides 💙",

    cancion: "Paraíso Lunar",

    artista: "Siddhartha",

    nota: "Tal vez por eso esta canción terminó encontrando más de un lugar dentro del jardín.",

    postdata: "Hay canciones que simplemente merecen repetirse.",

    busqueda: "Paraíso Lunar Siddhartha",
  },

  {
    tipo: "clavel",

    flor: "Clavel rojo ❤️",

    cancion: "Me Hace Falta",

    artista: "Siddhartha",

    nota: "A veces se puede notar que algo haría falta incluso antes de que realmente se vaya.",

    postdata: "Esta canción tampoco llegó aquí por accidente.",

    busqueda: "Me Hace Falta Siddhartha",
  },
];

let secretosVistos = leerJSON(CLAVES.secretosVistos, []);

let secretoDesbloqueado =
  localStorage.getItem(CLAVES.secretoDesbloqueado) === "si";

/* =====================================================
   CARTA NORMAL
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
                            aria-label="Ver algo más"
                        >
                            •••
                        </button>

                        <div
                            class="postdata-carta"
                            id="postdata-carta"
                        >
                            <span>
                                P.D.
                            </span>

                            <p>
                                ${config.secretoCarta}
                            </p>
                        </div>
                        `
                    : ""
                }

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");

  const boton = document.getElementById("abrir-postdata");

  if (boton) {
    boton.addEventListener("click", () => {
      document.getElementById("postdata-carta").classList.toggle("mostrar");
    });
  }
}

/* =====================================================
   POPUP DE CANCIÓN SECRETA

   APARECE AL TOCAR 3 VECES LA FLOR.
===================================================== */

function abrirCancionSecreta(tipo) {
  const secreto = cancionesSecretas.find((item) => item.tipo === tipo);

  if (!secreto) {
    return;
  }

  if (!secretosVistos.includes(secreto.tipo)) {
    secretosVistos.push(secreto.tipo);

    guardarJSON(CLAVES.secretosVistos, secretosVistos);

    crearRespaldoProgreso();
  }

  revelarApartadoSecreto(false);

  actualizarPanelSecreto();

  contenidoModal.innerHTML = `
        <div class="carta-flor carta-secreta">

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
                        href="${crearEnlaceYouTube(secreto.busqueda)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="boton-cancion-secreta-modal"
                    >
                        Escuchar canción
                    </a>

                </div>


                <button
                    class="marca-secreta"
                    id="abrir-postdata-secreta"
                    type="button"
                    aria-label="Ver algo más"
                >
                    •••
                </button>


                <div
                    class="postdata-carta"
                    id="postdata-carta-secreta"
                >

                    <span>
                        P.D.
                    </span>

                    <p>
                        ${secreto.postdata}
                    </p>

                </div>

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");

  document
    .getElementById("abrir-postdata-secreta")
    .addEventListener("click", () => {
      document
        .getElementById("postdata-carta-secreta")
        .classList.toggle("mostrar");
    });
}

/* =====================================================
   PLAYLIST SECRETA DEL GIRASOL

   TAMBIÉN NECESITA 3 CLICS.
===================================================== */

function abrirPlaylistSecretaGirasol(enlace) {
  secretoDesbloqueado = true;

  localStorage.setItem(CLAVES.secretoDesbloqueado, "si");

  crearRespaldoProgreso();

  seccionSecreto.classList.add("desbloqueado");

  contenidoModal.innerHTML = `
        <div class="carta-flor carta-playlist-secreta">

            <p class="modal-etiqueta">
                UNA PEQUEÑA CARTA
            </p>

            <h2>
                Girasol 🌻
            </h2>

            <div class="papel-carta">

                <p>
                    La primera flor también guardaba algo.
                    Esta vez no era otra canción,
                    sino un lugar donde quedaron reunidas
                    algunas de las que han ido apareciendo
                    por aquí.
                </p>


                <div class="cancion-escondida playlist-escondida">

                    <span>
                        PLAYLIST ESCONDIDA
                    </span>

                    <strong>
                        Otra parte del jardín
                    </strong>

                    <a
                        href="${enlace}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="boton-spotify-secreto"
                    >
                        Abrir en Spotify
                    </a>

                </div>


                <button
                    class="marca-secreta"
                    id="abrir-postdata-playlist"
                    type="button"
                    aria-label="Ver algo más"
                >
                    •••
                </button>


                <div
                    class="postdata-carta"
                    id="postdata-playlist"
                >

                    <span>
                        P.D.
                    </span>

                    <p>
                        La primera flor tenía que esconder algo diferente.
                    </p>

                </div>

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");

  document
    .getElementById("abrir-postdata-playlist")
    .addEventListener("click", () => {
      document.getElementById("postdata-playlist").classList.toggle("mostrar");
    });
}

/* =====================================================
   INTRO
===================================================== */

function crearIntroJardin() {
  const intro = document.createElement("section");

  intro.className = "intro-jardin";

  let mensajeVisita = "No todo aparece durante la primera visita.";

  if (visitasJardin >= 3) {
    mensajeVisita = "Parece que este jardín ya reconoce esta visita.";
  }

  if (visitasJardin >= 7) {
    mensajeVisita = "A estas alturas, algunas flores ya saben que volverás.";
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
            una pequeña nota y, de vez en cuando,
            algo que no aparece a simple vista.
        </p>

        <div class="intro-badges">

            <span class="intro-badge">
                ${floresDelJardin.length} flores
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
            ${mensajeVisita}
        </p>
    `;

  return intro;
}

/* =====================================================
   PANEL SUPERIOR
===================================================== */

function crearPanelSuperior() {
  const panel = document.createElement("section");

  panel.className = "panel-superior";

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
                class="boton-playlist"
                id="boton-playlist-principal"
                type="button"
            >
                Abrir playlist en Spotify
            </button>

            <button
                class="boton-fondo"
                id="boton-fondo"
                type="button"
            >
                Cambiar a fondo morado
            </button>

        </div>
    `;

  panel
    .querySelector("#boton-playlist-principal")
    .addEventListener("click", () => {
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
                                Las canciones que acompañan
                                este pequeño jardín están
                                reunidas aquí.
                            </p>

                            <a
                                href="https://open.spotify.com/playlist/6XCeXM270zHmOE1vY9MeXA?si=wHKqXyp-SyKISRnlus0oMQ&utm_source=whatsapp&pi=wjAzlEK-QASgo"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="boton-spotify-secreto"
                            >
                                Abrir en Spotify
                            </a>

                        </div>

                    </div>
                `;

      cerrarModalBoton.style.display = "";

      capaModal.classList.add("mostrar");
    });

  return panel;
}

/* =====================================================
   PROGRESO
===================================================== */

const panelProgreso = document.createElement("section");

panelProgreso.className = "panel-progreso";

function crearHTMLFrase() {
  return coleccionables
    .map((item) => {
      const encontrada = notasObtenidas.includes(item.id);

      return `
                    <span
                        class="
                            fragmento-frase
                            ${encontrada ? "descubierto" : "oculto"}
                        "
                    >
                        ${encontrada ? item.fragmento : "•••"}
                    </span>
                `;
    })
    .join("");
}

function actualizarProgreso() {
  const notas = notasObtenidas.length;

  const salidas = despedidasObtenidas.length;

  const secreta = notas >= 10;

  const numeroFlores = floresDelJardin.length + (secreta ? 1 : 0);

  const porcentaje = Math.min(100, ((notas + salidas) / 40) * 100);

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
                    ${notas + salidas}
                </strong>

                <span>
                    /40
                </span>

            </div>

        </div>

        <div class="barra-progreso">

            <span
                style="
                    width:
                    ${porcentaje}%
                "
            ></span>

        </div>

        <div class="datos-progreso">

            <span>
                ${
                  secreta
                    ? `${numeroFlores} flores`
                    : `${numeroFlores}/? flores`
                }
            </span>

            <span>
                ${notas}/20 notas
            </span>

            <span>
                ${salidas}/20 despedidas
            </span>

        </div>

        <button
            class="abrir-coleccion"
            id="abrir-coleccion"
            type="button"
        >
            Ver coleccionables
        </button>

        <p
            class="favorita-actual"
            id="favorita-actual"
        ></p>

        <div class="mensaje-en-construccion">

            <p>
                MENSAJE EN CONSTRUCCIÓN
            </p>

            <div class="frase-fragmentos">
                ${crearHTMLFrase()}
            </div>

        </div>
    `;

  document
    .getElementById("abrir-coleccion")
    .addEventListener("click", abrirColeccion);

  actualizarTextoFavorita();
}

/* =====================================================
   FAVORITA
===================================================== */

function obtenerConfigFlor(tipo) {
  if (tipo === florSecreta.tipo) {
    return florSecreta;
  }

  return floresDelJardin.find((flor) => flor.tipo === tipo);
}

function actualizarTextoFavorita() {
  const elemento = document.getElementById("favorita-actual");

  if (!elemento) {
    return;
  }

  if (!florFavorita) {
    elemento.textContent = "Aún no has elegido una flor favorita.";

    return;
  }

  const config = obtenerConfigFlor(florFavorita);

  if (!config) {
    return;
  }

  elemento.textContent = `Flor favorita: ${config.titulo}`;
}

/* =====================================================
   COLECCIÓN
===================================================== */

function abrirColeccion() {
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
                    type="button"
                >
                    Notas ${notasObtenidas.length}/20
                </button>

                <button
                    class="tab-coleccion"
                    data-tab="despedidas"
                    type="button"
                >
                    Despedidas ${despedidasObtenidas.length}/20
                </button>

            </div>

            <div
                class="contenido-tab-coleccion"
                id="tab-notas"
            ></div>

            <div
                class="contenido-tab-coleccion oculto"
                id="tab-despedidas"
            ></div>

        </div>
    `;

  renderNotasColeccion();

  renderDespedidasColeccion();

  document.querySelectorAll(".tab-coleccion").forEach((boton) => {
    boton.addEventListener("click", () => {
      document.querySelectorAll(".tab-coleccion").forEach((otro) => {
        otro.classList.remove("activo");
      });

      boton.classList.add("activo");

      const tab = boton.dataset.tab;

      document
        .getElementById("tab-notas")
        .classList.toggle("oculto", tab !== "notas");

      document
        .getElementById("tab-despedidas")
        .classList.toggle("oculto", tab !== "despedidas");
    });
  });

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");
}

function renderNotasColeccion() {
  const contenedor = document.getElementById("tab-notas");

  contenedor.innerHTML = `
        <div class="frase-coleccion">

            <p>
                Lo que llevas descubierto:
            </p>

            <div class="frase-fragmentos">
                ${crearHTMLFrase()}
            </div>

        </div>

        <div class="rejilla-coleccion">

            ${coleccionables
              .map((item) => {
                const encontrada = notasObtenidas.includes(item.id);

                return `
                                <article
                                    class="
                                        coleccion-item
                                        ${
                                          encontrada
                                            ? "conseguido"
                                            : "bloqueado"
                                        }
                                    "
                                >

                                    <span
                                        class="numero-coleccion"
                                    >
                                        ${String(item.id).padStart(2, "0")}
                                    </span>

                                    ${
                                      encontrada
                                        ? `
                                            <p class="estado-coleccion">
                                                ENCONTRADA
                                            </p>

                                            <h4>
                                                ${item.titulo}
                                            </h4>

                                            <p>
                                                ${item.nota}
                                            </p>

                                            <small>
                                                “${item.fragmento}”
                                            </small>
                                            `
                                        : `
                                            <p class="estado-coleccion">
                                                BLOQUEADA
                                            </p>

                                            <h4>
                                                Nota desconocida
                                            </h4>

                                            <p>
                                                Todavía no ha llegado
                                                su momento.
                                            </p>
                                            `
                                    }

                                </article>
                            `;
              })
              .join("")}

        </div>
    `;
}

function renderDespedidasColeccion() {
  const contenedor = document.getElementById("tab-despedidas");

  contenedor.innerHTML = `
        <p class="descripcion-despedidas">
            Solo aparece una despedida nueva por día.
        </p>

        <div class="rejilla-coleccion">

            ${despedidas
              .map((texto, indice) => {
                const id = indice + 1;

                const encontrada = despedidasObtenidas.includes(id);

                return `
                                <article
                                    class="
                                        coleccion-item
                                        ${
                                          encontrada
                                            ? "conseguido"
                                            : "bloqueado"
                                        }
                                    "
                                >

                                    <span
                                        class="numero-coleccion"
                                    >
                                        ${String(id).padStart(2, "0")}
                                    </span>

                                    ${
                                      encontrada
                                        ? `
                                            <p class="estado-coleccion">
                                                GUARDADA
                                            </p>

                                            <h4>
                                                Despedida ${String(id).padStart(2, "0")}
                                            </h4>

                                            <p>
                                                ${texto}
                                            </p>
                                            `
                                        : `
                                            <p class="estado-coleccion">
                                                BLOQUEADA
                                            </p>

                                            <h4>
                                                Despedida desconocida
                                            </h4>

                                            <p>
                                                Vuelve otro día.
                                            </p>
                                            `
                                    }

                                </article>
                            `;
              })
              .join("")}

        </div>
    `;
}

/* =====================================================
   HORAS PARES
===================================================== */

function revisarHoraColeccionable() {
  if (notasObtenidas.length >= coleccionables.length) {
    return;
  }

  const ahora = new Date();

  const hora = ahora.getHours();

  if (hora % 2 !== 0) {
    return;
  }

  const clave = claveHora(ahora);

  if (horasNotas.includes(clave)) {
    return;
  }

  const siguiente = coleccionables[notasObtenidas.length];

  horasNotas.push(clave);

  notasObtenidas.push(siguiente.id);

  guardarJSON(CLAVES.horasNotas, horasNotas);

  guardarJSON(CLAVES.notas, notasObtenidas);

  crearRespaldoProgreso();

  actualizarProgreso();

  comprobarFlorSecreta();

  mostrarColeccionable(siguiente, ahora);
}

function mostrarColeccionable(item, fecha) {
  const hora = `${String(fecha.getHours()).padStart(2, "0")}:00`;

  contenidoModal.innerHTML = `
        <div class="nuevo-coleccionable">

            <div class="reloj-coleccionable">
                ${hora}
            </div>

            <p class="modal-etiqueta">
                APARECIÓ ALGO NUEVO
            </p>

            <h2>
                ${item.titulo}
            </h2>

            <div class="nota-encontrada">

                <p>
                    ${item.nota}
                </p>

                <span>
                    NUEVO FRAGMENTO
                </span>

                <strong>
                    ${item.fragmento}
                </strong>

            </div>

            <button
                class="boton-modal-principal"
                id="cerrar-coleccionable"
                type="button"
            >
                Guardar y continuar
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
   11:11
===================================================== */

const nota1111 = document.createElement("aside");

nota1111.className = "nota-1111";

document.body.appendChild(nota1111);

let dias1111 = leerJSON(CLAVES.nota1111, []);

function revisarNota1111() {
  const ahora = new Date();

  if (ahora.getHours() !== 23 || ahora.getMinutes() !== 11) {
    return;
  }

  const hoy = claveDia(ahora);

  if (dias1111.includes(hoy)) {
    return;
  }

  dias1111.push(hoy);

  guardarJSON(CLAVES.nota1111, dias1111);

  crearRespaldoProgreso();

  mostrarNota1111();
}

function mostrarNota1111() {
  nota1111.innerHTML = `
        <button
            class="cerrar-nota-1111"
            type="button"
        >
            ×
        </button>

        <div class="hora-1111">
            11:11
        </div>

        <p class="etiqueta-1111">
            UNA NOTA QUE SOLO APARECE A ESTA HORA
        </p>

        <h3>
            Pide un deseo
        </h3>

        <p>
            Hay momentos que duran apenas un minuto,
            pero consiguen sentirse especiales.
            Si encontraste esta nota, esta canción
            estaba esperando justo esta hora.
        </p>

        <a
            class="boton-1111"
            href="https://www.youtube.com/watch?v=qqZGQPukZ-0"
            target="_blank"
            rel="noopener noreferrer"
        >
            Catorce — Sebastián Romero
        </a>
    `;

  nota1111.classList.add("mostrar");

  nota1111.querySelector(".cerrar-nota-1111").addEventListener("click", () => {
    nota1111.classList.remove("mostrar");
  });
}

/* =====================================================
   SISTEMA DE 3 TOQUES EN FLORES
===================================================== */

const secuenciasSecretas = {};

function registrarToqueSecreto(tipo) {
  if (!cancionesSecretas.some((secreto) => secreto.tipo === tipo)) {
    return false;
  }

  if (!secuenciasSecretas[tipo]) {
    secuenciasSecretas[tipo] = {
      cantidad: 0,
      temporizador: null,
    };
  }

  const estado = secuenciasSecretas[tipo];

  clearTimeout(estado.temporizador);

  estado.cantidad++;

  if (estado.cantidad >= 3) {
    estado.cantidad = 0;

    return true;
  }

  estado.temporizador = setTimeout(() => {
    estado.cantidad = 0;
  }, 1300);

  return false;
}

/* =====================================================
   TARJETA DE FLOR
===================================================== */

function crearTarjetaFlor(config, esSecreta = false) {
  const tarjeta = document.createElement("article");

  tarjeta.className = `tarjeta-flor tarjeta-${config.tipo}`;

  tarjeta.dataset.flor = config.tipo;

  if (esSecreta) {
    tarjeta.classList.add("tarjeta-flor-secreta");
  }

  const titulo = document.createElement("h2");

  titulo.className = "titulo-flor";

  titulo.textContent = config.titulo;

  const envoltura = document.createElement("div");

  envoltura.className = "envoltura-flor flor-interactiva";

  envoltura.tabIndex = 0;

  envoltura.setAttribute("role", "button");

  if (Flores[config.tipo]) {
    envoltura.appendChild(Flores[config.tipo]());
  }

  const memoria = document.createElement("p");

  memoria.className = "memoria-flor";

  const pista = document.createElement("p");

  pista.className = "pista-carta";

  pista.textContent = "Toca la flor";

  const nota = document.createElement("div");

  nota.className = "nota-flor";

  const texto = document.createElement("p");

  texto.textContent = config.mensaje;

  nota.appendChild(texto);

  const enlaceCancion =
    config.linkCancion ||
    (config.busquedaCancion ? crearEnlaceYouTube(config.busquedaCancion) : "");

  if (enlaceCancion) {
    /*
           GIRASOL:
           SU BOTÓN NECESITA 3 TOQUES.
        */

    if (config.tipoAccion === "playlist-secreta") {
      const botonPlaylist = document.createElement("button");

      botonPlaylist.type = "button";

      botonPlaylist.className = `boton-cancion ${
        config.claseBoton || ""
      }`.trim();

      botonPlaylist.textContent = config.textoBoton;

      let toquesPlaylist = 0;

      let temporizadorPlaylist;

      botonPlaylist.addEventListener("click", (evento) => {
        evento.stopPropagation();

        clearTimeout(temporizadorPlaylist);

        toquesPlaylist++;

        botonPlaylist.classList.remove("boton-pulsado");

        void botonPlaylist.offsetWidth;

        botonPlaylist.classList.add("boton-pulsado");

        if (toquesPlaylist >= 3) {
          toquesPlaylist = 0;

          botonPlaylist.classList.remove("boton-pulsado");

          abrirPlaylistSecretaGirasol(enlaceCancion);

          return;
        }

        temporizadorPlaylist = setTimeout(() => {
          toquesPlaylist = 0;
        }, 1500);
      });

      nota.appendChild(botonPlaylist);
    } else {
      const botonCancion = document.createElement("a");

      botonCancion.className = `boton-cancion ${
        config.claseBoton || ""
      }`.trim();

      botonCancion.href = enlaceCancion;

      botonCancion.target = "_blank";

      botonCancion.rel = "noopener noreferrer";

      botonCancion.textContent = config.textoBoton;

      nota.appendChild(botonCancion);
    }
  }

  const botonFavorita = document.createElement("button");

  botonFavorita.className = "boton-favorita";

  botonFavorita.type = "button";

  botonFavorita.addEventListener("click", (evento) => {
    evento.stopPropagation();

    florFavorita = config.tipo;

    localStorage.setItem(CLAVES.favorita, florFavorita);

    crearRespaldoProgreso();

    actualizarFavoritaUI();

    mostrarToast("Favorita guardada.");
  });

  function registrarVisitaFlor() {
    visitasFlores[config.tipo] = (visitasFlores[config.tipo] || 0) + 1;

    guardarJSON(CLAVES.visitasFlores, visitasFlores);

    crearRespaldoProgreso();

    actualizarMemoriaTarjeta(tarjeta);
  }

  let ignorarClick = false;

  let temporizadorSecretoLargo;

  let temporizadorCartaNormal;

  envoltura.addEventListener("pointerdown", () => {
    ignorarClick = false;

    temporizadorSecretoLargo = setTimeout(() => {
      ignorarClick = true;

      mostrarToast(config.microMensaje);

      envoltura.classList.add("secreto-activo");

      setTimeout(() => {
        envoltura.classList.remove("secreto-activo");
      }, 800);
    }, 1300);
  });

  ["pointerup", "pointerleave", "pointercancel"].forEach((evento) => {
    envoltura.addEventListener(evento, () => {
      clearTimeout(temporizadorSecretoLargo);
    });
  });

  function reaccionar() {
    if (ignorarClick) {
      ignorarClick = false;

      return;
    }

    registrarVisitaFlor();

    /*
           DETECTAMOS LOS 3 TOQUES
           ANTES DE ABRIR LA CARTA NORMAL.
        */

    const activarSecreto = registrarToqueSecreto(config.tipo);

    clearTimeout(temporizadorCartaNormal);

    envoltura.classList.remove("reaccion-activa");

    void envoltura.offsetWidth;

    envoltura.classList.add("reaccion-activa");

    if (activarSecreto) {
      abrirCancionSecreta(config.tipo);

      return;
    }

    /*
           ESPERA UN POCO PARA SABER
           SI VIENEN EL SEGUNDO Y TERCER TOQUE.
        */

    temporizadorCartaNormal = setTimeout(() => {
      abrirCarta(config);
    }, 720);

    setTimeout(() => {
      envoltura.classList.remove("reaccion-activa");
    }, 900);
  }

  envoltura.addEventListener("click", reaccionar);

  /*
       TECLADO:
       ABRE DIRECTAMENTE LA CARTA NORMAL.
    */

  envoltura.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();

      registrarVisitaFlor();

      abrirCarta(config);
    }
  });

  tarjeta.appendChild(titulo);

  tarjeta.appendChild(envoltura);

  tarjeta.appendChild(memoria);

  tarjeta.appendChild(pista);

  tarjeta.appendChild(nota);

  tarjeta.appendChild(botonFavorita);

  return tarjeta;
}

/* =====================================================
   MEMORIA DE FLORES
===================================================== */

function actualizarMemoriaTarjeta(tarjeta) {
  const tipo = tarjeta.dataset.flor;

  const contador = visitasFlores[tipo] || 0;

  const elemento = tarjeta.querySelector(".memoria-flor");

  if (!elemento) {
    return;
  }

  if (tipo === florFavorita && contador >= 2) {
    elemento.textContent = "Sabía que volverías a esta.";

    elemento.classList.add("visible");

    return;
  }

  if (contador >= 6) {
    elemento.textContent = "Esta flor ya te reconoce.";

    elemento.classList.add("visible");
  } else if (contador >= 3) {
    elemento.textContent = "Parece que ya conoces esta flor.";

    elemento.classList.add("visible");
  } else {
    elemento.textContent = "";

    elemento.classList.remove("visible");
  }
}

/* =====================================================
   FAVORITA
===================================================== */

function actualizarFavoritaUI() {
  document.querySelectorAll(".tarjeta-flor").forEach((tarjeta) => {
    const tipo = tarjeta.dataset.flor;

    const boton = tarjeta.querySelector(".boton-favorita");

    const esFavorita = tipo === florFavorita;

    tarjeta.classList.toggle("es-favorita", esFavorita);

    if (boton) {
      boton.textContent = esFavorita ? "Tu favorita" : "Guardar como favorita";
    }

    actualizarMemoriaTarjeta(tarjeta);
  });

  actualizarTextoFavorita();
}

/* =====================================================
   ESTRUCTURA SUPERIOR
===================================================== */

const introJardin = crearIntroJardin();

const panelSuperior = crearPanelSuperior();

jardin.insertBefore(introJardin, contenedorFlores);

jardin.insertBefore(panelSuperior, contenedorFlores);

jardin.insertBefore(panelProgreso, contenedorFlores);

/* =====================================================
   MOSTRAR FLORES
===================================================== */

floresDelJardin.forEach((config) => {
  contenedorFlores.appendChild(crearTarjetaFlor(config));
});

/* =====================================================
   DALIA SECRETA
===================================================== */

function comprobarFlorSecreta(silencioso = false) {
  if (notasObtenidas.length < 10) {
    return;
  }

  if (document.querySelector('[data-flor="dalia"]')) {
    return;
  }

  const tarjeta = crearTarjetaFlor(florSecreta, true);

  contenedorFlores.appendChild(tarjeta);

  requestAnimationFrame(() => {
    tarjeta.classList.add("revelada");
  });

  actualizarFavoritaUI();

  actualizarProgreso();

  if (!silencioso) {
    mostrarToast("Algo cambió entre las flores...");
  }
}

/* =====================================================
   FONDOS
===================================================== */

const botonFondo = document.getElementById("boton-fondo");

let temporizadorNoche;

let pulsacionLarga = false;

function actualizarTextoFondo() {
  if (document.body.classList.contains("modo-noche")) {
    botonFondo.textContent = "Volver al jardín";

    return;
  }

  botonFondo.textContent = document.body.classList.contains("tema-morado")
    ? "Cambiar a fondo amarillo"
    : "Cambiar a fondo morado";
}

function activarModoEspecial() {
  pulsacionLarga = true;

  const activado = document.body.classList.toggle("modo-noche");

  localStorage.setItem(CLAVES.nocheDescubierta, "si");

  crearRespaldoProgreso();

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
  temporizadorNoche = setTimeout(activarModoEspecial, 2800);
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
   LLUVIA
===================================================== */

function iniciarLluviaEspecial() {
  if (document.querySelector(".lluvia-especial")) {
    return;
  }

  const lluvia = document.createElement("div");

  lluvia.className = "lluvia-especial";

  for (let i = 0; i < 48; i++) {
    const particula = document.createElement("span");

    particula.className = "particula-lluvia";

    particula.style.left = `${Math.random() * 100}%`;

    particula.style.setProperty("--retraso", `${Math.random() * -8}s`);

    particula.style.setProperty("--duracion", `${5 + Math.random() * 5}s`);

    particula.style.setProperty("--tamano", `${6 + Math.random() * 8}px`);

    lluvia.appendChild(particula);
  }

  document.body.appendChild(lluvia);

  mostrarToast("Llevas un rato por aquí...");

  setTimeout(() => {
    lluvia.classList.add("desaparecer");
  }, 12000);

  setTimeout(() => {
    lluvia.remove();
  }, 14500);
}

setTimeout(iniciarLluviaEspecial, 120000);

/* =====================================================
   PÉTALOS
===================================================== */

function crearExplosionPetalos(x, y, color1, color2) {
  const explosion = document.createElement("div");

  explosion.className = "explosion-petalos";

  explosion.style.left = `${x}px`;

  explosion.style.top = `${y}px`;

  if (color1) {
    explosion.style.setProperty("--petalo-golpe-1", color1);
  }

  if (color2) {
    explosion.style.setProperty("--petalo-golpe-2", color2);
  }

  for (let i = 0; i < 22; i++) {
    const petalo = document.createElement("span");

    petalo.className = "petalo-explosion";

    const angulo = Math.random() * Math.PI * 2;

    const distancia = 45 + Math.random() * 90;

    petalo.style.setProperty("--petalo-x", `${Math.cos(angulo) * distancia}px`);

    petalo.style.setProperty("--petalo-y", `${Math.sin(angulo) * distancia}px`);

    petalo.style.setProperty(
      "--petalo-rotacion",
      `${Math.random() * 600 - 300}deg`,
    );

    petalo.style.setProperty("--petalo-retraso", `${Math.random() * 0.12}s`);

    petalo.style.setProperty("--petalo-tamano", `${6 + Math.random() * 8}px`);

    explosion.appendChild(petalo);
  }

  document.body.appendChild(explosion);

  setTimeout(() => {
    explosion.remove();
  }, 1500);
}

/* =====================================================
   MARIPOSAS
===================================================== */

let mariposasAplastadas = Number(
  localStorage.getItem(CLAVES.mariposasAplastadas) || 0,
);

const coloresMariposas = [
  "mariposa-rosa",
  "mariposa-azul",
  "mariposa-morada",
  "mariposa-naranja",
  "mariposa-verde",
  "mariposa-roja",
  "mariposa-blanca",
  "mariposa-turquesa",
];

function crearMariposa() {
  const actuales = document.querySelectorAll(".mariposa-jardin").length;

  if (actuales >= 4) {
    return;
  }

  const mariposa = document.createElement("button");

  mariposa.type = "button";

  mariposa.className = "mariposa-jardin";

  const claseColor =
    coloresMariposas[Math.floor(Math.random() * coloresMariposas.length)];

  mariposa.classList.add(claseColor);

  if (Math.random() < 0.4) {
    mariposa.classList.add("mariposa-inversa");
  }

  mariposa.setAttribute("aria-label", "Mariposa");

  mariposa.innerHTML = `
        <span class="ala ala-izquierda"></span>

        <span class="cuerpo-mariposa"></span>

        <span class="ala ala-derecha"></span>
    `;

  mariposa.style.top = `${10 + Math.random() * 72}%`;

  mariposa.style.animationDuration = `${9 + Math.random() * 6}s`;

  mariposa.addEventListener("click", (evento) => {
    evento.stopPropagation();

    const estilos = getComputedStyle(mariposa);

    const color1 = estilos.getPropertyValue("--mariposa-color-1").trim();

    const color2 = estilos.getPropertyValue("--mariposa-color-2").trim();

    crearExplosionPetalos(evento.clientX, evento.clientY, color1, color2);

    mariposasAplastadas++;

    localStorage.setItem(
      CLAVES.mariposasAplastadas,
      String(mariposasAplastadas),
    );

    crearRespaldoProgreso();

    const mensajes = [
      "La alcanzaste.",

      "Pobre mariposa...",

      "Otra cayó en el jardín.",

      "Definitivamente te gusta aplastarlas.",

      "Bueno... esa tampoco sobrevivió.",

      "Los pétalos fueron lo único que quedó.",

      "Otra más. Ya les estás agarrando práctica.",
    ];

    mostrarToast(mensajes[Math.floor(Math.random() * mensajes.length)]);

    mariposa.classList.add("mariposa-atrapada");

    setTimeout(() => {
      mariposa.remove();
    }, 500);
  });

  document.body.appendChild(mariposa);

  setTimeout(() => {
    if (document.body.contains(mariposa)) {
      mariposa.remove();
    }
  }, 17000);
}

function programarMariposa(primera = false) {
  /*
       PRIMERA:
       ENTRE 4 Y 8 SEGUNDOS.

       DESPUÉS:
       ENTRE 8 Y 16 SEGUNDOS.
    */

  const espera = primera
    ? 4000 + Math.random() * 4000
    : 8000 + Math.random() * 8000;

  setTimeout(() => {
    crearMariposa();

    /*
               MUY SEGUIDO SALE UNA SEGUNDA.
            */

    if (Math.random() < 0.65) {
      setTimeout(crearMariposa, 900 + Math.random() * 1700);
    }

    /*
               A VECES UNA TERCERA.
            */

    if (Math.random() < 0.28) {
      setTimeout(crearMariposa, 2600 + Math.random() * 1800);
    }

    programarMariposa(false);
  }, espera);
}

programarMariposa(true);

/* =====================================================
   APARTADO SECRETO CON KUROMI

   NO MUESTRA TODAS LAS CANCIONES.
   SOLO INDICA CUÁNTAS HA DESCUBIERTO.
===================================================== */

const seccionSecreto = document.createElement("section");

seccionSecreto.className = "seccion-secreto";

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

            <span
                id="secretos-totales"
            >
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
            Aquí no aparecerán las canciones.
            Para encontrarlas tendrás que volver
            a las flores.
        </p>

    </div>
`;

jardin.appendChild(seccionSecreto);

/* =====================================================
   PANEL SECRETO
===================================================== */

function actualizarPanelSecreto() {
  const encontrados = document.getElementById("secretos-encontrados");

  const barra = document.getElementById("barra-secretos-progreso");

  if (!encontrados || !barra) {
    return;
  }

  encontrados.textContent = secretosVistos.length;

  const porcentaje = Math.min(
    100,
    (secretosVistos.length / cancionesSecretas.length) * 100,
  );

  barra.style.width = `${porcentaje}%`;
}

/* =====================================================
   REVELAR APARTADO SECRETO
===================================================== */

function revelarApartadoSecreto(conAviso = true) {
  secretoDesbloqueado = true;

  localStorage.setItem(CLAVES.secretoDesbloqueado, "si");

  crearRespaldoProgreso();

  seccionSecreto.classList.add("desbloqueado");

  actualizarPanelSecreto();

  if (conAviso) {
    mostrarToast("Se desbloqueó el apartado Secreto.");
  }
}

if (secretoDesbloqueado || secretosVistos.length > 0) {
  revelarApartadoSecreto(false);
}

/* =====================================================
   DESPEDIDA
===================================================== */

function obtenerDespedidaActual() {
  if (despedidasObtenidas.length === 0) {
    return "Vuelve de vez en cuando.";
  }

  const ultimoId = despedidasObtenidas[despedidasObtenidas.length - 1];

  return despedidas[ultimoId - 1];
}

/* =====================================================
   FINAL
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

    <p class="despedida-dia">
        ${obtenerDespedidaActual()}
    </p>

    <div class="final-linea"></div>

    <p class="final-pista">
        Algunas cosas necesitan su momento.
        Otras necesitan que vuelvas.
    </p>

    <button
        class="boton-no-tocar"
        id="boton-no-tocar"
        type="button"
    >
        No tocar
    </button>
`;

jardin.appendChild(finalJardin);

/* =====================================================
   NO TOCAR
===================================================== */

let nivelNoTocar = 0;

const botonNoTocar = document.getElementById("boton-no-tocar");

botonNoTocar.addEventListener("click", () => {
  nivelNoTocar++;

  if (nivelNoTocar === 1) {
    botonNoTocar.textContent = "¿Segura?";

    return;
  }

  if (nivelNoTocar === 2) {
    botonNoTocar.textContent = "¿Segura, segura?";

    return;
  }

  if (nivelNoTocar === 3) {
    botonNoTocar.textContent = "Bueno...";

    setTimeout(abrirSecretoNoTocar, 400);

    return;
  }

  abrirSecretoNoTocar();
});

function abrirSecretoNoTocar() {
  contenidoModal.innerHTML = `
        <div class="secreto-no-tocar">

            <p class="modal-etiqueta">
                ENCONTRASTE ALGO
            </p>

            <h2>
                La curiosidad ganó
            </h2>

            <div class="papel-carta">

                <p>
                    Si llegaste hasta aquí y además
                    presionaste algo que decía claramente
                    que no tocaras, supongo que la
                    curiosidad ganó otra vez.
                </p>

                <p class="secreto-no-tocar-final">
                    Por suerte había algo esperando.
                </p>

            </div>

        </div>
    `;

  cerrarModalBoton.style.display = "";

  capaModal.classList.add("mostrar");
}

/* =====================================================
   INICIALIZACIÓN
===================================================== */

actualizarProgreso();

comprobarFlorSecreta(true);

actualizarFavoritaUI();

actualizarTextoFondo();

actualizarPanelSecreto();

crearRespaldoProgreso();

mostrarAvisoInicial();

revisarNota1111();

setInterval(revisarHoraColeccionable, 30000);

setInterval(revisarNota1111, 15000);
