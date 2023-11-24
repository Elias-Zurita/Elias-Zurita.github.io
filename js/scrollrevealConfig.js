window.sr = ScrollReveal();
    /* HEADER */
    sr.reveal('header',{ 
        duration: 3000,
        reset: true,
        origin: 'top',
        distance: '100px'
    });
    /* PRESENTACION */
    sr.reveal('.presentacion',{ 
        duration: 3000,
        reset: true,
        origin: 'right',
        distance: '-400px'
    });
      /* AVATAR */
      sr.reveal('.fotoAvatar',{
        opacity: null,
        reset: true,
        duration: 3000,
        rotate: {
            x: 90,
            z: 360
        }
    });
    /* SOBRE MI */
    sr.reveal('.cajaSobreMi',{ 
        duration: 2000,
        reset: true,
        origin: 'right',
        distance: '150%'
    });
    sr.reveal('.interesesPadre',{ 
        delay: 1000,
        duration: 2000,
        reset: true,
        origin: 'right',
        distance: '-150%'
    });
    /* SKILLS */
    sr.reveal('#skills',{ 
        duration: 2500,
        reset: true,
    });
    /* EDUCACION */
    sr.reveal('#educacion',{ 
        duration: 2500,
        reset: true,
        origin: 'right',
        distance: '150%'
    });
    /* EXPERIENCIA */
    sr.reveal('#experiencia',{ 
        duration: 2500,
        reset: true,
        origin: 'left',
        distance: '150%'
    });
    /* PORTFOLIO */
    sr.reveal('.sitioWeb',{ 
        duration: 2500,
        reset: true,
        origin: 'top',
    });
    /* CONTACTO */
    sr.reveal('.formulario',{ 
        duration: 1500,
        reset: true,
        origin: 'right',
        distance: '150%'
    });
    sr.reveal('.mapa',{ 
        delay: 1000,
        duration: 1500,
        reset: true,
        origin: 'right',
        distance: '-150%'
    });