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
    reset: true
});

/* AVATAR */
sr.reveal('.fotoAvatar', {
    opacity: null,
    duration: 3000,
    rotate: {
        x: 90,
        z: 360
    },
    reset: true
});

/* SOBRE MI */
sr.reveal('.cajaSobreMi', {
    duration: 2000,
    origin: 'right',
    distance: '30%', 
    mobile: false,
    reset: true
});
/* SOBRE MI */
sr.reveal('.cajaSobreMi', { // Mobile
    duration: 2000,
    origin: 'right',
    distance: '10px', 
    desktop: false,
    reset: true
});

sr.reveal('.interesesPadre', {
    delay: 1000,
    duration: 2000,
    origin: 'right',
    distance: '-30%', 
    mobile: false,
    reset: true
});
sr.reveal('.interesesPadre', { // Mobile
    delay: 0,
    desktop: false,
    reset: true
});

/* SKILLS */
sr.reveal('#skills', {
    duration: 2500,
    reset: true
});

/* EDUCACION */
sr.reveal('#educacion', {
    duration: 2500,
    origin: 'right',
    distance: '30%', 
    mobile: false,
    reset: true
});
/* EDUCACION */
sr.reveal('#educacion', { // Mobile
    duration: 2500,
    reset: true
});

/* EXPERIENCIA */
sr.reveal('#experiencia', {
    duration: 2500,
    origin: 'left',
    distance: '30%', 
    reset: true
});

/* PORTFOLIO */
sr.reveal('.sitioWeb', {
    duration: 3000,
    scale: 1.1,
    reset: true
});

/* CONTACTO */
sr.reveal('.formulario', {
    duration: 1500,
    origin: 'right',
    distance: '25px',
    reset: true
});

sr.reveal('.mapa', {
    delay: 800,
    duration: 1500,
    origin: 'right',
    distance: '-30%',
    reset: true
});
