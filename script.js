document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");
    const sendEmailButton = document.getElementById("send-email");

    // Mostrar/ocultar formulario al hacer clic en "Enviar mensaje"
    if (contactButton) {
        contactButton.addEventListener("click", function () {
            contactForm.classList.toggle("hidden");
        });
    }

    // Enviar email con mailto si el botón de enviar existe
    if (sendEmailButton) {
        sendEmailButton.addEventListener("click", function () {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                const mailtoLink = `mailto:destinatario@example.com?subject=Mensaje de ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AResponder a: ${email}`;
                window.location.href = mailtoLink;
            } else {
                alert("Por favor, complete todos los campos antes de enviar el mensaje.");
            }
        });
    }
});
