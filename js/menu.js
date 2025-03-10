document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        if (menu.classList.contains('active')) {
            menuClose.style.display = 'block'; 
        } else {
            menuClose.style.display = 'none';  
        }
    });

    menuClose.addEventListener('click', function () {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuClose.style.display = 'none'; 
    });

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuClose.style.display = 'none'; 
        });
    });
});
