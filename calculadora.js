// GP con sprint
const gpsConSprint = [
"china","miami","canada","uk","paisesbajos","singapur"
];

// RESULTADOS
const resultados={


australia:{
clasificacion:{posiciones:[
{piloto:"Sergio Pérez", tiempo:"1:15.221"},
{piloto:"Charles Leclerc", tiempo:"+0.112"},
{piloto:"Oliver Bearman", tiempo:"+0.240"},
{piloto:"Lando Norris", tiempo:"+0.351"},
{piloto:"Oscar Piastri", tiempo:"+0.418"},
{piloto:"Kimi Antonelli", tiempo:"+0.503"},
{piloto:"George Russell", tiempo:"+0.587"},
{piloto:"Max Verstappen", tiempo:"+0.662"},
{piloto:"Isack Hadjar", tiempo:"+0.741"},
{piloto:"Lewis Hamilton", tiempo:"+0.803"},
{piloto:"Valtteri Bottas", tiempo:"+0.912"},
{piloto:"Gabriel Bortoleto", tiempo:"+1.044"},
{piloto:"Esteban Ocon", tiempo:"+1.118"},
{piloto:"Liam Lawson", tiempo:"+1.207"},
{piloto:"Nico Hülkenberg", tiempo:"+1.292"},
{piloto:"Arvid Lindblad", tiempo:"+1.344"},
{piloto:"Fernando Alonso", tiempo:"+1.482"},
{piloto:"Lance Stroll", tiempo:"+1.566"},
{piloto:"Carlos Sainz", tiempo:"+1.642"},
{piloto:"Alexander Albon", tiempo:"+1.721"},
{piloto:"Pierre Gasly", tiempo:"+1.803"},
{piloto:"Franco Colapinto", tiempo:"+1.944"}
]},

carrera:{
posiciones:[
{piloto:"Sergio Pérez", tiempo:"1:31:42.221"},
{piloto:"Lewis Hamilton", tiempo:"+2.441"},
{piloto:"Charles Leclerc", tiempo:"+5.008"},
{piloto:"Esteban Ocon", tiempo:"+7.112"},
{piloto:"Lando Norris", tiempo:"+9.544"},
{piloto:"George Russell", tiempo:"+12.887"},
{piloto:"Kimi Antonelli", tiempo:"+16.221"},
{piloto:"Isack Hadjar", tiempo:"+18.004"},
{piloto:"Arvid Lindblad", tiempo:"+21.776"},
{piloto:"Carlos Sainz", tiempo:"+24.338"},
{piloto:"Alexander Albon", tiempo:"+28.441"},
{piloto:"Pierre Gasly", tiempo:"+31.115"},
{piloto:"Fernando Alonso", tiempo:"+35.002"},
{piloto:"Nico Hülkenberg", tiempo:"+39.887"},
{piloto:"Valtteri Bottas", tiempo:"+44.110"},
{piloto:"Oscar Piastri", tiempo:"+48.221"},
{piloto:"Franco Colapinto", tiempo:"+52.440"},
{piloto:"Lance Stroll", tiempo:"+58.009"},
{piloto:"Oliver Bearman", tiempo:"+1:02.887"},
{piloto:"Max Verstappen", tiempo:"DNF"},
{piloto:"Gabriel Bortoleto", tiempo:"DNF"},
{piloto:"Liam Lawson", tiempo:"DNF"}
],
vueltaRapida:{
piloto:"Lewis Hamilton",
tiempo:"1:20.441"
}
}
},

china:{
clasificacion:{posiciones:[
{piloto:"Sergio Pérez", tiempo:"1:15.221"},
{piloto:"Charles Leclerc", tiempo:"+0.112"},
{piloto:"Oliver Bearman", tiempo:"+0.240"},
{piloto:"Lando Norris", tiempo:"+0.351"},
{piloto:"Oscar Piastri", tiempo:"+0.418"},
{piloto:"Kimi Antonelli", tiempo:"+0.503"},
{piloto:"George Russell", tiempo:"+0.587"},
{piloto:"Max Verstappen", tiempo:"+0.662"},
{piloto:"Isack Hadjar", tiempo:"+0.741"},
{piloto:"Lewis Hamilton", tiempo:"+0.803"},
{piloto:"Valtteri Bottas", tiempo:"+0.912"},
{piloto:"Gabriel Bortoleto", tiempo:"+1.044"},
{piloto:"Esteban Ocon", tiempo:"+1.118"},
{piloto:"Liam Lawson", tiempo:"+1.207"},
{piloto:"Nico Hülkenberg", tiempo:"+1.292"},
{piloto:"Arvid Lindblad", tiempo:"+1.344"},
{piloto:"Fernando Alonso", tiempo:"+1.482"},
{piloto:"Lance Stroll", tiempo:"+1.566"},
{piloto:"Carlos Sainz", tiempo:"+1.642"},
{piloto:"Alexander Albon", tiempo:"+1.721"},
{piloto:"Pierre Gasly", tiempo:"+1.803"},
{piloto:"Franco Colapinto", tiempo:"+1.944"}
]},

carrera:{
posiciones:[
{piloto:"Sergio Pérez", tiempo:"1:31:42.221"},
{piloto:"Lewis Hamilton", tiempo:"+2.441"},
{piloto:"Charles Leclerc", tiempo:"+5.008"},
{piloto:"Esteban Ocon", tiempo:"+7.112"},
{piloto:"Lando Norris", tiempo:"+9.544"},
{piloto:"George Russell", tiempo:"+12.887"},
{piloto:"Kimi Antonelli", tiempo:"+16.221"},
{piloto:"Isack Hadjar", tiempo:"+18.004"},
{piloto:"Arvid Lindblad", tiempo:"+21.776"},
{piloto:"Carlos Sainz", tiempo:"+24.338"},
{piloto:"Alexander Albon", tiempo:"+28.441"},
{piloto:"Pierre Gasly", tiempo:"+31.115"},
{piloto:"Fernando Alonso", tiempo:"+35.002"},
{piloto:"Nico Hülkenberg", tiempo:"+39.887"},
{piloto:"Valtteri Bottas", tiempo:"+44.110"},
{piloto:"Oscar Piastri", tiempo:"+48.221"},
{piloto:"Franco Colapinto", tiempo:"+52.440"},
{piloto:"Lance Stroll", tiempo:"+58.009"},
{piloto:"Oliver Bearman", tiempo:"+1:02.887"},
{piloto:"Max Verstappen", tiempo:"DNF"},
{piloto:"Gabriel Bortoleto", tiempo:"DNF"},
{piloto:"Liam Lawson", tiempo:"DNF"}
],
vueltaRapida:{
piloto:"Lewis Hamilton",
tiempo:"1:20.441"
}
}
}
};


