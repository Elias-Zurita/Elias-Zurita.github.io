//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("responsive");
        habilidades[1].classList.add("bases");
        habilidades[2].classList.add("frontend");
        habilidades[3].classList.add("equipo");
        habilidades[4].classList.add("creatividad");
        habilidades[5].classList.add("adaptabilidad");
        habilidades[6].classList.add("autoaprendisaje");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("organizacion");
    }
}

// Animaciones con el scrolling
window.onscroll = function(){
    efectoHabilidades(); // Animacion de habilidades
} 

// Cerrar el menú Header cuando se hace clic en un enlace
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    });
});

// Cerrar el menú Header cuando se hace clic fuera del menú
document.addEventListener('click', function (event) {
    var navbarCollapse = document.getElementById("navbarSupportedContent");
    var targetElement = event.target;
    if (navbarCollapse.classList.contains("show") && !targetElement.closest('.navbar')) {
        navbarCollapse.classList.remove("show");
    }
});