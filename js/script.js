'use strict'

const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');
if (menuLinks.length > 0 ) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo ({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}




const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-list');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}