window.sr = ScrollReveal();

// HEADER
sr.reveal('header', {
    duration: 3000,
    reset: false,
    origin: 'top',
    distance: '100px',
    mobile: false
});

// PRESENTACION 
sr.reveal('.presentacion', {
    duration: 3000,
    origin: 'right',
    distance: '-20%', 
    reset: false,
    mobile: false
});
sr.reveal('.presentacion', { // mobile
    duration: 3000,
    origin: 'right',
    distance: '-20%', 
    reset: false,
    mobile: false,
    desktop: false,
});

// AVATAR
sr.reveal('.fotoAvatar', {
    opacity: null,
    duration: 3000,
    rotate: {
        x: 90,
        z: 360
    },
    reset: false,
    mobile: false
});
sr.reveal('.fotoAvatar', { // mobile
    opacity: null,
    duration: 3000,
    rotate: {
        x: 90,
        z: 360
    },
    reset: false,
    mobile: true,
    desktop: false
});

// SOBRE MI 
sr.reveal('.cajaSobreMi', {
    duration: 2000,
    origin: 'right',
    distance: '30%', 
    mobile: false,
    reset: false
});
sr.reveal('.cajaSobreMi', { // mobile
    duration: 2000,
    origin: 'right',
    distance: '10px', 
    desktop: false,
    reset: false,
    mobile: true,
    desktop: false,
});

// INTERESES
sr.reveal('.interesesPadre', {
    delay: 1000,
    duration: 2000,
    origin: 'right',
    distance: '-30%', 
    mobile: false,
    reset: false
});
sr.reveal('.interesesPadre', { // mobile
    delay: 0,
    desktop: false,
    reset: false,
    mobile: true,
    desktop: false,
});

// SKILLS 
sr.reveal('#skills', {
    duration: 2500,
    reset: false,
    mobile: false
});
sr.reveal('#skills', { // mobile
    duration: 2500,
    reset: false,
    mobile: true,
    desktop: false,
});

// EDUCACION
sr.reveal('#educacion', {
    duration: 2500,
    origin: 'right',
    distance: '30%', 
    mobile: false,
    reset: false
});
sr.reveal('#educacion', { // mobile
    duration: 2500,
    reset: false,
    mobile: true,
    desktop: false,
});

// EXPERIENCIA
sr.reveal('#experiencia', {
    duration: 2500,
    origin: 'left',
    distance: '30%', 
    reset: false,
    mobile: false
});
sr.reveal('#experiencia', { // mobile
    duration: 2500,
    origin: 'left',
    distance: '30%', 
    reset: false,
    mobile: true,
    desktop: false,
});

// PORTFOLIO
sr.reveal('.sitioWeb', {
    duration: 3000,
    scale: 1.1,
    reset: false,
    mobile: false
});
sr.reveal('.sitioWeb', { // mobile
    duration: 3000,
    scale: 1.1,
    reset: false,
    mobile: true,
    desktop: false,
});

// CONTACTO 
sr.reveal('.formulario', {
    duration: 1500,
    origin: 'right',
    distance: '25px',
    reset: false,
    mobile: false
});
sr.reveal('.formulario', { // mobile
    duration: 1500,
    origin: 'right',
    distance: '25px',
    reset: false,
    mobile: true,
    desktop: false,
});

// MAPA
sr.reveal('.mapa', {
    delay: 800,
    duration: 1500,
    origin: 'right',
    distance: '-30%',
    reset: false,
    mobile: false
});
sr.reveal('.mapa', { // mobile
    delay: 800,
    duration: 1500,
    origin: 'right',
    distance: '-30%',
    reset: false,
    mobile: true,
    desktop: false,
});