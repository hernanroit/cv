document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        es: {
            formacion: "Formación",
            publicaciones: "Publicaciones",
            trabajos: "Ejemplos de trabajos",
            contacto: "Enviar mensaje",
            descargar: "Descargar CV",
            grado: "Licenciado en Economía - Universidad Nacional del Litoral (UNL)",
            doctorado: "Doctor en Desarrollo Económico - Universidad Nacional de Quilmes (UNQUI)",
            curso: "Curso en Ciencia de Datos",
            pub1: "Artículo sobre cadenas globales",
            pub2: "Informe sobre economía argentina",
            pub3: "Libro sobre desarrollo económico",
            trabajo1: "Análisis del mercado laboral",
            trabajo2: "Estudio sobre productividad",
            trabajo3: "Modelo insumo-producto"
        },
        en: {
            formacion: "Education",
            publicaciones: "Publications",
            trabajos: "Work Examples",
            contacto: "Send Message",
            descargar: "Download CV",
            grado: "Bachelor in Economics - National University of Litoral (UNL)",
            doctorado: "PhD in Economic Development - National University of Quilmes (UNQUI)",
            curso: "Data Science Course",
            pub1: "Article on global value chains",
            pub2: "Report on Argentine economy",
            pub3: "Book on economic development",
            trabajo1: "Labor market analysis",
            trabajo2: "Productivity study",
            trabajo3: "Input-output model"
        }
    };

    let currentLanguage = "es";

    document.getElementById("language-toggle").addEventListener("click", function () {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        this.textContent = currentLanguage === "es" ? "English" : "Español";

        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            element.textContent = translations[currentLanguage][key]
