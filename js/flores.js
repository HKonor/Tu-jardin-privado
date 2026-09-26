/*
===========================================
        LIBRERÍA DE FLORES
===========================================

Flores disponibles:

- Girasol
- Tulipán morado
- Lirio blanco
- Flor de nube
- Peonía rosa

===========================================
*/


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
                    angulo *
                    Math.PI /
                    180
                ) *
                radio;


            const y =
                47 +
                Math.sin(
                    angulo *
                    Math.PI /
                    180
                ) *
                radio;


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


        const petaloIzqFondo =
            document.createElement("div");

        petaloIzqFondo.className =
            "tulipan-petalo petalo-fondo-izq";


        const petaloDerFondo =
            document.createElement("div");

        petaloDerFondo.className =
            "tulipan-petalo petalo-fondo-der";


        const petaloCentroIzq =
            document.createElement("div");

        petaloCentroIzq.className =
            "tulipan-petalo petalo-centro-izq";


        const petaloCentroDer =
            document.createElement("div");

        petaloCentroDer.className =
            "tulipan-petalo petalo-centro-der";


        const petaloFrontal =
            document.createElement("div");

        petaloFrontal.className =
            "tulipan-petalo petalo-frontal";


        const detalle1 =
            document.createElement("div");

        detalle1.className =
            "vena vena-1";


        const detalle2 =
            document.createElement("div");

        detalle2.className =
            "vena vena-2";


        const detalle3 =
            document.createElement("div");

        detalle3.className =
            "vena vena-3";


        petaloFrontal.appendChild(detalle1);
        petaloFrontal.appendChild(detalle2);
        petaloFrontal.appendChild(detalle3);


        cabeza.appendChild(petaloIzqFondo);
        cabeza.appendChild(petaloDerFondo);
        cabeza.appendChild(petaloCentroIzq);
        cabeza.appendChild(petaloCentroDer);
        cabeza.appendChild(petaloFrontal);


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


            const punta =
                document.createElement("span");

            punta.className =
                "lirio-antera";


            estambre.appendChild(
                punta
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


        ramas.forEach((datos) => {

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

            flor.appendChild(rama);

        });


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
                let p = 0;
                p < 5;
                p++
            ) {

                const petalo =
                    document.createElement("span");

                petalo.className =
                    `nube-petalo nube-petalo-${p + 1}`;

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
                start: 3.0,
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


        curvas.forEach((curva) => {

            for (
                let i = 0;
                i < curva.count;
                i++
            ) {

                const t =
                    i /
                    (curva.count - 1);


                const angulo =
                    curva.start +
                    (
                        curva.end -
                        curva.start
                    ) * t;


                let x =
                    curva.cx +
                    Math.cos(angulo) *
                    curva.rx;


                let y =
                    curva.cy +
                    Math.sin(angulo) *
                    curva.ry;


                x +=
                    (i % 2 === 0)
                        ? -3
                        : 3;


                y +=
                    (i % 3) - 1;


                const escala =
                    curva.baseScale +
                    (i % 4) * 0.06;


                const delay =
                    `${-(contadorDelay % 9) * 0.16}s`;


                agregarFlorecita(
                    x,
                    y,
                    escala,
                    delay
                );


                contadorDelay++;

            }

        });


        const relleno = [

            [78, 120, 0.68],
            [95, 112, 0.72],
            [109, 122, 0.76],
            [126, 112, 0.74],
            [141, 124, 0.79],
            [154, 116, 0.75],
            [171, 108, 0.78],
            [186, 119, 0.72],
            [201, 112, 0.74],
            [217, 121, 0.70],
            [232, 130, 0.68],
            [114, 153, 0.72],
            [132, 144, 0.76],
            [149, 151, 0.80],
            [166, 145, 0.78],
            [184, 151, 0.76],
            [200, 160, 0.72],
            [101, 166, 0.66],
            [214, 146, 0.66],
            [153, 98, 0.68],
            [167, 96, 0.66]

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


        /*
        =========================================
            CABEZA
        =========================================
        */

        const cabeza =
            document.createElement("div");

        cabeza.className =
            "peonia-cabeza";


        /*
        =========================================
            FUNCIÓN PARA CREAR CAPAS
        =========================================
        */

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


        /*
        =========================================
            3 CAPAS DE PÉTALOS
        =========================================
        */

        crearCapa(
            16,
            45,
            1,
            "peonia-capa-externa"
        );


        crearCapa(
            12,
            29,
            0.86,
            "peonia-capa-media"
        );


        crearCapa(
            9,
            14,
            0.70,
            "peonia-capa-interna"
        );


        /*
        =========================================
            CENTRO
        =========================================
        */

        const centro =
            document.createElement("div");

        centro.className =
            "peonia-centro";


        for (
            let i = 0;
            i < 8;
            i++
        ) {

            const petaloCentro =
                document.createElement("span");

            petaloCentro.className =
                "peonia-centro-petalo";


            petaloCentro.style.transform =
                `rotate(${i * 45}deg)`;


            centro.appendChild(
                petaloCentro
            );

        }


        cabeza.appendChild(
            centro
        );


        /*
        =========================================
            TALLO
        =========================================
        */

        const tallo =
            document.createElement("div");

        tallo.className =
            "peonia-tallo";


        /*
        =========================================
            HOJAS
        =========================================
        */

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

    }

};