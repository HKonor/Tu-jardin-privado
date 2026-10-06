/* =====================================================
   BIBLIOTECA DE FLORES
===================================================== */

function crearDiv(clases) {
    const elemento = document.createElement("div");
    elemento.className = clases;
    return elemento;
}


const Flores = {

    /* =================================================
       GIRASOL
    ================================================= */

    girasol() {

        const flor =
            crearDiv("girasol");

        const cabeza =
            crearDiv("girasol-cabeza");


        for (let i = 0; i < 20; i++) {

            const petalo =
                crearDiv("girasol-petalo");

            petalo.style.transform =
                `rotate(${i * 18}deg)`;

            cabeza.appendChild(petalo);
        }


        const centro =
            crearDiv("girasol-centro");


        for (let i = 0; i < 65; i++) {

            const semilla =
                crearDiv("semilla");

            const angulo =
                i * 137.5;

            const radio =
                4 * Math.sqrt(i);

            const radianes =
                angulo * Math.PI / 180;

            const x =
                47 +
                Math.cos(radianes) *
                radio;

            const y =
                47 +
                Math.sin(radianes) *
                radio;


            semilla.style.left =
                `${x}px`;

            semilla.style.top =
                `${y}px`;

            centro.appendChild(semilla);
        }


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv("girasol-tallo")
        );

        flor.appendChild(
            crearDiv(
                "girasol-hoja hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "girasol-hoja hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       TULIPÁN
    ================================================= */

    tulipan() {

        const flor =
            crearDiv("tulipan");

        const cabeza =
            crearDiv("tulipan-cabeza");


        [
            "petalo-fondo-izq",
            "petalo-fondo-der",
            "petalo-centro-izq",
            "petalo-centro-der",
            "petalo-frontal"
        ].forEach(
            clase => {

                const petalo =
                    crearDiv(
                        `tulipan-petalo ${clase}`
                    );


                if (
                    clase ===
                    "petalo-frontal"
                ) {

                    petalo.appendChild(
                        crearDiv(
                            "vena vena-1"
                        )
                    );

                    petalo.appendChild(
                        crearDiv(
                            "vena vena-2"
                        )
                    );

                    petalo.appendChild(
                        crearDiv(
                            "vena vena-3"
                        )
                    );
                }


                cabeza.appendChild(
                    petalo
                );
            }
        );


        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "tulipan-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "tulipan-hoja tulipan-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "tulipan-hoja tulipan-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       LIRIO
    ================================================= */

    lirio() {

        const flor =
            crearDiv("lirio");

        const cabeza =
            crearDiv("lirio-cabeza");


        for (let i = 1; i <= 6; i++) {

            cabeza.appendChild(
                crearDiv(
                    `lirio-petalo lirio-petalo-${i}`
                )
            );
        }


        cabeza.appendChild(
            crearDiv(
                "lirio-centro"
            )
        );


        cabeza.appendChild(
            crearDiv(
                "lirio-pistilo"
            )
        );


        for (let i = 1; i <= 6; i++) {

            const estambre =
                crearDiv(
                    `lirio-estambre lirio-estambre-${i}`
                );

            estambre.appendChild(
                crearDiv(
                    "lirio-antera"
                )
            );

            cabeza.appendChild(
                estambre
            );
        }


        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "lirio-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "lirio-hoja lirio-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "lirio-hoja lirio-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       FLOR DE NUBE
    ================================================= */

    nube() {

        const flor =
            crearDiv("flor-nube");


        flor.appendChild(
            crearDiv(
                "nube-tallo-principal"
            )
        );


        const ramas = [
            [-48, -48, 122],
            [-38, -37, 142],
            [-29, -28, 155],
            [-20, -18, 168],
            [-10, -9, 176],
            [10, 9, 176],
            [20, 18, 168],
            [29, 28, 155],
            [38, 37, 142],
            [48, 48, 122]
        ];


        ramas.forEach(
            ([x, rotacion, alto]) => {

                const rama =
                    crearDiv(
                        "nube-rama"
                    );

                rama.style.height =
                    `${alto}px`;

                rama.style.transform =
                    `translateX(${x}px) rotate(${rotacion}deg)`;

                flor.appendChild(
                    rama
                );
            }
        );


        const ramo =
            crearDiv(
                "nube-ramo"
            );


        for (let i = 0; i < 78; i++) {

            const angulo =
                i * 137.5;

            const radio =
                18 +
                (i % 15) * 7.8;

            const radianes =
                angulo *
                Math.PI /
                180;

            const x =
                155 +
                Math.cos(radianes) *
                radio;

            const y =
                104 +
                Math.sin(radianes) *
                radio *
                .52;


            const escala =
                .60 +
                (i % 6) *
                .08;


            const contenedor =
                crearDiv(
                    "nube-florecita-wrap"
                );


            contenedor.style.left =
                `${x}px`;

            contenedor.style.top =
                `${y}px`;

            contenedor.style.setProperty(
                "--escala",
                escala
            );

            contenedor.style.setProperty(
                "--delay",
                `${(i % 9) * -.22}s`
            );


            const florecita =
                crearDiv(
                    "nube-florecita"
                );


            for (
                let p = 1;
                p <= 5;
                p++
            ) {

                florecita.appendChild(
                    crearDiv(
                        `nube-petalo nube-petalo-${p}`
                    )
                );
            }


            florecita.appendChild(
                crearDiv(
                    "nube-centro"
                )
            );


            contenedor.appendChild(
                florecita
            );

            ramo.appendChild(
                contenedor
            );
        }


        flor.appendChild(ramo);


        flor.appendChild(
            crearDiv(
                "nube-hoja nube-hoja-1"
            )
        );

        flor.appendChild(
            crearDiv(
                "nube-hoja nube-hoja-2"
            )
        );


        return flor;
    },


    /* =================================================
       PEONÍA
    ================================================= */

    peonia() {

        const flor =
            crearDiv("peonia");

        const cabeza =
            crearDiv(
                "peonia-cabeza"
            );


        for (let i = 0; i < 28; i++) {

            const vuelta =
                i % 14;

            const capa =
                Math.floor(i / 14);

            const wrap =
                crearDiv(
                    "peonia-petalo-wrap"
                );


            wrap.style.setProperty(
                "--angulo",
                `${vuelta * (360 / 14)}deg`
            );

            wrap.style.setProperty(
                "--radio",
                `${35 + capa * 17}px`
            );

            wrap.style.setProperty(
                "--escala",
                `${1 - capa * .18}`
            );


            wrap.appendChild(
                crearDiv(
                    "peonia-petalo"
                )
            );


            cabeza.appendChild(
                wrap
            );
        }


        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "peonia-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "peonia-hoja peonia-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "peonia-hoja peonia-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       CAMELIA
    ================================================= */

    camelia() {

        const flor =
            crearDiv("camelia");

        const cabeza =
            crearDiv(
                "camelia-cabeza"
            );


        for (let i = 1; i <= 8; i++) {

            cabeza.appendChild(
                crearDiv(
                    `camelia-petalo camelia-petalo-exterior camelia-exterior-${i}`
                )
            );
        }


        for (let i = 1; i <= 6; i++) {

            cabeza.appendChild(
                crearDiv(
                    `camelia-petalo camelia-petalo-interior camelia-interior-${i}`
                )
            );
        }


        const centro =
            crearDiv(
                "camelia-centro"
            );


        for (let i = 0; i < 18; i++) {

            const estambre =
                crearDiv(
                    "camelia-estambre"
                );

            const angulo =
                i * 20;

            const radio =
                10 +
                (i % 3) * 5;

            estambre.style.left =
                `${24 + Math.cos(angulo * Math.PI / 180) * radio}px`;

            estambre.style.top =
                `${24 + Math.sin(angulo * Math.PI / 180) * radio}px`;

            centro.appendChild(
                estambre
            );
        }


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "camelia-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "camelia-hoja camelia-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "camelia-hoja camelia-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       JAZMÍN
    ================================================= */

    jazmin() {

        const flor =
            crearDiv("jazmin");


        flor.appendChild(
            crearDiv(
                "jazmin-tallo"
            )
        );


        flor.appendChild(
            crearDiv(
                "jazmin-rama jazmin-rama-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "jazmin-rama jazmin-rama-derecha"
            )
        );


        const cabeza =
            crearDiv(
                "jazmin-cabeza"
            );


        for (let i = 1; i <= 8; i++) {

            cabeza.appendChild(
                crearDiv(
                    `jazmin-petalo jazmin-petalo-${i}`
                )
            );
        }


        const centro =
            crearDiv(
                "jazmin-centro"
            );


        for (let i = 0; i < 25; i++) {

            const estambre =
                crearDiv(
                    "jazmin-estambre"
                );

            estambre.style.left =
                `${5 + Math.random() * 28}px`;

            estambre.style.top =
                `${5 + Math.random() * 28}px`;

            centro.appendChild(
                estambre
            );
        }


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);


        flor.appendChild(
            crearDiv(
                "jazmin-hoja jazmin-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "jazmin-hoja jazmin-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       ORQUÍDEA
    ================================================= */

    orquidea() {

        const flor =
            crearDiv("orquidea");


        flor.appendChild(
            crearDiv(
                "orquidea-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "orquidea-rama"
            )
        );


        const cabeza =
            crearDiv(
                "orquidea-cabeza"
            );


        [
            "superior",
            "lateral-izq",
            "lateral-der",
            "inferior-izq",
            "inferior-der"
        ].forEach(
            clase => {

                cabeza.appendChild(
                    crearDiv(
                        `orquidea-petalo ${clase}`
                    )
                );
            }
        );


        cabeza.appendChild(
            crearDiv(
                "orquidea-labelo"
            )
        );

        cabeza.appendChild(
            crearDiv(
                "orquidea-centro"
            )
        );


        flor.appendChild(cabeza);


        flor.appendChild(
            crearDiv(
                "orquidea-hoja orquidea-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "orquidea-hoja orquidea-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       LAVANDA
    ================================================= */

    lavanda() {

        const flor =
            crearDiv("lavanda");


        const crearEspiga =
            (
                left,
                top,
                rotacion,
                escala = 1
            ) => {

                const tallo =
                    crearDiv(
                        "lavanda-tallo"
                    );


                tallo.style.left =
                    `${left}px`;

                tallo.style.top =
                    `${top}px`;

                tallo.style.transform =
                    `rotate(${rotacion}deg) scale(${escala})`;


                tallo.appendChild(
                    crearDiv(
                        "lavanda-linea"
                    )
                );


                for (let i = 0; i < 12; i++) {

                    const izq =
                        crearDiv(
                            "lavanda-brote izq"
                        );

                    const der =
                        crearDiv(
                            "lavanda-brote der"
                        );


                    izq.style.top =
                        `${5 + i * 13}px`;

                    der.style.top =
                        `${11 + i * 13}px`;


                    tallo.appendChild(
                        izq
                    );

                    tallo.appendChild(
                        der
                    );
                }


                flor.appendChild(
                    tallo
                );
            };


        crearEspiga(
            125,
            15,
            0,
            1
        );

        crearEspiga(
            93,
            39,
            -12,
            .88
        );

        crearEspiga(
            157,
            39,
            12,
            .88
        );


        flor.appendChild(
            crearDiv(
                "lavanda-base-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "lavanda-hoja lavanda-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "lavanda-hoja lavanda-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       ANÉMONA
    ================================================= */

    anemona() {

        const flor =
            crearDiv("anemona");

        const cabeza =
            crearDiv(
                "anemona-cabeza"
            );


        for (let i = 0; i < 9; i++) {

            const wrap =
                crearDiv(
                    "anemona-petalo-wrap"
                );


            wrap.style.setProperty(
                "--angulo",
                `${i * 40}deg`
            );


            wrap.appendChild(
                crearDiv(
                    "anemona-petalo"
                )
            );


            cabeza.appendChild(
                wrap
            );
        }


        const centro =
            crearDiv(
                "anemona-centro"
            );


        for (let i = 0; i < 45; i++) {

            const punto =
                crearDiv(
                    "anemona-estambre"
                );


            const angulo =
                Math.random() *
                Math.PI *
                2;

            const radio =
                Math.random() *
                27;


            punto.style.left =
                `${35 + Math.cos(angulo) * radio}px`;

            punto.style.top =
                `${35 + Math.sin(angulo) * radio}px`;


            centro.appendChild(
                punto
            );
        }


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "anemona-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "anemona-hoja anemona-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "anemona-hoja anemona-hoja-derecha"
            )
        );

        flor.appendChild(
            crearDiv(
                "anemona-hoja anemona-hoja-centro"
            )
        );


        return flor;
    },


    /* =================================================
       MAGNOLIA
    ================================================= */

    magnolia() {

        const flor =
            crearDiv("magnolia");


        flor.appendChild(
            crearDiv(
                "magnolia-tallo"
            )
        );


        const cabeza =
            crearDiv(
                "magnolia-cabeza"
            );


        for (let i = 1; i <= 6; i++) {

            cabeza.appendChild(
                crearDiv(
                    `magnolia-petalo magnolia-petalo-${i}`
                )
            );
        }


        for (let i = 1; i <= 3; i++) {

            cabeza.appendChild(
                crearDiv(
                    `magnolia-petalo-interno magnolia-interno-${i}`
                )
            );
        }


        const centro =
            crearDiv(
                "magnolia-centro"
            );


        for (let i = 0; i < 16; i++) {

            const estambre =
                crearDiv(
                    "magnolia-estambre"
                );

            estambre.style.transform =
                `rotate(${i * 22.5}deg)`;

            centro.appendChild(
                estambre
            );
        }


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);


        flor.appendChild(
            crearDiv(
                "magnolia-hoja magnolia-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "magnolia-hoja magnolia-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       NO ME OLVIDES
    ================================================= */

    nomeolvides() {

        const flor =
            crearDiv("nomeolvides");


        flor.appendChild(
            crearDiv(
                "nomeolvides-tallo-principal"
            )
        );


        const ramas = [
            [-50, -38, 115],
            [-30, -23, 140],
            [-12, -10, 155],
            [12, 10, 155],
            [30, 23, 140],
            [50, 38, 115]
        ];


        ramas.forEach(
            ([x, rotacion, altura]) => {

                const rama =
                    crearDiv(
                        "nomeolvides-rama"
                    );


                rama.style.left =
                    `${145 + x}px`;

                rama.style.top =
                    `${115}px`;

                rama.style.height =
                    `${altura}px`;

                rama.style.transform =
                    `rotate(${rotacion}deg)`;


                flor.appendChild(
                    rama
                );
            }
        );


        for (let i = 0; i < 33; i++) {

            const florcita =
                crearDiv(
                    "nomeolvides-flor"
                );


            const angulo =
                i * 137.5;

            const radio =
                22 +
                (i % 10) * 9;

            const rad =
                angulo *
                Math.PI /
                180;


            florcita.style.left =
                `${145 + Math.cos(rad) * radio}px`;

            florcita.style.top =
                `${110 + Math.sin(rad) * radio * .55}px`;

            florcita.style.setProperty(
                "--rotacion",
                `${i * 13}deg`
            );

            florcita.style.setProperty(
                "--escala",
                `${.75 + (i % 4) * .10}`
            );

            florcita.style.setProperty(
                "--delay",
                `${(i % 8) * -.25}s`
            );


            for (let p = 1; p <= 5; p++) {

                florcita.appendChild(
                    crearDiv(
                        `nomeolvides-petalo nomeolvides-petalo-${p}`
                    )
                );
            }


            florcita.appendChild(
                crearDiv(
                    "nomeolvides-centro"
                )
            );


            flor.appendChild(
                florcita
            );
        }


        for (let i = 0; i < 8; i++) {

            const boton =
                crearDiv(
                    "nomeolvides-boton"
                );


            boton.style.left =
                `${85 + Math.random() * 125}px`;

            boton.style.top =
                `${50 + Math.random() * 120}px`;


            flor.appendChild(
                boton
            );
        }


        for (let i = 1; i <= 4; i++) {

            flor.appendChild(
                crearDiv(
                    `nomeolvides-hoja nomeolvides-hoja-${i}`
                )
            );
        }


        return flor;
    },


    /* =================================================
       CLAVEL
    ================================================= */

    clavel() {

        const flor =
            crearDiv("clavel");

        const cabeza =
            crearDiv(
                "clavel-cabeza"
            );


        const capas = [
            {
                cantidad: 15,
                radio: 48,
                escala: 1,
                clase: "clavel-capa-exterior"
            },

            {
                cantidad: 11,
                radio: 29,
                escala: .82,
                clase: "clavel-capa-media"
            },

            {
                cantidad: 8,
                radio: 12,
                escala: .67,
                clase: "clavel-capa-centro"
            }
        ];


        capas.forEach(
            capa => {

                for (
                    let i = 0;
                    i < capa.cantidad;
                    i++
                ) {

                    const wrap =
                        crearDiv(
                            `clavel-petalo-wrap ${capa.clase}`
                        );


                    wrap.style.setProperty(
                        "--angulo",
                        `${i * (360 / capa.cantidad)}deg`
                    );

                    wrap.style.setProperty(
                        "--radio",
                        `${capa.radio}px`
                    );

                    wrap.style.setProperty(
                        "--escala",
                        capa.escala
                    );


                    wrap.appendChild(
                        crearDiv(
                            "clavel-petalo"
                        )
                    );


                    cabeza.appendChild(
                        wrap
                    );
                }
            }
        );


        cabeza.appendChild(
            crearDiv(
                "clavel-centro"
            )
        );


        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "clavel-tallo"
            )
        );


        for (let i = 1; i <= 3; i++) {

            flor.appendChild(
                crearDiv(
                    `clavel-hoja clavel-hoja-${i}`
                )
            );
        }


        return flor;
    },


    /* =================================================
       DALIA
    ================================================= */

    dalia() {

        const flor =
            crearDiv("dalia");

        const cabeza =
            crearDiv(
                "dalia-cabeza"
            );


        const capas = [
            {
                cantidad: 18,
                radio: 63,
                ancho: 35,
                alto: 75,
                clase: "dalia-capa-1"
            },

            {
                cantidad: 14,
                radio: 42,
                ancho: 31,
                alto: 66,
                clase: "dalia-capa-2"
            },

            {
                cantidad: 10,
                radio: 22,
                ancho: 27,
                alto: 55,
                clase: "dalia-capa-3"
            }
        ];


        capas.forEach(
            capa => {

                for (
                    let i = 0;
                    i < capa.cantidad;
                    i++
                ) {

                    const wrap =
                        crearDiv(
                            `dalia-wrap ${capa.clase}`
                        );


                    wrap.style.setProperty(
                        "--angulo",
                        `${i * (360 / capa.cantidad)}deg`
                    );


                    const petalo =
                        crearDiv(
                            "dalia-petalo"
                        );


                    petalo.style.width =
                        `${capa.ancho}px`;

                    petalo.style.height =
                        `${capa.alto}px`;

                    petalo.style.setProperty(
                        "--radio",
                        `${capa.radio}px`
                    );


                    wrap.appendChild(
                        petalo
                    );


                    cabeza.appendChild(
                        wrap
                    );
                }
            }
        );


        cabeza.appendChild(
            crearDiv(
                "dalia-centro"
            )
        );


        flor.appendChild(cabeza);

        flor.appendChild(
            crearDiv(
                "dalia-tallo"
            )
        );

        flor.appendChild(
            crearDiv(
                "dalia-hoja dalia-hoja-izquierda"
            )
        );

        flor.appendChild(
            crearDiv(
                "dalia-hoja dalia-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       FLOR DE LOTO
    ================================================= */

    loto() {

        const flor =
            crearDiv("loto");


        flor.appendChild(
            crearDiv(
                "loto-tallo"
            )
        );


        flor.appendChild(
            crearDiv(
                "loto-hoja loto-hoja-izquierda"
            )
        );


        flor.appendChild(
            crearDiv(
                "loto-hoja loto-hoja-derecha"
            )
        );


        const cabeza =
            crearDiv(
                "loto-cabeza"
            );


        for (let i = 1; i <= 5; i++) {

            cabeza.appendChild(
                crearDiv(
                    `loto-petalo loto-petalo-trasero loto-petalo-trasero-${i}`
                )
            );
        }


        for (let i = 1; i <= 4; i++) {

            cabeza.appendChild(
                crearDiv(
                    `loto-petalo loto-petalo-medio loto-petalo-medio-${i}`
                )
            );
        }


        for (let i = 1; i <= 3; i++) {

            cabeza.appendChild(
                crearDiv(
                    `loto-petalo loto-petalo-frontal loto-petalo-frontal-${i}`
                )
            );
        }


        cabeza.appendChild(
            crearDiv(
                "loto-centro"
            )
        );


        flor.appendChild(
            cabeza
        );


        return flor;
    },


    /* =================================================
       FLOR DE CEREZO
    ================================================= */

    cerezo() {

        const flor =
            crearDiv("cerezo");


        const ramaPrincipal =
            crearDiv(
                "cerezo-rama-principal"
            );


        flor.appendChild(
            ramaPrincipal
        );


        const ramas = [
            { clase: "cerezo-rama-1" },
            { clase: "cerezo-rama-2" },
            { clase: "cerezo-rama-3" },
            { clase: "cerezo-rama-4" },
            { clase: "cerezo-rama-5" }
        ];


        ramas.forEach(
            item => {

                flor.appendChild(
                    crearDiv(
                        `cerezo-rama ${item.clase}`
                    )
                );
            }
        );


        const posiciones = [
            [58, 88, .86, -7],
            [91, 58, 1.00, 5],
            [126, 91, .88, -4],
            [155, 42, 1.04, 7],
            [188, 79, .92, -6],
            [214, 118, .82, 8],
            [103, 129, .78, 4],
            [163, 137, .84, -5],
            [236, 69, .70, 3]
        ];


        posiciones.forEach(
            (
                [left, top, escala, rotacion],
                indice
            ) => {

                const florCerezo =
                    crearDiv(
                        "cerezo-flor"
                    );


                florCerezo.style.left =
                    `${left}px`;


                florCerezo.style.top =
                    `${top}px`;


                florCerezo.style.setProperty(
                    "--cerezo-escala",
                    escala
                );


                florCerezo.style.setProperty(
                    "--cerezo-rotacion",
                    `${rotacion}deg`
                );


                florCerezo.style.setProperty(
                    "--cerezo-delay",
                    `${(indice % 5) * -.35}s`
                );


                for (let p = 1; p <= 5; p++) {

                    florCerezo.appendChild(
                        crearDiv(
                            `cerezo-petalo cerezo-petalo-${p}`
                        )
                    );
                }


                florCerezo.appendChild(
                    crearDiv(
                        "cerezo-centro"
                    )
                );


                flor.appendChild(
                    florCerezo
                );
            }
        );


        const botones = [
            [72, 120],
            [135, 58],
            [200, 101],
            [225, 144],
            [119, 158]
        ];


        botones.forEach(
            ([left, top], indice) => {

                const boton =
                    crearDiv(
                        "cerezo-boton"
                    );


                boton.style.left =
                    `${left}px`;


                boton.style.top =
                    `${top}px`;


                boton.style.setProperty(
                    "--cerezo-delay",
                    `${indice * -.3}s`
                );


                flor.appendChild(
                    boton
                );
            }
        );


        return flor;
    },


    /* =================================================
       DAMA DE NOCHE
    ================================================= */

    damanoche() {

        const flor =
            crearDiv("damanoche");


        flor.appendChild(
            crearDiv(
                "damanoche-tallo-principal"
            )
        );


        [
            "damanoche-rama-1",
            "damanoche-rama-2",
            "damanoche-rama-3",
            "damanoche-rama-4",
            "damanoche-rama-5"
        ].forEach(
            clase => {

                flor.appendChild(
                    crearDiv(
                        `damanoche-rama ${clase}`
                    )
                );
            }
        );


        const posiciones = [
            [74, 79, .90, -24],
            [103, 55, 1.00, -12],
            [136, 82, .94, -5],
            [163, 49, 1.04, 8],
            [191, 77, .92, 18],
            [218, 101, .84, 27],
            [92, 118, .82, -30],
            [126, 132, .88, -13],
            [160, 119, .91, 9],
            [199, 132, .80, 25],
            [145, 30, .78, 2]
        ];


        posiciones.forEach(
            (
                [left, top, escala, rotacion],
                indice
            ) => {

                const florNoche =
                    crearDiv(
                        "damanoche-flor"
                    );


                florNoche.style.left =
                    `${left}px`;


                florNoche.style.top =
                    `${top}px`;


                florNoche.style.setProperty(
                    "--damanoche-escala",
                    escala
                );


                florNoche.style.setProperty(
                    "--damanoche-rotacion",
                    `${rotacion}deg`
                );


                florNoche.style.setProperty(
                    "--damanoche-delay",
                    `${(indice % 6) * -.32}s`
                );


                florNoche.appendChild(
                    crearDiv(
                        "damanoche-tubo"
                    )
                );


                const corola =
                    crearDiv(
                        "damanoche-corola"
                    );


                for (let i = 1; i <= 5; i++) {

                    corola.appendChild(
                        crearDiv(
                            `damanoche-petalo damanoche-petalo-${i}`
                        )
                    );
                }


                corola.appendChild(
                    crearDiv(
                        "damanoche-centro"
                    )
                );


                florNoche.appendChild(
                    corola
                );


                flor.appendChild(
                    florNoche
                );
            }
        );


        const botones = [
            [65, 123, -25],
            [112, 94, -10],
            [178, 95, 14],
            [227, 133, 28],
            [151, 159, 6]
        ];


        botones.forEach(
            ([left, top, rotacion], indice) => {

                const boton =
                    crearDiv(
                        "damanoche-boton"
                    );


                boton.style.left =
                    `${left}px`;


                boton.style.top =
                    `${top}px`;


                boton.style.setProperty(
                    "--damanoche-boton-rot",
                    `${rotacion}deg`
                );


                boton.style.setProperty(
                    "--damanoche-delay",
                    `${indice * -.28}s`
                );


                flor.appendChild(
                    boton
                );
            }
        );


        flor.appendChild(
            crearDiv(
                "damanoche-hoja damanoche-hoja-izquierda"
            )
        );


        flor.appendChild(
            crearDiv(
                "damanoche-hoja damanoche-hoja-derecha"
            )
        );


        return flor;
    },


    /* =================================================
       GARDENIA BLANCA
    ================================================= */

    gardenia() {

        const flor =
            crearDiv("gardenia");


        flor.appendChild(
            crearDiv(
                "gardenia-tallo"
            )
        );


        flor.appendChild(
            crearDiv(
                "gardenia-hoja gardenia-hoja-izquierda"
            )
        );


        flor.appendChild(
            crearDiv(
                "gardenia-hoja gardenia-hoja-derecha"
            )
        );


        flor.appendChild(
            crearDiv(
                "gardenia-hoja gardenia-hoja-centro"
            )
        );


        const cabeza =
            crearDiv(
                "gardenia-cabeza"
            );


        const capas = [
            {
                cantidad: 8,
                radio: 47,
                escala: 1,
                clase: "gardenia-capa-exterior"
            },
            {
                cantidad: 6,
                radio: 29,
                escala: .82,
                clase: "gardenia-capa-media"
            },
            {
                cantidad: 5,
                radio: 14,
                escala: .66,
                clase: "gardenia-capa-centro"
            }
        ];


        capas.forEach(
            capa => {

                for (
                    let i = 0;
                    i < capa.cantidad;
                    i++
                ) {

                    const wrap =
                        crearDiv(
                            `gardenia-petalo-wrap ${capa.clase}`
                        );


                    wrap.style.setProperty(
                        "--gardenia-angulo",
                        `${i * (360 / capa.cantidad)}deg`
                    );


                    wrap.style.setProperty(
                        "--gardenia-radio",
                        `${capa.radio}px`
                    );


                    wrap.style.setProperty(
                        "--gardenia-escala",
                        capa.escala
                    );


                    wrap.appendChild(
                        crearDiv(
                            "gardenia-petalo"
                        )
                    );


                    cabeza.appendChild(
                        wrap
                    );
                }
            }
        );


        cabeza.appendChild(
            crearDiv(
                "gardenia-centro"
            )
        );


        flor.appendChild(
            cabeza
        );


        return flor;
    },


    /* =================================================
       JACARANDA
    ================================================= */

    jacaranda() {

        const flor =
            crearDiv("jacaranda");


        flor.appendChild(
            crearDiv(
                "jacaranda-rama-principal"
            )
        );


        [
            "jacaranda-rama-1",
            "jacaranda-rama-2",
            "jacaranda-rama-3",
            "jacaranda-rama-4",
            "jacaranda-rama-5",
            "jacaranda-rama-6"
        ].forEach(
            clase => {

                flor.appendChild(
                    crearDiv(
                        `jacaranda-rama ${clase}`
                    )
                );
            }
        );


        const posiciones = [
            [64, 95, .83, -19],
            [91, 67, .94, -13],
            [118, 101, .88, -8],
            [143, 55, 1.02, -2],
            [167, 88, .95, 5],
            [191, 61, .88, 11],
            [217, 99, .82, 18],
            [238, 126, .74, 23],
            [103, 138, .78, -12],
            [144, 133, .86, 1],
            [184, 137, .79, 13],
            [76, 145, .70, -24],
            [224, 70, .68, 19]
        ];


        posiciones.forEach(
            (
                [left, top, escala, rotacion],
                indice
            ) => {

                const florJacaranda =
                    crearDiv(
                        "jacaranda-flor"
                    );


                florJacaranda.style.left =
                    `${left}px`;


                florJacaranda.style.top =
                    `${top}px`;


                florJacaranda.style.setProperty(
                    "--jacaranda-escala",
                    escala
                );


                florJacaranda.style.setProperty(
                    "--jacaranda-rotacion",
                    `${rotacion}deg`
                );


                florJacaranda.style.setProperty(
                    "--jacaranda-delay",
                    `${(indice % 6) * -.31}s`
                );


                florJacaranda.appendChild(
                    crearDiv(
                        "jacaranda-tubo"
                    )
                );


                const corola =
                    crearDiv(
                        "jacaranda-corola"
                    );


                for (let p = 1; p <= 5; p++) {

                    corola.appendChild(
                        crearDiv(
                            `jacaranda-petalo jacaranda-petalo-${p}`
                        )
                    );
                }


                corola.appendChild(
                    crearDiv(
                        "jacaranda-centro"
                    )
                );


                florJacaranda.appendChild(
                    corola
                );


                flor.appendChild(
                    florJacaranda
                );
            }
        );


        for (let i = 1; i <= 5; i++) {

            const hoja =
                crearDiv(
                    `jacaranda-hoja jacaranda-hoja-${i}`
                );


            for (let f = 1; f <= 7; f++) {

                hoja.appendChild(
                    crearDiv(
                        `jacaranda-foliolo jacaranda-foliolo-${f}`
                    )
                );
            }


            flor.appendChild(
                hoja
            );
        }


        return flor;
    }
};