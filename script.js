document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");
    const sendEmailButton = document.getElementById("send-email");
    
    // Mostrar formulario al hacer clic en "Enviar mensaje"
    contactButton.addEventListener("click", function () {
        contactForm.classList.toggle("hidden");
    });

    // Enviar el email con mailto
    sendEmailButton.addEventListener("click", function () {
        const message = document.getElementById("message").value;
        if (message.trim() !== "") {
            const email = "hernanroit@gmail.com";
            const subject = "Contacto desde tu CV";
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoLink;
        } else {
            alert("Por favor, escribe un mensaje antes de enviar.");
        }
    });
});

