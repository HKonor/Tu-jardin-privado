const Flores = {


    /*
    =========================================
                GIRASOL
    =========================================
    */

    girasol: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "girasol";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "girasol-cabeza";


        const cantidadPetalos = 20;


        for (
            let i = 0;
            i < cantidadPetalos;
            i++
        ) {

            const petalo =
                document.createElement("div");

            petalo.className =
                "girasol-petalo";


            const angulo =
                (360 / cantidadPetalos) * i;


            petalo.style.transform =
                `rotate(${angulo}deg)`;


            cabeza.appendChild(
                petalo
            );
        }


        const centro =
            document.createElement("div");

        centro.className =
            "girasol-centro";


        for (
            let i = 0;
            i < 65;
            i++
        ) {

            const semilla =
                document.createElement("div");

            semilla.className =
                "semilla";


            const angulo =
                i * 137.5;

            const radio =
                4 * Math.sqrt(i);

            const x =
                47 +
                Math.cos(
                    angulo * Math.PI / 180
                ) * radio;

            const y =
                47 +
                Math.sin(
                    angulo * Math.PI / 180
                ) * radio;


            semilla.style.left =
                x + "px";

            semilla.style.top =
                y + "px";


            centro.appendChild(
                semilla
            );
        }


        cabeza.appendChild(
            centro
        );


        const tallo =
            document.createElement("div");

        tallo.className =
            "girasol-tallo";


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "girasol-hoja hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "girasol-hoja hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            TULIPÁN MORADO
    =========================================
    */

    tulipan: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "tulipan";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "tulipan-cabeza";


        const clasesPetalos = [
            "petalo-fondo-izq",
            "petalo-fondo-der",
            "petalo-centro-izq",
            "petalo-centro-der",
            "petalo-frontal"
        ];


        clasesPetalos.forEach(
            (clase) => {

                const petalo =
                    document.createElement("div");

                petalo.className =
                    `tulipan-petalo ${clase}`;


                if (
                    clase ===
                    "petalo-frontal"
                ) {

                    for (
                        let i = 1;
                        i <= 3;
                        i++
                    ) {

                        const vena =
                            document.createElement("div");

                        vena.className =
                            `vena vena-${i}`;

                        petalo.appendChild(
                            vena
                        );
                    }
                }


                cabeza.appendChild(
                    petalo
                );
            }
        );


        const tallo =
            document.createElement("div");

        tallo.className =
            "tulipan-tallo";


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "tulipan-hoja tulipan-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "tulipan-hoja tulipan-hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            LIRIO BLANCO
    =========================================
    */

    lirio: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "lirio";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "lirio-cabeza";


        for (
            let i = 1;
            i <= 6;
            i++
        ) {

            const petalo =
                document.createElement("div");

            petalo.className =
                `lirio-petalo lirio-petalo-${i}`;

            cabeza.appendChild(
                petalo
            );
        }


        const centro =
            document.createElement("div");

        centro.className =
            "lirio-centro";

        cabeza.appendChild(
            centro
        );


        const pistilo =
            document.createElement("div");

        pistilo.className =
            "lirio-pistilo";

        cabeza.appendChild(
            pistilo
        );


        for (
            let i = 1;
            i <= 6;
            i++
        ) {

            const estambre =
                document.createElement("div");

            estambre.className =
                `lirio-estambre lirio-estambre-${i}`;


            const antera =
                document.createElement("span");

            antera.className =
                "lirio-antera";


            estambre.appendChild(
                antera
            );

            cabeza.appendChild(
                estambre
            );
        }


        const tallo =
            document.createElement("div");

        tallo.className =
            "lirio-tallo";


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "lirio-hoja lirio-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "lirio-hoja lirio-hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            FLOR DE NUBE
    =========================================
    */

    nube: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "flor-nube";


        const tallo =
            document.createElement("div");

        tallo.className =
            "nube-tallo-principal";

        flor.appendChild(tallo);


        const ramas = [
            { left: 150, top: 140, rotate: -52, height: 120 },
            { left: 150, top: 132, rotate: -40, height: 138 },
            { left: 150, top: 125, rotate: -28, height: 150 },
            { left: 150, top: 118, rotate: -16, height: 162 },
            { left: 150, top: 114, rotate: -6, height: 170 },
            { left: 150, top: 114, rotate: 8, height: 170 },
            { left: 150, top: 118, rotate: 18, height: 162 },
            { left: 150, top: 124, rotate: 30, height: 152 },
            { left: 150, top: 132, rotate: 42, height: 140 },
            { left: 150, top: 140, rotate: 54, height: 122 }
        ];


        ramas.forEach(
            (datos) => {

                const rama =
                    document.createElement("div");

                rama.className =
                    "nube-rama";

                rama.style.left =
                    datos.left + "px";

                rama.style.top =
                    datos.top + "px";

                rama.style.height =
                    datos.height + "px";

                rama.style.transform =
                    `rotate(${datos.rotate}deg)`;

                flor.appendChild(
                    rama
                );
            }
        );


        const ramo =
            document.createElement("div");

        ramo.className =
            "nube-ramo";


        function agregarFlorecita(
            x,
            y,
            escala,
            delay
        ) {

            const envoltura =
                document.createElement("div");

            envoltura.className =
                "nube-florecita-wrap";

            envoltura.style.left =
                x + "px";

            envoltura.style.top =
                y + "px";

            envoltura.style.setProperty(
                "--escala",
                escala
            );

            envoltura.style.setProperty(
                "--delay",
                delay
            );


            const florecita =
                document.createElement("div");

            florecita.className =
                "nube-florecita";


            for (
                let p = 1;
                p <= 5;
                p++
            ) {

                const petalo =
                    document.createElement("span");

                petalo.className =
                    `nube-petalo nube-petalo-${p}`;

                florecita.appendChild(
                    petalo
                );
            }


            const centro =
                document.createElement("span");

            centro.className =
                "nube-centro";

            florecita.appendChild(
                centro
            );

            envoltura.appendChild(
                florecita
            );

            ramo.appendChild(
                envoltura
            );
        }


        const curvas = [
            {
                cx: 88,
                cy: 132,
                rx: 58,
                ry: 24,
                start: 2.8,
                end: 5.95,
                count: 18,
                baseScale: 0.78
            },
            {
                cx: 142,
                cy: 102,
                rx: 80,
                ry: 30,
                start: 2.95,
                end: 6.1,
                count: 22,
                baseScale: 0.82
            },
            {
                cx: 219,
                cy: 124,
                rx: 60,
                ry: 24,
                start: 3.2,
                end: 6.28,
                count: 18,
                baseScale: 0.76
            },
            {
                cx: 184,
                cy: 160,
                rx: 52,
                ry: 20,
                start: 3,
                end: 6.12,
                count: 15,
                baseScale: 0.78
            },
            {
                cx: 120,
                cy: 170,
                rx: 46,
                ry: 18,
                start: 2.9,
                end: 5.85,
                count: 14,
                baseScale: 0.72
            }
        ];


        let contadorDelay = 0;


        curvas.forEach(
            (curva) => {

                for (
                    let i = 0;
                    i < curva.count;
                    i++
                ) {

                    const t =
                        i / (curva.count - 1);

                    const angulo =
                        curva.start +
                        (curva.end - curva.start) * t;

                    let x =
                        curva.cx +
                        Math.cos(angulo) * curva.rx;

                    let y =
                        curva.cy +
                        Math.sin(angulo) * curva.ry;

                    x +=
                        i % 2 === 0
                            ? -3
                            : 3;

                    y +=
                        (i % 3) - 1;

                    const escala =
                        curva.baseScale +
                        (i % 4) * 0.06;

                    agregarFlorecita(
                        x,
                        y,
                        escala,
                        `${-(contadorDelay % 9) * 0.16}s`
                    );

                    contadorDelay++;
                }

            }
        );


        const relleno = [
            [78, 120, .68],
            [95, 112, .72],
            [109, 122, .76],
            [126, 112, .74],
            [141, 124, .79],
            [154, 116, .75],
            [171, 108, .78],
            [186, 119, .72],
            [201, 112, .74],
            [217, 121, .70],
            [232, 130, .68],
            [114, 153, .72],
            [132, 144, .76],
            [149, 151, .80],
            [166, 145, .78],
            [184, 151, .76],
            [200, 160, .72],
            [101, 166, .66],
            [214, 146, .66],
            [153, 98, .68],
            [167, 96, .66]
        ];


        relleno.forEach(
            (item, index) => {

                agregarFlorecita(
                    item[0],
                    item[1],
                    item[2],
                    `${-(index % 7) * 0.14}s`
                );

            }
        );


        flor.appendChild(ramo);


        const hoja1 =
            document.createElement("div");

        hoja1.className =
            "nube-hoja nube-hoja-1";


        const hoja2 =
            document.createElement("div");

        hoja2.className =
            "nube-hoja nube-hoja-2";


        flor.appendChild(hoja1);
        flor.appendChild(hoja2);

        return flor;
    },



    /*
    =========================================
            PEONÍA ROSA
    =========================================
    */

    peonia: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "peonia";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "peonia-cabeza";


        function crearCapa(
            cantidad,
            radio,
            escala,
            clase
        ) {

            for (
                let i = 0;
                i < cantidad;
                i++
            ) {

                const envoltura =
                    document.createElement("div");

                envoltura.className =
                    `peonia-petalo-wrap ${clase}`;


                const angulo =
                    (360 / cantidad) * i;

                envoltura.style.setProperty(
                    "--angulo",
                    `${angulo}deg`
                );

                envoltura.style.setProperty(
                    "--radio",
                    `${radio}px`
                );

                envoltura.style.setProperty(
                    "--escala",
                    escala
                );

                envoltura.style.setProperty(
                    "--delay",
                    `${-(i % 7) * 0.18}s`
                );


                const petalo =
                    document.createElement("div");

                petalo.className =
                    "peonia-petalo";

                envoltura.appendChild(
                    petalo
                );

                cabeza.appendChild(
                    envoltura
                );
            }
        }


        crearCapa(
            16,
            45,
            1,
            "peonia-capa-externa"
        );

        crearCapa(
            12,
            29,
            .86,
            "peonia-capa-media"
        );

        crearCapa(
            9,
            14,
            .70,
            "peonia-capa-interna"
        );


        const centro =
            document.createElement("div");

        centro.className =
            "peonia-centro";


        for (
            let i = 0;
            i < 8;
            i++
        ) {

            const petalo =
                document.createElement("span");

            petalo.className =
                "peonia-centro-petalo";

            petalo.style.transform =
                `rotate(${i * 45}deg)`;

            centro.appendChild(
                petalo
            );
        }


        cabeza.appendChild(
            centro
        );


        const tallo =
            document.createElement("div");

        tallo.className =
            "peonia-tallo";


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "peonia-hoja peonia-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "peonia-hoja peonia-hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            CAMELIA ROJA
    =========================================
    */

    camelia: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "camelia";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "camelia-cabeza";


        for (
            let i = 1;
            i <= 8;
            i++
        ) {

            const petalo =
                document.createElement("div");

            petalo.className =
                `camelia-petalo camelia-petalo-exterior camelia-exterior-${i}`;

            petalo.style.setProperty(
                "--delay",
                `${-(i * .17)}s`
            );

            cabeza.appendChild(
                petalo
            );
        }


        for (
            let i = 1;
            i <= 6;
            i++
        ) {

            const petalo =
                document.createElement("div");

            petalo.className =
                `camelia-petalo camelia-petalo-interior camelia-interior-${i}`;

            petalo.style.setProperty(
                "--delay",
                `${-(i * .21)}s`
            );

            cabeza.appendChild(
                petalo
            );
        }


        const centro =
            document.createElement("div");

        centro.className =
            "camelia-centro";


        for (
            let i = 0;
            i < 30;
            i++
        ) {

            const estambre =
                document.createElement("span");

            estambre.className =
                "camelia-estambre";


            const angulo =
                i * 137.5;

            const radio =
                2.4 * Math.sqrt(i);

            const radianes =
                angulo * Math.PI / 180;

            const x =
                23 +
                Math.cos(radianes) * radio;

            const y =
                23 +
                Math.sin(radianes) * radio;


            estambre.style.left =
                x + "px";

            estambre.style.top =
                y + "px";


            centro.appendChild(
                estambre
            );
        }


        cabeza.appendChild(
            centro
        );


        const tallo =
            document.createElement("div");

        tallo.className =
            "camelia-tallo";


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "camelia-hoja camelia-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "camelia-hoja camelia-hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            JAZMÍN BLANCO
    =========================================
    */

    jazmin: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "jazmin";


        const tallo =
            document.createElement("div");

        tallo.className =
            "jazmin-tallo";

        flor.appendChild(
            tallo
        );


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "jazmin-cabeza";


        for (
            let i = 1;
            i <= 8;
            i++
        ) {

            const petalo =
                document.createElement("span");

            petalo.className =
                `jazmin-petalo jazmin-petalo-${i}`;

            cabeza.appendChild(
                petalo
            );
        }


        const centro =
            document.createElement("div");

        centro.className =
            "jazmin-centro";


        for (
            let i = 0;
            i < 22;
            i++
        ) {

            const estambre =
                document.createElement("span");

            estambre.className =
                "jazmin-estambre";


            const angulo =
                i * 137.5;

            const radio =
                2.1 * Math.sqrt(i);

            const radianes =
                angulo * Math.PI / 180;

            const x =
                18 +
                Math.cos(radianes) * radio;

            const y =
                18 +
                Math.sin(radianes) * radio;


            estambre.style.left =
                x + "px";

            estambre.style.top =
                y + "px";


            centro.appendChild(
                estambre
            );
        }


        cabeza.appendChild(
            centro
        );

        flor.appendChild(
            cabeza
        );


        const ramaIzquierda =
            document.createElement("div");

        ramaIzquierda.className =
            "jazmin-rama jazmin-rama-izquierda";

        flor.appendChild(
            ramaIzquierda
        );


        const botonIzquierdo =
            document.createElement("div");

        botonIzquierdo.className =
            "jazmin-boton jazmin-boton-izquierdo";

        for (
            let i = 1;
            i <= 3;
            i++
        ) {

            const petalo =
                document.createElement("span");

            petalo.className =
                `jazmin-boton-petalo jazmin-boton-petalo-${i}`;

            botonIzquierdo.appendChild(
                petalo
            );
        }

        flor.appendChild(
            botonIzquierdo
        );


        const ramaDerecha =
            document.createElement("div");

        ramaDerecha.className =
            "jazmin-rama jazmin-rama-derecha";

        flor.appendChild(
            ramaDerecha
        );


        const botonDerecho =
            document.createElement("div");

        botonDerecho.className =
            "jazmin-boton jazmin-boton-derecho";

        for (
            let i = 1;
            i <= 3;
            i++
        ) {

            const petalo =
                document.createElement("span");

            petalo.className =
                `jazmin-boton-petalo jazmin-boton-petalo-${i}`;

            botonDerecho.appendChild(
                petalo
            );
        }

        flor.appendChild(
            botonDerecho
        );


        const botonCentro =
            document.createElement("div");

        botonCentro.className =
            "jazmin-boton jazmin-boton-centro";

        for (
            let i = 1;
            i <= 3;
            i++
        ) {

            const petalo =
                document.createElement("span");

            petalo.className =
                `jazmin-boton-petalo jazmin-boton-petalo-${i}`;

            botonCentro.appendChild(
                petalo
            );
        }

        flor.appendChild(
            botonCentro
        );


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "jazmin-hoja jazmin-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "jazmin-hoja jazmin-hoja-derecha";


        flor.appendChild(
            hojaIzquierda
        );

        flor.appendChild(
            hojaDerecha
        );

        return flor;
    },



    /*
    =========================================
            ORQUÍDEA ROSA
    =========================================
    */

    orquidea: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "orquidea";


        const tallo =
            document.createElement("div");

        tallo.className =
            "orquidea-tallo";


        const rama =
            document.createElement("div");

        rama.className =
            "orquidea-rama";


        const cabeza =
            document.createElement("div");

        cabeza.className =
            "orquidea-cabeza";


        const clasesPetalos = [
            "orquidea-petalo superior",
            "orquidea-petalo lateral-izq",
            "orquidea-petalo lateral-der",
            "orquidea-petalo inferior-izq",
            "orquidea-petalo inferior-der",
            "orquidea-labelo"
        ];


        clasesPetalos.forEach(
            (clase) => {

                const petalo =
                    document.createElement("div");

                petalo.className =
                    clase;

                cabeza.appendChild(
                    petalo
                );
            }
        );


        const centro =
            document.createElement("div");

        centro.className =
            "orquidea-centro";

        cabeza.appendChild(
            centro
        );


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "orquidea-hoja orquidea-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "orquidea-hoja orquidea-hoja-derecha";


        flor.appendChild(tallo);
        flor.appendChild(rama);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);
        flor.appendChild(cabeza);

        return flor;
    },



    /*
    =========================================
            LAVANDA VIOLETA
    =========================================
    */

    lavanda: function () {

        const flor =
            document.createElement("div");

        flor.className =
            "lavanda";


        const tallosInfo = [
            { clase: "lavanda-tallo lavanda-tallo-1", x: 70, top: 70, buds: 10 },
            { clase: "lavanda-tallo lavanda-tallo-2", x: 110, top: 45, buds: 12 },
            { clase: "lavanda-tallo lavanda-tallo-3", x: 150, top: 65, buds: 10 },
            { clase: "lavanda-tallo lavanda-tallo-4", x: 190, top: 85, buds: 9 }
        ];


        tallosInfo.forEach(
            (info, index) => {

                const talloWrap =
                    document.createElement("div");

                talloWrap.className =
                    info.clase;


                talloWrap.style.left =
                    info.x + "px";

                talloWrap.style.top =
                    info.top + "px";


                const tallo =
                    document.createElement("div");

                tallo.className =
                    "lavanda-linea";

                talloWrap.appendChild(
                    tallo
                );


                for (
                    let i = 0;
                    i < info.buds;
                    i++
                ) {

                    const boton =
                        document.createElement("span");

                    boton.className =
                        `lavanda-brote ${
                            i % 2 === 0
                                ? "izq"
                                : "der"
                        }`;


                    boton.style.top =
                        `${8 + i * 12}px`;

                    talloWrap.appendChild(
                        boton
                    );
                }


                flor.appendChild(
                    talloWrap
                );
            }
        );


        const baseTallo =
            document.createElement("div");

        baseTallo.className =
            "lavanda-base-tallo";

        flor.appendChild(
            baseTallo
        );


        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "lavanda-hoja lavanda-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "lavanda-hoja lavanda-hoja-derecha";


        flor.appendChild(
            hojaIzquierda
        );

        flor.appendChild(
            hojaDerecha
        );

        return flor;
    }

};