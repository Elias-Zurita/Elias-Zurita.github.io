window.sr = ScrollReveal();

/* HEADER */
sr.reveal('header', {
    duration: 3000,
    reset: true,
    origin: 'top',
    distance: '100px',
});

/* PRESENTACION */
sr.reveal('.presentacion', {
    duration: 3000,
    origin: 'right',
    distance: '-20%', 
});

/* AVATAR */
sr.reveal('.fotoAvatar', {
    opacity: null,
    duration: 3000,
    rotate: {
        x: 90,
        z: 360
    }
});

/* SOBRE MI */
sr.reveal('.cajaSobreMi', {
    duration: 2000,
    origin: 'right',
    distance: '30%', 
    mobile: false
});
/* SOBRE MI */
sr.reveal('.cajaSobreMi', { // Mobile
    duration: 2000,
    origin: 'right',
    distance: '10px', 
    desktop: false
});

sr.reveal('.interesesPadre', {
    delay: 1000,
    duration: 2000,
    origin: 'right',
    distance: '-30%', 
    mobile: false
});
sr.reveal('.interesesPadre', { // Mobile
    delay: 0,
    desktop: false
});

/* SKILLS */
sr.reveal('#skills', {
    duration: 2500,
});

/* EDUCACION */
sr.reveal('#educacion', {
    duration: 2500,
    origin: 'right',
    distance: '30%', 
    mobile: false
});
/* EDUCACION */
sr.reveal('#educacion', { // Mobile
    duration: 2500,
});

/* EXPERIENCIA */
sr.reveal('#experiencia', {
    duration: 2500,
    origin: 'left',
    distance: '30%', 
});

/* PORTFOLIO */
sr.reveal('.sitioWeb', {
    duration: 3000,
    scale: 1.1,
});

/* CONTACTO */
sr.reveal('.formulario', {
    duration: 1500,
    origin: 'right',
    distance: '25px',
});

sr.reveal('.mapa', {
    delay: 800,
    duration: 1500,
    origin: 'right',
    distance: '-30%',
});
