/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




// Mostrar/ocultar el formulario flotante
const mostrarLogin = () => {
    const fondoOscuro = document.getElementById('fondo-oscuro');
    fondoOscuro.classList.toggle('visible');
    document.querySelector('.section__formulario--log-in').classList.add('visible');
    document.querySelector('.section__formulario--sign-up').classList.remove('visible');
};

// Cambiar entre formularios
const cambiarFormulario = (action) => {
    if (action === 'login') {
        document.querySelector('.section__formulario--log-in').classList.add('visible');
        document.querySelector('.section__formulario--sign-up').classList.remove('visible');
    } else if (action === 'signup') {
        document.querySelector('.section__formulario--sign-up').classList.add('visible');
        document.querySelector('.section__formulario--log-in').classList.remove('visible');
    }
};

// Cerrar el formulario al hacer clic fuera
const fondoOscuro = document.getElementById('fondo-oscuro');
fondoOscuro.addEventListener('click', (e) => {
    if (e.target === fondoOscuro) {
        fondoOscuro.classList.remove('visible');
    }
});