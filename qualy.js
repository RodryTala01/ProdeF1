const circuitoNombre = "GP 6/24: Miami, Estados Unidos";
const circuitoImagen = "image/circuitos/miami.png";
const horarioSprint = "SPRINT: Viernes 1 de Mayo, 17:30hs"
const horarioCarrera = "CARRERA: Sábado 2 de Mayo, 17:00hs";

const pilotos=[

{nombre:"Fernando Alonso",pais:"espana",equipo:"astonmartin"},
{nombre:"Lewis Hamilton",pais:"britain",equipo:"ferrari"},
{nombre:"Nico Hülkenberg",pais:"alemania",equipo:"audi"},
{nombre:"Sergio Pérez",pais:"mexico",equipo:"cadillac"},
{nombre:"Valtteri Bottas",pais:"finlandia",equipo:"cadillac"},
{nombre:"Max Verstappen",pais:"holanda",equipo:"redbull"},
{nombre:"Esteban Ocon",pais:"francia",equipo:"haas"},
{nombre:"Carlos Sainz",pais:"espana",equipo:"williams"},
{nombre:"Lance Stroll",pais:"canada",equipo:"astonmartin"},
{nombre:"Charles Leclerc",pais:"monaco",equipo:"ferrari"},
{nombre:"Pierre Gasly",pais:"francia",equipo:"alpine"},
{nombre:"George Russell",pais:"britain",equipo:"mercedes"},
{nombre:"Lando Norris",pais:"britain",equipo:"mclaren"},
{nombre:"Alexander Albon",pais:"tailandia",equipo:"williams"},
{nombre:"Liam Lawson",pais:"nuevazelanda",equipo:"visacash"},
{nombre:"Oscar Piastri",pais:"australia",equipo:"mclaren"},
{nombre:"Oliver Bearman",pais:"britain",equipo:"haas"},
{nombre:"Isack Hadjar",pais:"francia",equipo:"redbull"},
{nombre:"Franco Colapinto",pais:"argentina",equipo:"alpine"},
{nombre:"Kimi Antonelli",pais:"italia",equipo:"mercedes"},
{nombre:"Gabriel Bortoleto",pais:"brasil",equipo:"audi"},
{nombre:"Arvid Lindblad",pais:"britain",equipo:"visacash"}

];

const coloresEquipos={
ferrari:"#dc0000",
mercedes:"#00d2be",
redbull:"#1e41ff",
mclaren:"#ff8700",
alpine:"#ff69b4",
astonmartin:"#006f62",
williams:"#00f7ff",
haas:"#b6b6b6",
audi:"#bb0000",
cadillac:"#9fa3a6",
visacash:"#2b3f42"
};

const lista=document.getElementById("listaPilotos");
const q3=document.getElementById("q3");
const q2=document.getElementById("q2");
const q1=document.getElementById("q1");

const modal=document.getElementById("modalPilotos");
const listaModal=document.getElementById("listaModalPilotos");
const cerrarModal=document.getElementById("cerrarModal");

let casilleroActual=null;

let seleccionado=null;

document.getElementById("circuito-nombre").innerText=circuitoNombre;

document.querySelectorAll(".circuito-img").forEach(img=>{
img.src=circuitoImagen;
});
document.getElementById("horarioS").innerText = horarioSprint;
document.getElementById("horario").innerText = horarioCarrera;

pilotos.sort((a,b)=>a.equipo.localeCompare(b.equipo));

function crearPiloto(p){

const div=document.createElement("div");
div.className="piloto";
div.draggable=true;

div.style.borderLeft=`4px solid ${coloresEquipos[p.equipo]}`;

div.innerHTML = `

<div class="piloto-info">

<div class="bandera-box">
<img src="image/${p.pais}.png">
</div>

<div class="equipo-box">
<img src="image/${p.equipo}.png">
</div>


<span class="nombre-piloto">${p.nombre}</span>

</div>

<button class="borrar">✕</button>

`;


div.onclick=()=>seleccionar(div);

div.querySelector(".borrar").onclick=(e)=>{
e.stopPropagation();
lista.appendChild(div);
limpiarSeleccion();
};

div.addEventListener("dragstart",e=>{
e.dataTransfer.setData("text",p.nombre);
});

return div;
}


