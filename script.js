//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("node");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

let section = document.querySelectorAll('section');

// Animaciones con el scrolling
window.onscroll = function(){

    // Aparicion de secciones con el scroll
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            //secciones que aparecen con el scroll
            sec.classList.add('show-animate');
        }  // con el else vuelven a aparecer cuando volves a pasar con el scroll
        else{
            sec.classList.remove('show-animate');
        }
    })
    efectoHabilidades(); // Animacion de habilidades
} 