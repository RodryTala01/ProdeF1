// GP con sprint
const gpsConSprint = [
"china","miami","canada","uk","paisesbajos","singapur"
];

// RESULTADOS
const resultados={
australia:{
clasificacion:{posiciones:["Sergio Pérez","Charles Leclerc","Oliver Bearman","Lando Norris","Oscar Piastri","Kimi Antonelli","George Russell","Max Verstappen","Isack Hadjar","Lewis Hamilton","Valtteri Bottas","Gabriel Bortoleto","Esteban Ocon","Liam Lawson","Nico Hülkenberg","Arvid Lindblad","Fernando Alonso","Lance Stroll","Carlos Sainz","Alexander Albon","Pierre Gasly","Franco Colapinto"]},
carrera:{posiciones:["Sergio Pérez","Lewis Hamilton","Charles Leclerc","Esteban Ocon","Lando Norris","George Russell","Kimi Antonelli","Isack Hadjar","Arvid Lindblad","Carlos Sainz","Alexander Albon","Pierre Gasly","Fernando Alonso","Nico Hülkenberg","Valtteri Bottas","Oscar Piastri","Franco Colapinto","Lance Stroll","Oliver Bearman","Max Verstappen","Gabriel Bortoleto","Liam Lawson"],vueltaRapida:"Lewis Hamilton"}
}
};

// equipos
const equipos={
"Sergio Pérez":"Red Bull",
"Charles Leclerc":"Ferrari",
"Oliver Bearman":"Haas",
"Lando Norris":"McLaren",
"Oscar Piastri":"McLaren",
"Kimi Antonelli":"Mercedes",
"George Russell":"Mercedes",
"Max Verstappen":"Red Bull",
"Isack Hadjar":"Red Bull",
"Lewis Hamilton":"Mercedes",
"Valtteri Bottas":"Cadillac",
"Gabriel Bortoleto":"Audi",
"Esteban Ocon":"Haas",
"Liam Lawson":"Visacash",
"Nico Hülkenberg":"Audi",
"Arvid Lindblad":"Visacash",
"Fernando Alonso":"Alpine",
"Lance Stroll":"Aston Martin",
"Carlos Sainz":"Williams",
"Alexander Albon":"Williams",
"Pierre Gasly":"Alpine",
"Franco Colapinto":"Alpine"
};

// DOM (corregido)
const mensajePronostico=document.getElementById("mensaje");
const gpSelector=document.getElementById("gp");
const tipoCarrera=document.getElementById("sprint");
const sprintContainer = document.getElementById("sprintContainer");

gpSelector.addEventListener("change",()=>{

actualizarSprint(gpSelector.value);

});

// detectar tipo
function detectarTipoPronostico(texto){

const t=texto.toLowerCase();

if(t.includes("pronóstico clasificación")||t.includes("pronostico clasificacion")) return "clasificacion";
if(t.includes("pronóstico carrera")||t.includes("pronostico carrera")) return "carrera";

return null;

}

// mostrar sprint si corresponde
function actualizarSprint(gp){

if(gpsConSprint.includes(gp)){
sprintContainer.style.display="block";
console.log("DETECTADO")
}else{
sprintContainer.style.display="none";
tipoCarrera.value="normal";
}

}

// detectar GP
function detectarGP(texto){

const t=texto.toLowerCase();

if(t.includes("australia")) return "australia";
if(t.includes("china")) return "china";
if(t.includes("japon")) return "japon";
if(t.includes("bahrein")) return "bahrein";
if(t.includes("arabia")) return "arabia";
if(t.includes("miami")) return "miami";
if(t.includes("canada")) return "canada";
if(t.includes("monaco")) return "monaco";
if(t.includes("espana")) return "espana";
if(t.includes("austria")) return "austria";
if(t.includes("reino unido") || t.includes("great britain")) return "uk";
if(t.includes("belgica")) return "belgica";
if(t.includes("hungria")) return "hungria";
if(t.includes("paises bajos")) return "paisesbajos";
if(t.includes("italia")) return "italia";
if(t.includes("madrid")) return "madrid";
if(t.includes("azerbaiyan")) return "azerbaiyan";
if(t.includes("singapur")) return "singapur";
if(t.includes("estados unidos")) return "usa";
if(t.includes("mexico")) return "mexico";
if(t.includes("brasil")) return "brasil";
if(t.includes("las vegas")) return "lasvegas";
if(t.includes("qatar")) return "qatar";
if(t.includes("abu dabi")) return "abudabi";

return null;

}