document.addEventListener("DOMContentLoaded", () => {

  const botonCalculadora = document.getElementById("calculadora");
  const modalCalculadora = document.getElementById("modalCalculadora");

  const cancelarCalculadora = document.getElementById("cancelarCalculadora");
  const confirmarCalculadora = document.getElementById("confirmarCalculadora");

  botonCalculadora.addEventListener("click", () => {
    modalCalculadora.classList.add("activo");
  });

  cancelarCalculadora.addEventListener("click", () => {
    modalCalculadora.classList.remove("activo");
  });

  confirmarCalculadora.addEventListener("click", () => {
    window.location.href = "calculadora.html";
  });

});


function seleccionar(div){

document.querySelectorAll(".piloto").forEach(p=>p.classList.remove("seleccionado"));
div.classList.add("seleccionado");
seleccionado=div;

}

function limpiarSeleccion(){

document.querySelectorAll(".piloto").forEach(p=>p.classList.remove("seleccionado"));
seleccionado=null;

}

function crearCasillero(){

const c=document.createElement("div");
c.className="casillero vacio";

c.addEventListener("dragover",e=>{
e.preventDefault();
c.classList.add("activo");
});

c.addEventListener("dragleave",()=>c.classList.remove("activo"));

c.addEventListener("drop",e=>{

e.preventDefault();
c.classList.remove("activo");

const nombre=e.dataTransfer.getData("text");

const piloto=[...document.querySelectorAll(".piloto")]
.find(p=>p.innerText.includes(nombre));

colocar(c,piloto);

});

c.onclick=()=>{

if(seleccionado){
colocar(c,seleccionado);
limpiarSeleccion();
}else{
abrirSelector(c);
}

};

return c;

}

cerrarModal.onclick=()=>modal.classList.remove("activo");

function colocar(casillero,piloto){

if(casillero.querySelector(".piloto")){
lista.appendChild(casillero.querySelector(".piloto"));
}

casillero.appendChild(piloto);
casillero.classList.remove("vacio");

}

/* Q3 */

for(let i=1;i<=10;i++){

const fila=document.createElement("div");
fila.className="fila-q3";

const numero=document.createElement("div");
numero.className="numero-posicion";
numero.innerText=i+"°";

fila.appendChild(numero);

const casillero=crearCasillero();

fila.appendChild(casillero);

q3.appendChild(fila);

}

/* Q2 */

for(let i=0;i<6;i++){
q2.appendChild(crearCasillero());
}

/* Q1 */

for(let i=0;i<6;i++){
q1.appendChild(crearCasillero());
}

pilotos.forEach(p=>lista.appendChild(crearPiloto(p)));

/* DESCARGAR IMAGEN */

document.getElementById("descargar").onclick = function(){

if(!pronosticoCompleto()) return;

/* TODO tu código actual sigue igual abajo */

const filas=[];

/* Q3 */

document.querySelectorAll("#q3 .fila-q3").forEach((fila,i)=>{

const piloto=fila.querySelector(".piloto");

if(piloto){

const nombre=piloto.querySelector(".nombre-piloto").innerText;
const bandera=piloto.querySelector(".bandera-box img").src;
const equipo=piloto.querySelector(".equipo-box img").src;

filas.push({
pos:(i+1),
nombre,
bandera,
equipo,
zona:"q3"
});

}

});

/* Q2 */

document.querySelectorAll("#q2 .casillero").forEach(c=>{

const piloto=c.querySelector(".piloto");

if(piloto){

const nombre=piloto.querySelector(".nombre-piloto").innerText;
const bandera=piloto.querySelector(".bandera-box img").src;
const equipo=piloto.querySelector(".equipo-box img").src;

filas.push({
pos:"Q2",
nombre,
bandera,
equipo,
zona:"q2"
});

}

});

/* Q1 */

document.querySelectorAll("#q1 .casillero").forEach(c=>{

const piloto=c.querySelector(".piloto");

if(piloto){

const nombre=piloto.querySelector(".nombre-piloto").innerText;
const bandera=piloto.querySelector(".bandera-box img").src;
const equipo=piloto.querySelector(".equipo-box img").src;

filas.push({
pos:"Q1",
nombre,
bandera,
equipo,
zona:"q1"
});

}

});

/* CONTENEDOR OCULTO */

const tabla=document.createElement("div");

tabla.style.position="fixed";
tabla.style.left="-9999px";
tabla.style.width="900px";
tabla.style.background="#0f1116";
tabla.style.fontFamily="Segoe UI";
tabla.style.color="white";
tabla.style.padding="40px";

/* ESTILOS */

let html=`

<div style="border-top:6px solid #e10600;padding-top:20px;">

<h2 style="
text-align:center;
margin-bottom:5px;
font-size:28px;
letter-spacing:1px;
">
Pronóstico Clasificación
</h2>

<div style="
text-align:center;
font-size:18px;
color:#aaa;
margin-bottom:20px;
">
${circuitoNombre}
</div>

<table style="
width:100%;
border-collapse:collapse;
font-size:20px;
">

`;

filas.forEach(f=>{

let fondo="#151922";

if(f.zona==="q2") fondo="#2b2a17";
if(f.zona==="q1") fondo="#222";

html+=`

<tr style="
background:${fondo};
border-bottom:1px solid #2a2f3a;
height:52px;
">

<td style="
width:60px;
font-weight:bold;
text-align:center;
color:${f.zona==="q3" ? "#ffffff" : "#aaa"};
">
${f.pos}
</td>

<td>

<div style="
display:flex;
align-items:center;
gap:10px;
">

<div style="
width:28px;
height:18px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
">
<img src="${f.bandera}" style="
width:100%;
height:100%;
object-fit:cover;
">
</div>

<div style="
width:32px;
height:24px;
display:flex;
align-items:center;
justify-content:center;
">
<img src="${f.equipo}" style="
max-width:100%;
max-height:100%;
object-fit:contain;
">
</div>

<span style="
padding-left:6px;
font-weight:500;
">
${f.nombre}
</span>

</div>

</td>

</tr>

`;

});

html+=`</table></div>`;

tabla.innerHTML=html;

document.body.appendChild(tabla);

/* GENERAR IMAGEN */

html2canvas(tabla,{
backgroundColor:"#0f1116",
scale:4
}).then(canvas=>{

const link=document.createElement("a");

link.download="pronostico-qualy.png";
link.href=canvas.toDataURL("image/png");
link.click();

tabla.remove();

});

};