// EQUIPOS
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

// DOM
const mensajePronostico=document.getElementById("mensaje");
const gpSelector=document.getElementById("gp");
const tipoCarrera=document.getElementById("sprint");
const sprintContainer=document.getElementById("sprintContainer");

const tablaUsuario=document.getElementById("tablaUsuario");
const tablaReal=document.getElementById("tablaReal");

const puntosTotales=document.getElementById("puntosTotales");
const totalAciertos=document.getElementById("totalAciertos");
const puntosContainer=document.getElementById("puntosContainer");


// detectar tipo
function detectarTipoPronostico(texto){

const t=texto.toLowerCase();

if(t.includes("clasificación") || t.includes("clasificacion") || t.includes("q3"))
return "clasificacion";

if(t.includes("carrera"))
return "carrera";

return null;

}

function esAbandono(valor){

if(!valor) return false;

const v=valor.toUpperCase();

return (
v==="DNF" ||
v==="DNS" ||
v==="DSQ" ||
v==="NC" ||
v==="DNQ" ||
v==="WD"
);

}

// mostrar sprint si corresponde
function actualizarSprint(gp){

if(gpsConSprint.includes(gp)){
sprintContainer.style.display="block";
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
if(t.includes("reino unido")) return "uk";
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


// detectar GP al pegar mensaje
mensajePronostico.addEventListener("input",()=>{

const texto=mensajePronostico.value;
const gpDetectado=detectarGP(texto);

if(gpDetectado){
gpSelector.value=gpDetectado;
actualizarSprint(gpDetectado);
}

});

gpSelector.addEventListener("change",()=>{
actualizarSprint(gpSelector.value);
});


// parser
function parsearMensaje(texto){

const lineas=texto.split("\n").map(l=>l.trim()).filter(l=>l!=="");

let pronostico=[];
let vueltaRapida=null;

for(let l of lineas){

if(l.startsWith("Vuelta")){
vueltaRapida=l.replace(/Vuelta rápida:?/i,"").trim();
continue;
}

if(l.startsWith("Pronóstico")) continue;
if(l.startsWith("GP")) continue;
if(l.startsWith("Q1")||l.startsWith("Q2")||l.startsWith("Q3")) continue;
if(l.startsWith("────────")) continue;

if(l.match(/^\d+/)){
let nombre=l.replace(/^\d+°?\s*/,"").trim();
pronostico.push(nombre);
}else{
if(pronostico.length<22) pronostico.push(l);
}

}

return {pronostico,vueltaRapida};

}


// mismo equipo
function mismoEquipo(a,b){
return equipos[a] && equipos[a]===equipos[b];
}


// CALCULO
function calcularPuntos(usuario,real,tipo,vrUsuario,vrReal,vrTiempo){

let puntos=0;
let aciertos=0;

tablaUsuario.innerHTML="";
tablaReal.innerHTML="";

const factorSprint = tipoCarrera.value==="sprint" ? 0.5 : 1;



for(let i=0;i<real.length;i++){

let realData=real[i];

let realP= typeof realData==="object"
? realData.piloto
: realData;

let tiempoReal= typeof realData==="object"
? realData.tiempo
: "";
let usuarioP=usuario[i];

let filaUser=document.createElement("div");
let filaReal=document.createElement("div");

let etiqueta = tipo==="clasificacion" ? etiquetaQualy(i) : (i+1);

filaReal.innerHTML=
`${etiqueta}. ${realP} ${tiempoReal?`<span class="tiempo">${tiempoReal}</span>`:""}`;
tablaReal.appendChild(filaReal);

if(!usuarioP){
filaUser.innerText=`${i+1}. -`;
tablaUsuario.appendChild(filaUser);
continue;
}

let pts=0;
let clase="fallado";


// CLASIFICACION
if(tipo==="clasificacion"){

if(usuarioP===realP){

if(i===0) pts=4;
else if(i===1) pts=3;
else if(i===2) pts=2;
else if(i<=9) pts=1.5;

clase="acertado";
aciertos++;

}

if(i>=10 && i<=15){
if(real.slice(10,16).includes(usuarioP)){
pts=0.6;
clase="acertado";
aciertos++;
}
}

if(i>=16){
if(real.slice(16).includes(usuarioP)){
pts=0.3;
clase="acertado";
aciertos++;
}
}

}


// CARRERA
else{

if(esAbandono(tiempoReal)){
pts=0;
clase="fallado";
}

else if(usuarioP===realP){

clase="acertado";
aciertos++;

if(i===0) pts=8;
else if(i===1) pts=6;
else if(i===2) pts=4;
else if(i<=9) pts=2;
else pts=1;

}

else if(mismoEquipo(usuarioP,realP)){

clase="compañero";

let base=0;

if(i===0) base=8;
else if(i===1) base=6;
else if(i===2) base=4;
else if(i<=9) base=2;
else base=1;

pts=base/2;

}

}

pts*=factorSprint;

puntos+=pts;

filaUser.classList.add(clase);

filaUser.innerHTML=
`${etiqueta}. ${usuarioP} ${pts>0?`<span class="pts">+${pts.toFixed(1)}</span>`:""}`;

tablaUsuario.appendChild(filaUser);

}


// VUELTA RAPIDA
if(tipo==="carrera" && vrReal){

let filaVRReal=document.createElement("div");
filaVRReal.innerHTML=`Vuelta rápida: ${vrReal} <span class="tiempo">${vrTiempo}</span>`;
tablaReal.appendChild(filaVRReal);

let filaVRUser=document.createElement("div");

if(vrUsuario && vrUsuario===vrReal){

let pts=3*factorSprint;
puntos+=pts;
aciertos++;

filaVRUser.classList.add("acertado");
filaVRUser.innerHTML=`⚡ Vuelta rápida: ${vrUsuario} <span class="pts">+${pts}</span>`;

}else{

filaVRUser.classList.add("fallado");
filaVRUser.innerHTML=`⚡ Vuelta rápida: ${vrUsuario || "-"}`;

}

tablaUsuario.appendChild(filaVRUser);

}


puntosContainer.style.display="block";

puntosTotales.innerText=puntos.toFixed(1)+" puntos";
totalAciertos.innerText=aciertos+" aciertos";

}


// BOTON
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

const real=tipo==="clasificacion"
?resultados[gp].clasificacion.posiciones
:resultados[gp].carrera.posiciones;

const vrReal=resultados[gp].carrera.vueltaRapida.piloto;
const vrTiempo=resultados[gp].carrera.vueltaRapida.tiempo;

const datos=parsearMensaje(mensaje);

calcularPuntos(
datos.pronostico,
real,
tipo,
datos.vueltaRapida,
vrReal,
vrTiempo
);

});

function etiquetaQualy(i){

if(i<=9) return (i+1);

if(i>=10 && i<=15) return "Q2";

if(i>=16) return "Q1";

}


// inicializar
actualizarSprint(gpSelector.value);
