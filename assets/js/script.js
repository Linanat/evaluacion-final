//Alerta conn Plugin
function mostrarAlerta() {
    Swal.fire({
        icon: "404",
        title: "Estamos haceiendo mantencion al sitio web:/",
        text: "Estamos trabajando para ud...",
    });
}


// Funcion 
$(document).ready(function () { //Jquery
    function abrirPag(url) {//Todo lo demas js
        window.open(url, '_blank');
    }

    let magicBtn = document.getElementById('magicBtn');
    magicBtn.addEventListener('click', function() {
        abrirPag('https://abogadosalvarezyrivera.cl/?gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXIr4hvz7QbCLjxo9D4Own28EH5L1sFRQYqvTtr_ZziKHk5cU-o4IXhoCiEAQAvD_BwE');
    });
});

AOS.init();
