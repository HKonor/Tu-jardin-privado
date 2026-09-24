/*
===========================================
        LIBRERÍA DE FLORES
===========================================

Aquí iremos agregando nuevas flores.

Actualmente disponibles:

- girasol

Próximamente podemos agregar:

- rosa
- tulipan
- margarita
- lirio
- lavanda
===========================================
*/


const Flores = {


    /* =====================================
                GIRASOL
    ===================================== */

    girasol: function () {

        const flor = document.createElement("div");

        flor.className = "girasol";


        // CABEZA DEL GIRASOL

        const cabeza = document.createElement("div");

        cabeza.className = "girasol-cabeza";


        // CREAR PÉTALOS

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


            cabeza.appendChild(petalo);

        }


        // CENTRO DEL GIRASOL

        const centro =
            document.createElement("div");

        centro.className =
            "girasol-centro";


        // CREAR SEMILLAS

        for (let i = 0; i < 65; i++) {

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


            centro.appendChild(semilla);

        }


        cabeza.appendChild(centro);


        // TALLO

        const tallo =
            document.createElement("div");

        tallo.className =
            "girasol-tallo";


        // HOJA IZQUIERDA

        const hojaIzquierda =
            document.createElement("div");

        hojaIzquierda.className =
            "girasol-hoja hoja-izquierda";


        // HOJA DERECHA

        const hojaDerecha =
            document.createElement("div");

        hojaDerecha.className =
            "girasol-hoja hoja-derecha";


        // UNIR TODO

        flor.appendChild(tallo);

        flor.appendChild(hojaIzquierda);

        flor.appendChild(hojaDerecha);

        flor.appendChild(cabeza);


        return flor;

    }

};