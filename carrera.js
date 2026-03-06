const circuitoNombre = "GP 1/24: Australia Albert Park";
const circuitoImagen = "image/circuitos/australia.png";
const horarioCarrera = "Domingo 8 de Marzo 01:00 AM";

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
const columna1=document.getElementById("columna1");
const columna2=document.getElementById("columna2");

const modal=document.getElementById("modalPilotos");
const listaModal=document.getElementById("listaModalPilotos");
const cerrarModal=document.getElementById("cerrarModal2");

const modalVR=document.getElementById("modalVR");
const listaVR=document.getElementById("listaVR");
const cerrarVR=document.getElementById("cerrarModal");

let casilleroActual=null;
let seleccionado=null;
let vueltaRapida=null;

document.getElementById("circuito-nombre").innerText=circuitoNombre;
document.querySelectorAll(".circuito-img").forEach(img=>img.src=circuitoImagen);
document.getElementById("horario").innerText = horarioCarrera;

pilotos.sort((a,b)=>a.equipo.localeCompare(b.equipo));

function crearPiloto(p){

const div=document.createElement("div");
div.className="piloto";
div.draggable=true;

div.style.borderLeft=`4px solid ${coloresEquipos[p.equipo]}`;

div.innerHTML=`

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

function seleccionar(div){

document.querySelectorAll(".piloto").forEach(p=>p.classList.remove("seleccionado"));
div.classList.add("seleccionado");
seleccionado=div;

}

function limpiarSeleccion(){

document.querySelectorAll(".piloto").forEach(p=>p.classList.remove("seleccionado"));
seleccionado=null;

}

function crearCasillero(pos){

const fila=document.createElement("div");
fila.className="fila-posicion";

const numero=document.createElement("div");
numero.className="numero-posicion";
numero.innerText=pos+"°";

const c=document.createElement("div");
c.className="casillero vacio";

c.addEventListener("dragover",e=>{
e.preventDefault();
});

c.addEventListener("drop",e=>{

e.preventDefault();

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

fila.appendChild(numero);
fila.appendChild(c);

return fila;

}

function colocar(casillero,piloto){

if(casillero.querySelector(".piloto")){
lista.appendChild(casillero.querySelector(".piloto"));
}

casillero.appendChild(piloto);
casillero.classList.remove("vacio");

}

/* CREAR POSICIONES */

for(let i=1;i<=11;i++){

columna1.appendChild(crearCasillero(i));
columna2.appendChild(crearCasillero(i+11));

}

pilotos.forEach(p=>lista.appendChild(crearPiloto(p)));

function abrirSelector(casillero){

casilleroActual=casillero;
listaModal.innerHTML="";

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

cerrarModal.onclick=()=>modal.classList.remove("activo");

/* VUELTA RAPIDA */

document.getElementById("selectorVR").onclick=function(){

listaVR.innerHTML="";

pilotos.forEach(p=>{

const item=document.createElement("div");

item.className="modal-piloto";

item.innerHTML=`

<img src="image/${p.pais}.png">
<img src="image/${p.equipo}.png">
<span>${p.nombre}</span>

`;

item.onclick=()=>{

vueltaRapida=p.nombre;
document.getElementById("vrContenido").innerHTML=`

<img src="image/${p.pais}.png" style="width:26px;height:18px;object-fit:cover;">
<img src="image/${p.equipo}.png" style="width:28px;height:20px;">
<span>${p.nombre}</span>

`;
modalVR.classList.remove("activo");

};

listaVR.appendChild(item);

});

modalVR.classList.add("activo");

}

cerrarVR.onclick=()=>modalVR.classList.remove("activo");

/* VALIDACION */

function pronosticoCompleto(){

const total=document.querySelectorAll(".casillero .piloto").length;

if(total!==22){

alert("Tenés que completar las 22 posiciones");

return false;

}

if(!vueltaRapida){

alert("Tenés que elegir la vuelta rápida");

return false;

}

return true;

}

/* WHATSAPP */

document.getElementById("enviar").onclick=function(){

if(!pronosticoCompleto()) return;

let mensaje=`*Pronóstico Carrera*\n${circuitoNombre}\n\n`;

document.querySelectorAll(".fila-posicion").forEach(f=>{

const pos=f.querySelector(".numero-posicion").innerText;
const piloto=f.querySelector(".nombre-piloto").innerText;

mensaje+=`${pos} ${piloto}\n`;

});

mensaje+=`\n *Vuelta Rápida*\n${vueltaRapida}`;

const url="https://wa.me/5491154865284?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

};

document.getElementById("descargar").onclick=function(){

if(!pronosticoCompleto()) return;

const filas=[];

document.querySelectorAll(".fila-posicion").forEach(f=>{

const piloto=f.querySelector(".piloto");

if(piloto){

const pos=f.querySelector(".numero-posicion").innerText;
const nombre=piloto.querySelector(".nombre-piloto").innerText;
const bandera=piloto.querySelector(".bandera-box img").src;
const equipo=piloto.querySelector(".equipo-box img").src;

filas.push({
pos,
nombre,
bandera,
equipo
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

let html=`

<div style="border-top:6px solid #e10600;padding-top:20px;">

<h2 style="
text-align:center;
margin-bottom:5px;
font-size:28px;
">
Pronóstico Carrera
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

html+=`

<tr style="
background:#151922;
border-bottom:1px solid #2a2f3a;
height:52px;
">

<td style="
width:60px;
font-weight:bold;
text-align:center;
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
width:32px;
height:20px;
display:flex;
align-items:center;
justify-content:center;
">
<img src="${f.bandera}" style="
max-width:100%;
max-height:100%;
object-fit:contain;
">
</div>

<div style="
width:32px;
height:24px;
">
<img src="${f.equipo}" style="max-width:100%;max-height:100%;">
</div>

<span>${f.nombre}</span>

</div>

</td>

</tr>

`;

});

html+=`</table>

<div style="
margin-top:30px;
font-size:22px;
text-align:center;
font-weight:bold;
">

Vuelta Rápida: ${vueltaRapida}

</div>

</div>`;

tabla.innerHTML=html;

document.body.appendChild(tabla);

html2canvas(tabla,{
backgroundColor:"#0f1116",
scale:4
}).then(canvas=>{

const link=document.createElement("a");

link.download="pronostico-carrera.png";
link.href=canvas.toDataURL("image/png");
link.click();

tabla.remove();

});

};