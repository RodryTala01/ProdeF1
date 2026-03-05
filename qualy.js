const pilotos = [
  { nombre: "Fernando Alonso", pais: "espana", equipo: "astonmartin" },
  { nombre: "Lewis Hamilton", pais: "britain", equipo: "ferrari" },
  { nombre: "Nico Hülkenberg", pais: "alemania", equipo: "audi" },
  { nombre: "Sergio Pérez", pais: "mexico", equipo: "cadillac" },
  { nombre: "Valtteri Bottas", pais: "finlandia", equipo: "cadillac" },
  { nombre: "Max Verstappen", pais: "holanda", equipo: "redbull" },
  { nombre: "Esteban Ocon", pais: "francia", equipo: "haas" },
  { nombre: "Carlos Sainz", pais: "espana", equipo: "williams" },
  { nombre: "Lance Stroll", pais: "canada", equipo: "astonmartin" },
  { nombre: "Charles Leclerc", pais: "monaco", equipo: "ferrari" },
  { nombre: "Pierre Gasly", pais: "francia", equipo: "alpine" },
  { nombre: "George Russell", pais: "britain", equipo: "mercedes" },
  { nombre: "Lando Norris", pais: "britain", equipo: "mclaren" },
  { nombre: "Alexander Albon", pais: "tailandia", equipo: "williams" },
  { nombre: "Liam Lawson", pais: "nuevazelanda", equipo: "visacash" },
  { nombre: "Oscar Piastri", pais: "australia", equipo: "mclaren" },
  { nombre: "Oliver Bearman", pais: "britain", equipo: "haas" },
  { nombre: "Isack Hadjar", pais: "francia", equipo: "redbull" },
  { nombre: "Franco Colapinto", pais: "argentina", equipo: "alpine" },
  { nombre: "Kimi Antonelli", pais: "italia", equipo: "mercedes" },
  { nombre: "Gabriel Bortoleto", pais: "brasil", equipo: "audi" },
  { nombre: "Arvid Lindblad", pais: "britain", equipo: "visacash" }
];

const coloresEquipos = {
  ferrari:"#dc0000", mercedes:"#00d2be", redbull:"#1e41ff",
  mclaren:"#ff8700", alpine:"#ff69b4", astonmartin:"#006f62",
  williams:"#00f7ff", haas:"#b6b6b6", audi:"#bb0000",
  cadillac:"#9fa3a6", visacash:"#2b3f42"
};

const lista = document.getElementById("listaPilotos");
const q3 = document.getElementById("q3");
const q2 = document.getElementById("q2");
const q1 = document.getElementById("q1");

let seleccionado = null;

pilotos.sort((a,b)=>a.equipo.localeCompare(b.equipo));

function crearPiloto(p){
  const div = document.createElement("div");
  div.className="piloto";
  div.draggable=true;
  div.style.borderLeft=`4px solid ${coloresEquipos[p.equipo]}`;

  div.innerHTML=`
    <div class="piloto-info">
      <img src="image/${p.pais}.png" class="bandera">
      <img src="image/${p.equipo}.png" class="equipo">
      <span>${p.nombre}</span>
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

function crearCasilleros(zona,cantidad,inicioPosicion=null){
  for(let i=0;i<cantidad;i++){
    const c=document.createElement("div");
    c.className="casillero vacio";

    if(inicioPosicion!==null){
      const numero=document.createElement("div");
      numero.className="numero-posicion";
      numero.textContent=inicioPosicion+i;
      c.appendChild(numero);

      if(i===0) c.classList.add("pole");
    }

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
      if(!seleccionado)return;
      colocar(c,seleccionado);
      limpiarSeleccion();
    };

    zona.appendChild(c);
  }
}

function colocar(casillero,piloto){
  if(casillero.querySelector(".piloto")){
    lista.appendChild(casillero.querySelector(".piloto"));
  }

  casillero.appendChild(piloto);
  casillero.classList.remove("vacio");
}

pilotos.forEach(p=>lista.appendChild(crearPiloto(p)));

crearCasilleros(q3,10,1);
crearCasilleros(q2,6);
crearCasilleros(q1,6);