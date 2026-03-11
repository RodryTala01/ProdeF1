// GP con sprint
const gpsConSprint = [
"china","miami","canada","uk","paisesbajos","singapur"
];


const carreraHabilitada = false;
// RESULTADOS
const resultados={


australia:{
clasificacion:{posiciones:[
{piloto:"George Russell", tiempo:"1:18:518"},
{piloto:"Kimi Antonelli", tiempo:"1:18:811"},
{piloto:"Isack Hadjar", tiempo:"1:19:303"},
{piloto:"Charles Leclerc", tiempo:"1:19:327"},
{piloto:"Oscar Piastri", tiempo:"1:19:380"},
{piloto:"Lando Norris", tiempo:"1:19:475"},
{piloto:"Lewis Hamilton", tiempo:"1:19:478"},
{piloto:"Liam Lawson", tiempo:"1:19:994"},
{piloto:"Arvid Lindblad", tiempo:"1:21:247"},
{piloto:"Gabriel Bortoleto", tiempo:"-"},
{piloto:"Nico Hülkenberg", tiempo:"1:20:303"},
{piloto:"Oliver Bearman", tiempo:"1:20:311"},
{piloto:"Esteban Ocon", tiempo:"1:20:491"},
{piloto:"Pierre Gasly", tiempo:"1:20:501"},
{piloto:"Alexander Albon", tiempo:"1:20:941"},
{piloto:"Franco Colapinto", tiempo:"1:21:270"},
{piloto:"Fernando Alonso", tiempo:"1:21:969"},
{piloto:"Sergio Pérez", tiempo:"1:22:605"},
{piloto:"Valtteri Bottas", tiempo:"1:23:244"},
{piloto:"Max Verstappen", tiempo:"-"},
{piloto:"Carlos Sainz", tiempo:"-"},
{piloto:"Lance Stroll", tiempo:"-"}
]},

carrera:{
posiciones:carrera:
posiciones:[
{piloto:"George Russell", tiempo:"1:23:06.801"},
{piloto:"Kimi Antonelli", tiempo:"+2.974"},
{piloto:"Charles Leclerc", tiempo:"+15.519"},
{piloto:"Lewis Hamilton", tiempo:"+16.143"},
{piloto:"Lando Norris", tiempo:"+51.741"},
{piloto:"Max Verstappen", tiempo:"+54.617"},
{piloto:"Oliver Bearman", tiempo:"+1 vuelta"},
{piloto:"Arvid Lindblad", tiempo:"+1 vuelta"},
{piloto:"Gabriel Bortole    to", tiempo:"+1 vuelta"},
{piloto:"Pierre Gasly", tiempo:"+1 vuelta"},
{piloto:"Esteban Ocon", tiempo:"+1 vuelta"},
{piloto:"Alexander Albon", tiempo:"+1 vuelta"},
{piloto:"Liam Lawson", tiempo:"+1 vuelta"},
{piloto:"Franco Colapinto", tiempo:"+2 vueltas"},
{piloto:"Carlos Sainz", tiempo:"+2 vueltas"},
{piloto:"Sergio Pérez", tiempo:"+3 vueltas"},
{piloto:"Lance Stroll", tiempo:"NC"},
{piloto:"Fernando Alonso", tiempo:"DNF"},
{piloto:"Valtteri Bottas", tiempo:"DNF"},
{piloto:"Isack Hadjar", tiempo:"DNF"},
{piloto:"Oscar Piastri", tiempo:"DNF"},
{piloto:"Nico Hülkenberg", tiempo:"DNF"}
],
vueltaRapida:{
piloto:"Max Verstappen",
tiempo:"1:22.091"
}
}
}


}


