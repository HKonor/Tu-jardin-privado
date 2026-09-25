/*
===========================================
        LIBRERÍA DE FLORES
===========================================

Flores disponibles:

- Girasol
- Tulipán morado
- Lirio blanco

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


        /*
        =========================================
            CABEZA
        =========================================
        */

        const cabeza =
            document.createElement("div");

        cabeza.className =
            "girasol-cabeza";


        /*
        =========================================
            PÉTALOS
        =========================================
        */

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


        /*
        =========================================
            CENTRO
        =========================================
        */

        const centro =
            document.createElement("div");

        centro.className =
            "girasol-centro";


        /*
        =========================================
            SEMILLAS
        =========================================
        */

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


        /*
        =========================================
            TALLO
        =========================================
        */

        const tallo =
            document.createElement("div");

        tallo.className =
            "girasol-tallo";


        /*
        =========================================
            HOJAS
        =========================================
        */

        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "girasol-hoja hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "girasol-hoja hoja-derecha";


        /*
        =========================================
            UNIR
        =========================================
        */

        flor.appendChild(
            tallo
        );

        flor.appendChild(
            hojaIzquierda
        );

        flor.appendChild(
            hojaDerecha
        );

        flor.appendChild(
            cabeza
        );


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


        /*
        =========================================
            CABEZA
        =========================================
        */

        const cabeza =
            document.createElement("div");

        cabeza.className =
            "tulipan-cabeza";


        /*
        =========================================
            PÉTALOS
        =========================================
        */

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


        /*
        =========================================
            VENAS DEL TULIPÁN
        =========================================
        */

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


        petaloFrontal.appendChild(
            detalle1
        );

        petaloFrontal.appendChild(
            detalle2
        );

        petaloFrontal.appendChild(
            detalle3
        );


        cabeza.appendChild(
            petaloIzqFondo
        );

        cabeza.appendChild(
            petaloDerFondo
        );

        cabeza.appendChild(
            petaloCentroIzq
        );

        cabeza.appendChild(
            petaloCentroDer
        );

        cabeza.appendChild(
            petaloFrontal
        );


        /*
        =========================================
            TALLO
        =========================================
        */

        const tallo =
            document.createElement("div");

        tallo.className =
            "tulipan-tallo";


        /*
        =========================================
            HOJAS
        =========================================
        */

        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "tulipan-hoja tulipan-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "tulipan-hoja tulipan-hoja-derecha";


        flor.appendChild(
            tallo
        );

        flor.appendChild(
            hojaIzquierda
        );

        flor.appendChild(
            hojaDerecha
        );

        flor.appendChild(
            cabeza
        );


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


        /*
        =========================================
            CABEZA
        =========================================
        */

        const cabeza =
            document.createElement("div");

        cabeza.className =
            "lirio-cabeza";


        /*
        =========================================
            PÉTALOS
        =========================================
        */

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


        /*
        =========================================
            CENTRO
        =========================================
        */

        const centro =
            document.createElement("div");

        centro.className =
            "lirio-centro";


        cabeza.appendChild(
            centro
        );


        /*
        =========================================
            PISTILO
        =========================================
        */

        const pistilo =
            document.createElement("div");

        pistilo.className =
            "lirio-pistilo";


        cabeza.appendChild(
            pistilo
        );


        /*
        =========================================
            ESTAMBRES
        =========================================
        */

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


        /*
        =========================================
            TALLO
        =========================================
        */

        const tallo =
            document.createElement("div");

        tallo.className =
            "lirio-tallo";


        /*
        =========================================
            HOJAS
        =========================================
        */

        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "lirio-hoja lirio-hoja-izquierda";


        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "lirio-hoja lirio-hoja-derecha";


        /*
        =========================================
            UNIR TODO
        =========================================
        */

        flor.appendChild(
            tallo
        );

        flor.appendChild(
            hojaIzquierda
        );

        flor.appendChild(
            hojaDerecha
        );

        flor.appendChild(
            cabeza
        );


        return flor;

    }

};