function abrirSelector(casillero){

casilleroActual=casillero;

listaModal.innerHTML="";

/* pilotos disponibles */

const disponibles=[...document.querySelectorAll("#listaPilotos .piloto")];

disponibles.forEach(p=>{

const nombre=p.querySelector(".nombre-piloto").innerText;
const bandera=p.querySelector(".bandera-box img").src;
const equipo=p.querySelector(".equipo-box img").src;

const item=document.createElement("div");
item.className="modal-piloto";

item.innerHTML=`

<img src="${bandera}">
<img src="${equipo}">
<span>${nombre}</span>

`;

item.onclick=()=>{

colocar(casilleroActual,p);
modal.classList.remove("activo");

};

listaModal.appendChild(item);

});

modal.classList.add("activo");

}










document.getElementById("enviar").onclick=function(){

if(!pronosticoCompleto()) return;

/* sigue tu código de whatsapp */

let mensaje=`*Pronóstico Clasificación*\n${circuitoNombre}\n\n`;
/* Q3 */

mensaje+="*Q3*\n";

document.querySelectorAll("#q3 .fila-q3").forEach((fila,i)=>{

const piloto=fila.querySelector(".piloto");

if(piloto){

const nombreCompleto=piloto.querySelector(".nombre-piloto").innerText;
const partes=nombreCompleto.split(" ");
const nombre=partes.slice(-2).join(" ");

mensaje+=`${i+1}° ${nombre}\n`;

}

});

/* Q2 */

mensaje+="\n────────────\n";
mensaje+="*Q2*\n";

document.querySelectorAll("#q2 .casillero").forEach(c=>{

const piloto=c.querySelector(".piloto");

if(piloto){

const nombreCompleto=piloto.querySelector(".nombre-piloto").innerText;
const partes=nombreCompleto.split(" ");
const nombre=partes.slice(-2).join(" ");
mensaje+=`${nombre}\n`;

}

});

/* Q1 */

mensaje+="\n────────────\n";
mensaje+="*Q1*\n";

document.querySelectorAll("#q1 .casillero").forEach(c=>{

const piloto=c.querySelector(".piloto");

if(piloto){

const nombreCompleto=piloto.querySelector(".nombre-piloto").innerText;
const partes=nombreCompleto.split(" ");
const nombre=partes.slice(-2).join(" ");

mensaje+=`${nombre}\n`;

}

});

const url="https://wa.me/5491154865284?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

};

function pronosticoCompleto(){

const totalPilotosColocados =
document.querySelectorAll("#q3 .piloto, #q2 .piloto, #q1 .piloto").length;

if(totalPilotosColocados !== 22){

alert("Tenés que colocar los 22 pilotos antes de continuar.");

return false;

}

return true;

}

