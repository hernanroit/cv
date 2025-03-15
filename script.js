function showTab(tab) {
    document.querySelectorAll(".tab-content").forEach(content => {
        content.style.display = "none";
    });
    document.getElementById(tab).style.display = "block";

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add("active");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    let mailtoLink = `mailto:hernanroit@gmail.com?subject=Contacto de ${name}&body=Email: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
    
    window.location.href = mailtoLink;
});
