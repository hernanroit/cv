document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");
    const sendEmailButton = document.getElementById("send-email");
    
    // Mostrar formulario al hacer clic en "Enviar mensaje"
    contactButton.addEventListener("click", function () {
        contactForm.classList.toggle("hidden");
    });

    // Enviar el email con mailto
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");

    // Mostrar formulario al hacer clic en "Enviar mensaje"
    contactButton.addEventListener("click", function () {
        contactForm.classList.toggle("hidden");
    });
});

