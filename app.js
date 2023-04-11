const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const grande = document.querySelector("#grande");

function cambiarClasesG1() {
    if (!grande.classList.contains("g1")) {
        grande.classList.remove("g2", "g3");
        grande.classList.add("g1");
        boton.classList.add("activo");
        boton2.classList.remove("activo");
        boton3.classList.remove("activo");
    }
}

function cambiarClasesG2() {
    if (!grande.classList.contains("g2")) {
        grande.classList.remove("g1", "g3");
        grande.classList.add("g2");
        boton.classList.remove("activo");
        boton2.classList.add("activo");
        boton3.classList.remove("activo");
    }
}

function cambiarClasesG3() {
    if (!grande.classList.contains("g3")) {
        grande.classList.remove("g1", "g2");
        grande.classList.add("g3");
        boton.classList.remove("activo");
        boton2.classList.remove("activo");
        boton3.classList.add("activo");
    }
}

boton.addEventListener("click", cambiarClasesG1);
boton2.addEventListener("click", cambiarClasesG2);
boton3.addEventListener("click", cambiarClasesG3);
