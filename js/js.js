var titulo_html = document.getElementById('titulo')
var caja_html = document.getElementById('caja');
var boton_html = document.getElementById('boton');

function scriptTitulo(){
    titulo_html.classList.add("titulo3");
}
function scriptCaja(){
    caja_html.classList.add("caja2");
}
boton_html.addEventListener('click', scriptCaja);
boton_html.addEventListener('click', scriptTitulo);