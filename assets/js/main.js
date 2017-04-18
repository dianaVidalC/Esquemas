var contenedor=document.getElementsByTagName("body")[0];

var cajaRoja=document.createElement("div");
var cajaAzul=document.createElement("div");
var cajaMorada=document.createElement("div");
var cajaVerde=document.createElement("div");
var cajitaAmarilla=document.createElement("div");
var cajitaNegra=document.createElement("div");

cajaRoja.setAttribute("class","cajas");
cajaRoja.setAttribute("id","roja");
cajaAzul.setAttribute("class","cajas");
cajaAzul.setAttribute("id","azul");
cajaMorada.setAttribute("class","cajita");
cajaMorada.setAttribute("id","morada");
cajaVerde.setAttribute("class","cajita");
cajaVerde.setAttribute("id","verde");
cajitaAmarilla.setAttribute("class","cajitas-flotantes");
cajitaNegra.setAttribute("class","cajitas-flotantes");
cajitaAmarilla.setAttribute("id","amarilla");
cajitaNegra.setAttribute("id","negra");

cajaRoja.appendChild(cajaMorada);
cajaAzul.appendChild(cajaVerde);
cajaRoja.appendChild(cajitaAmarilla);
cajaAzul.appendChild(cajitaNegra);
contenedor.appendChild(cajaRoja);
contenedor.appendChild(cajaAzul);
