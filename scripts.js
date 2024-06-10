document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".main-nav ul li a");

    // Toggle navigation menu on hamburger menu click
    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show-nav");
    });

    // Hide navigation menu on navigation item click
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navLinks.classList.remove("show-nav");
        });
    });
});

// Toggle visibility of elements by ID
function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const avalieForm = document.getElementById("avalieForm");
    avalieForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(avalieForm);
        const nome = formData.get("nome");
        const email = formData.get("email");
        const comentario = formData.get("comentario");

        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor

        // Exemplo de feedback direto (não recomendado em produção)
        alert("Obrigado pelo seu feedback!\nNome: " + nome + "\nE-mail: " + email + "\nComentário: " + comentario);
        avalieForm.reset();
    });
});