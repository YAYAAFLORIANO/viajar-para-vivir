// Funciones JS
function esPalindromo() {
    let texto = document.getElementById("inputPalindromo").value.toLowerCase();
    let invertido = texto.split("").reverse().join("");
    const res = (texto === invertido) ? "Es un palíndromo ✅" : "NO es un palíndromo ❌";
    mostrarResultado("resultadoPalindromo", res);
}

function numeroMayor() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = (a === b) ? "Ambos son iguales ⚖️" : a > b ? a : b;
    mostrarResultado("resultadoMayor", "El número mayor es: " + resultado);
}

function mostrarVocales() {
    let frase = document.getElementById("fraseVocales").value.toLowerCase();
    let vocales = frase.match(/[aeiou]/g);
    mostrarResultado("resultadoVocales", 
        "Vocales encontradas: " + (vocales ? vocales.join(", ") + " 💜" : "No hay vocales ❌")
    );
}

function contarVocales() {
    let frase = document.getElementById("fraseConteo").value.toLowerCase();
    let conteo = { a:0, e:0, i:0, o:0, u:0 };
    for (let letra of frase) if (conteo.hasOwnProperty(letra)) conteo[letra]++;
    mostrarResultado("resultadoConteo", 
        `a:${conteo.a} 💜, e:${conteo.e} 💜, i:${conteo.i} 💜, o:${conteo.o} 💜, u:${conteo.u} 💜`
    );
}

// Mostrar resultado con animación
function mostrarResultado(id, texto) {
    const elem = document.getElementById(id);
    elem.style.opacity = 0;
    elem.innerText = texto;
    setTimeout(() => { elem.style.opacity = 1; }, 50);
}

// AJAX
window.onload = function () {
    document.getElementById("urlInput").value = "https://yayaafloriano.github.io/viajar-para-vivir/";
};

function cargarURL() {
    let url = document.getElementById("urlInput").value;
    let xhr = new XMLHttpRequest();
    const estados = [
        "0 - No iniciada 🔴",
        "1 - Conexión establecida 🟡",
        "2 - Petición recibida 🟡",
        "3 - Procesando 📡",
        "4 - Completada ✅"
    ];

    xhr.onreadystatechange = function () {
        document.getElementById("estadoPeticion").innerText =
            "Estado actual: " + estados[xhr.readyState];

        if (xhr.readyState === 4) {
            document.getElementById("codigoEstado").innerText =
                xhr.status + " - " + xhr.statusText;
            document.getElementById("cabeceras").innerText =
                xhr.getAllResponseHeaders();
            document.getElementById("contenido").innerText =
                xhr.responseText;
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

// Asociar botones
document.getElementById("btnPalindromo").addEventListener("click", esPalindromo);
document.getElementById("btnMayor").addEventListener("click", numeroMayor);
document.getElementById("btnVocales").addEventListener("click", mostrarVocales);
document.getElementById("btnConteo").addEventListener("click", contarVocales);
document.getElementById("btnCargar").addEventListener("click", cargarURL);