// DETECTAR GP AUTOMÁTICAMENTE AL PEGAR TEXTO
mensajePronostico.addEventListener("input",()=>{

const texto=mensajePronostico.value;

const gp=detectarGP(texto);

if(gp){

gpSelector.value=gp;
actualizarSprint(gp);

}

});



// parser
function parsearMensaje(texto,tipo){

const lineas=texto.split("\n").map(l=>l.trim()).filter(l=>l!=="");

let pronostico=[];

for(let l of lineas){

if(l.startsWith("Pronóstico")) continue;
if(l.startsWith("GP")) continue;
if(l.startsWith("Q1")||l.startsWith("Q2")||l.startsWith("Q3")) continue;
if(l.startsWith("────────")) continue;
if(l.startsWith("Vuelta")) continue;

if(l.match(/^\d+/)){

pronostico.push({
nombre:l.replace(/^\d+°?\s*/,"")
});

}

}

return pronostico;

}



// calcular puntos
function calcularPuntos(usuario,real,tipo,vuelta,gp){

let total=0;
let aciertos=0;

const tablaUsuario=document.getElementById("tablaUsuario");
const tablaReal=document.getElementById("tablaReal");

tablaUsuario.innerHTML="";
tablaReal.innerHTML="";

for(let i=0;i<real.length;i++){

const realP=real[i];
const usuarioP=usuario[i]?.nombre||"";

let clase="";
let puntos=0;

if(usuarioP===realP){

clase="acertado";

if(tipo==="clasificacion"){

if(i===0)puntos=4;
else if(i===1)puntos=3;
else if(i===2)puntos=2;
else if(i<=9)puntos=1.5;
else if(i<=15)puntos=0.6;
else puntos=0.3;

}else{

if(i===0)puntos=8;
else if(i===1)puntos=6;
else if(i===2)puntos=4;
else if(i<=9)puntos=2;
else puntos=1;

}

aciertos++;

}else{

clase="fallado";

}

total+=puntos;

const divU=document.createElement("div");
divU.className=clase;
divU.innerText=(i+1)+" "+usuarioP;
tablaUsuario.appendChild(divU);

const divR=document.createElement("div");
divR.innerText=(i+1)+" "+realP;
tablaReal.appendChild(divR);

}

// VR
const vrContainer=document.getElementById("vrContainer");

if(tipo==="carrera"&&vuelta){

vrContainer.style.display="block";

const vrUsuarioDiv=document.getElementById("vrUsuario");
const vrRealDiv=document.getElementById("vrReal");

const vrReal=resultados[gp].carrera.vueltaRapida;

vrUsuarioDiv.innerText=vuelta;
vrUsuarioDiv.style.color=vuelta===vrReal?"#0f5e0f":"#f00";

vrRealDiv.innerText=vrReal;

}else{

vrContainer.style.display="none";

}

document.getElementById("puntosContainer").style.display="block";
document.getElementById("puntosTotales").innerText=total.toFixed(1);
document.getElementById("cantidadAciertos").innerText=aciertos;

}

// BOTON CALCULAR
document.getElementById("calcular").addEventListener("click",()=>{

const mensaje=mensajePronostico.value;

const tipo=detectarTipoPronostico(mensaje);
const gp=gpSelector.value;

if(!mensaje){

alert("Pega el mensaje");
return;

}

if(!tipo){

alert("No se pudo detectar si es Clasificación o Carrera");
return;

}

if(!gp){

alert("No se pudo detectar el GP");
return;

}

mensajePronostico.addEventListener("input",()=>{

const texto = mensajePronostico.value;

const gp = detectarGP(texto);

if(gp){

gpSelector.value = gp;

actualizarSprint(gp);   // ← ESTA LINEA ES LA CLAVE

}

});

const real=tipo==="clasificacion"
?resultados[gp].clasificacion.posiciones
:resultados[gp].carrera.posiciones;

const usuario=parsearMensaje(mensaje,tipo);

let vuelta=null;

if(tipo==="carrera"){

const match=mensaje.match(/Vuelta Rápida\s*([\w\s]+)/i);

if(match)vuelta=match[1].trim();

}

calcularPuntos(usuario,real,tipo,vuelta,gp);

});

actualizarSprint(gpSelector.value);
