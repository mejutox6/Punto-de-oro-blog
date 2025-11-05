/* 
 *  SCROLL SUAVE AL HACER CLIC EN EL MENÚ
 */

document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault(); // evita el salto brusco
        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});


/* 
 *  BOTÓN "VOLVER ARRIBA"
 */

const btnSubir = document.getElementById('btnSubir');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnSubir.style.display = 'block';
    } else {
        btnSubir.style.display = 'none';
    }
});

btnSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* 
 *  MODO OSCURO
 *  Guardado en localStorage
 */

const checkModo = document.getElementById("checkModo");

const modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "oscuro") {
    document.body.classList.add("oscuro");
    checkModo.checked = true;
}

checkModo.addEventListener("change", () => {
    if (checkModo.checked) {
        document.body.classList.add("oscuro");
        localStorage.setItem("modo", "oscuro");
    } else {
        document.body.classList.remove("oscuro");
        localStorage.setItem("modo", "claro");
    }
});


/* 
 *  ACCESIBILIDAD DEL SWITCH
 *  Permite cambiar el tema usando teclado
 */

const sliderSwitch = document.querySelector(".slider");

// Permite activar el switch con Enter o Espacio
sliderSwitch.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        checkModo.checked = !checkModo.checked;
        checkModo.dispatchEvent(new Event("change"));

        e.preventDefault(); // Evita que ESPACIO haga scroll en la página
    }
});
