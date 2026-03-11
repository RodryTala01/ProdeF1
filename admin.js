const input = document.getElementById("inputDatos");
const generar = document.getElementById("generar");
const tablaContainer = document.getElementById("tablaContainer");
const copiarBtn = document.getElementById("copiar");

generar.addEventListener("click",()=>{

const texto = input.value.trim();

if(!texto){
alert("Pegá la tabla primero");
return;
}

const lineas = texto.split("\n");

if(lineas.length <= 1){
alert("Formato incorrecto");
return;
}

let jugadores = [];

for(let i=1;i<lineas.length;i++){

const partes = lineas[i].split("\t");

if(partes.length < 5) continue;

let nombreRaw = partes[0];
let gpGanados = 0;

let match = nombreRaw.match(/\((\d+)\)/);

if(match){
gpGanados = parseInt(match[1]);
nombreRaw = nombreRaw.replace(/\(\d+\)/,"").trim();
}

jugadores.push({

nombre:nombreRaw,
gp:gpGanados,
puntos:parseFloat(partes[1]),
plenos:parseInt(partes[2]),
parciales:parseInt(partes[3]),
errores:parseInt(partes[4])

});

}

jugadores.sort((a,b)=>{

// 1 PUNTOS
if(b.puntos !== a.puntos){
return b.puntos - a.puntos;
}

// 2 PLENOS
if(b.plenos !== a.plenos){
return b.plenos - a.plenos;
}

// 3 PARCIALES
if(b.parciales !== a.parciales){
return b.parciales - a.parciales;
}

// 4 ERRORES
return a.errores - b.errores;

});

const descargarBtn = document.getElementById("descargar");

descargarBtn.addEventListener("click", ()=>{

const area = document.getElementById("exportarImagen");

html2canvas(area,{
scale:2,
useCORS:true,
allowTaint:true,
backgroundColor:null
}).then(canvas=>{

const link = document.createElement("a");

link.download = "prode-f1.png";
link.href = canvas.toDataURL("image/png");

link.click();

});

});

generarTabla(jugadores);

});

function generarTabla(jugadores){

let html = "<table>";

html += `
<tr>
<th>#</th>
<th>Participante</th>
<th class="pts">PTS</th>
<th class="num">PL</th>
<th class="num">PR</th>
<th class="num">ER</th>
</tr>
`;

jugadores.forEach((j,i)=>{

let trofeos = "";

for(let t=0;t<j.gp;t++){
trofeos += `<img class="trofeo" src="image/TrofeoGP.png">`;
}

html += `
<tr>

<td class="pos">${i+1}</td>

<td class="participante">
<div class="jugador contEscudo">

<img class="escudo" src="image/escudos/${j.nombre}.png" onerror="this.src='image/escudos/default.png'">

<span class="nombre">${j.nombre}</span>

<div class="contTrofeo"><span class="trofeos">${trofeos}</span></div>

</div>
</td>

<td class="pts">${j.puntos}</td>
<td class="num">${j.plenos}</td>
<td class="num">${j.parciales}</td>
<td class="num">${j.errores}</td>

</tr>
`;

});

html += "</table>";

tablaContainer.innerHTML = html;

copiarBtn.style.display="inline-block";

}

copiarBtn.addEventListener("click",()=>{

const texto = tablaContainer.innerText;

navigator.clipboard.writeText(texto);

alert("Tabla copiada");

});



