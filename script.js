document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces del menú de navegación
    const navLinks = document.querySelectorAll("nav a");

    // Recorrer cada enlace y agregar un evento de clic
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtener el id de la sección correspondiente al enlace
            const targetId = link.getAttribute("href").substring(1);
            
            // Obtener la sección correspondiente
            const targetSection = document.getElementById(targetId);
            
            // Verificar si la sección existe
            if (targetSection) {
                // Desplazarse suavemente a la sección
                targetSection.scrollIntoView({ behavior: "smooth" });
                
                // Resaltar la sección
                targetSection.classList.add("highlight");
                
                // Quitar el resaltado después de un tiempo
                setTimeout(function() {
                    targetSection.classList.remove("highlight");
                }, 2000); // 2000 milisegundos = 2 segundos
            }
        });
    });
});