// EQUIPOS
const equipos={
"Sergio Pérez":"Cadillac",
"Charles Leclerc":"Ferrari",
"Oliver Bearman":"Haas",
"Lando Norris":"McLaren",
"Oscar Piastri":"McLaren",
"Kimi Antonelli":"Mercedes",
"George Russell":"Mercedes",
"Max Verstappen":"Red Bull",
"Isack Hadjar":"Red Bull",
"Lewis Hamilton":"Ferrari",
"Valtteri Bottas":"Cadillac",
"Gabriel Bortoleto":"Audi",
"Esteban Ocon":"Haas",
"Liam Lawson":"Visacash",
"Nico Hülkenberg":"Audi",
"Arvid Lindblad":"Visacash",
"Fernando Alonso":"Aston Martin",
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

mensajePronostico.addEventListener("input",()=>{
puntosContainer.style.display="none";
});

gpSelector.addEventListener("change",()=>{
puntosContainer.style.display="none";
});

tipoCarrera.addEventListener("change",()=>{
puntosContainer.style.display="none";
});

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

const lineas=texto
.split("\n")
.map(l=>l.replace(/\*/g,"").replace(/\u200E/g,"").trim())
.filter(l=>l!=="");

let pronostico=[];
let vueltaRapida=null;

for(let l of lineas){

if(l.toLowerCase().includes("vuelta rápida")){
continue;
}

if(pronostico.length>=22 && !vueltaRapida){
vueltaRapida=l.trim();
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

if(!a || !b) return false;

const pa=a.trim();
const pb=b.trim();

if(!equipos[pa] || !equipos[pb]) return false;

return equipos[pa]===equipos[pb];

}


// CALCULO
function calcularPuntos(usuario,real,tipo,vrUsuario,vrReal,vrTiempo){

let puntos=0;
let aciertosExactos=0;
let aciertosParciales=0;

tablaUsuario.innerHTML="";
tablaReal.innerHTML="";
puntosContainer.style.display="none";

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
aciertosExactos++;

}

if(i>=10 && i<=15){

const pilotosQ2 = real.slice(10,16).map(p=>p.piloto);

if(pilotosQ2.includes(usuarioP)){
pts=0.6;
clase="acertado";
aciertosExactos++;
}

}

if(i>=16){

const pilotosQ1 = real.slice(16).map(p=>p.piloto);

if(pilotosQ1.includes(usuarioP)){
pts=0.3;
clase="acertado";
aciertosExactos++;
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
aciertosExactos++;

if(i===0) pts=8;
else if(i===1) pts=6;
else if(i===2) pts=4;
else if(i<=9) pts=2;
else pts=1;

}

else if(mismoEquipo(usuarioP,realP)){

clase="compañero";
aciertosParciales++;

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
// VUELTA RAPIDA
if(tipo==="carrera" && vrReal){

let filaVRReal=document.createElement("div");
filaVRReal.innerHTML=`⚡ Vuelta rápida: ${vrReal} <span class="tiempo">${vrTiempo}</span>`;
tablaReal.appendChild(filaVRReal);

let filaVRUser=document.createElement("div");

if(vrUsuario){

if(vrUsuario===vrReal){

let pts=3*factorSprint;
puntos+=pts;
aciertosExactos++;

filaVRUser.classList.add("acertado");
filaVRUser.innerHTML=`⚡ Vuelta rápida: ${vrUsuario} <span class="pts">+${pts}</span>`;

}

else if(mismoEquipo(vrUsuario,vrReal)){

let pts=1.5*factorSprint;
puntos+=pts;
aciertosParciales++;

filaVRUser.classList.add("compañero");
filaVRUser.innerHTML=`⚡ Vuelta rápida: ${vrUsuario} <span class="pts">+${pts}</span>`;

}

else{

filaVRUser.classList.add("fallado");
filaVRUser.innerHTML=`⚡ Vuelta rápida: ${vrUsuario}`;

}

}else{

filaVRUser.classList.add("fallado");
filaVRUser.innerHTML=`⚡ Vuelta rápida: -`;

}

tablaUsuario.appendChild(filaVRUser);

}


puntosContainer.style.display="block";

puntosTotales.innerText=puntos.toFixed(1)+" puntos";
totalAciertos.innerText=
aciertosExactos+" exactos • "+aciertosParciales+" parciales";

}


// BOTON
document.getElementById("calcular").addEventListener("click",()=>{

try{
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

// SI NO HAY RESULTADOS CARGADOS PARA ESE GP
if(!resultados[gp]){
alert("Todavía no hay resultados cargados para este GP");
return;
}

// BLOQUEAR QUALY SI NO EXISTE
if(tipo==="clasificacion" && !resultados[gp].clasificacion){
alert("La clasificación todavía no se corrió");
return;
}

// BLOQUEAR CARRERA SI NO EXISTE
if(tipo==="carrera" && !resultados[gp].carrera){
alert("La carrera todavía no se corrió");
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

}catch(e){
console.error(e);
alert("Hubo un error al calcular");
}

});


function etiquetaQualy(i){

if(i<=9) return (i+1);

if(i>=10 && i<=15) return "Q2";

if(i>=16) return "Q1";

}


// inicializar
actualizarSprint(gpSelector.value);
