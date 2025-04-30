document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Función para alternar el menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    // Evento para el botón del menú
    menuToggle.addEventListener('click', toggleMenu);

    // Función para cerrar el menú después de hacer clic en un enlace
    function closeMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }

    // Eventos para los enlaces del menú
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                closeMenu();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Cerrar el menú al hacer scroll
    window.addEventListener('scroll', function() {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}); 