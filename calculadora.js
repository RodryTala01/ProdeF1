// --- GP y resultados oficiales ---
const gpList = [
  {value:"australia", nombre:"GP Australia", sprint:"no"},
  {value:"china", nombre:"GP de China", sprint:"si"},
  {value:"japon", nombre:"GP de Japón", sprint:"no"},
  {value:"bahrein", nombre:"GP de Bahréin", sprint:"no"},
  {value:"arabiasaudita", nombre:"GP de Arabia Saudita", sprint:"no"},
  {value:"miami", nombre:"GP de Miami", sprint:"si"},
  {value:"canada", nombre:"GP de Canadá", sprint:"si"},
  {value:"monaco", nombre:"GP de Mónaco", sprint:"no"},
  {value:"espana", nombre:"GP de España", sprint:"no"},
  {value:"austria", nombre:"GP de Austria", sprint:"no"},
  {value:"reino-unido", nombre:"GP de Reino Unido", sprint:"si"},
  {value:"belgica", nombre:"GP de Bélgica", sprint:"no"},
  {value:"hungria", nombre:"GP de Hungría", sprint:"no"},
  {value:"paisesbajos", nombre:"GP de Países Bajos", sprint:"si"},
  {value:"italia", nombre:"GP de Italia", sprint:"no"},
  {value:"madrid", nombre:"GP de Madrid", sprint:"no"},
  {value:"azerbaiyan", nombre:"GP Azerbaiyán", sprint:"no"},
  {value:"singapur", nombre:"GP de Singapur", sprint:"si"},
  {value:"estadosunidos", nombre:"GP de Estados Unidos", sprint:"no"},
  {value:"mexico", nombre:"GP de Ciudad de México", sprint:"no"},
  {value:"brasil", nombre:"GP de Brasil", sprint:"no"},
  {value:"lasvegas", nombre:"GP de Las Vegas", sprint:"no"},
  {value:"qatar", nombre:"GP de Qatar", sprint:"no"},
  {value:"abudabi", nombre:"GP de Abu Dabi", sprint:"no"}
];

// Datos de prueba: resultado oficial Australia Clasificación
const resultados = {
  australia: {
    clasificacion:{
      posiciones:[
        "Sergio Pérez","Charles Leclerc","Oliver Bearman","Lando Norris","Oscar Piastri",
        "Kimi Antonelli","George Russell","Max Verstappen","Isack Hadjar","Lewis Hamilton",
        "Valtteri Bottas","Gabriel Bortoleto","Esteban Ocon","Liam Lawson","Nico Hülkenberg",
        "Arvid Lindblad","Fernando Alonso","Lance Stroll","Carlos Sainz","Alexander Albon",
        "Pierre Gasly","Franco Colapinto"
      ]
    },
    carrera:{
      posiciones:[
        "Sergio Pérez","Lewis Hamilton","Charles Leclerc","Esteban Ocon","Lando Norris",
        "George Russell","Kimi Antonelli","Isack Hadjar","Arvid Lindblad","Carlos Sainz",
        "Alexander Albon","Pierre Gasly","Fernando Alonso","Nico Hülkenberg","Valtteri Bottas",
        "Oscar Piastri","Franco Colapinto","Lance Stroll","Oliver Bearman","Max Verstappen",
        "Gabriel Bortoleto","Liam Lawson"
      ],
      vueltaRapida:"Lewis Hamilton"
    }
  }
};

// Equipos para compañero 50%
const equipos = {
  "Sergio Pérez":"Red Bull","Charles Leclerc":"Ferrari","Oliver Bearman":"Haas",
  "Lando Norris":"McLaren","Oscar Piastri":"McLaren","Kimi Antonelli":"Mercedes",
  "George Russell":"Mercedes","Max Verstappen":"Red Bull","Isack Hadjar":"Red Bull",
  "Lewis Hamilton":"Mercedes","Valtteri Bottas":"Cadillac","Gabriel Bortoleto":"Audi",
  "Esteban Ocon":"Haas","Liam Lawson":"Visacash","Nico Hülkenberg":"Audi",
  "Arvid Lindblad":"Visacash","Fernando Alonso":"Alpine","Lance Stroll":"Aston Martin",
  "Carlos Sainz":"Williams","Alexander Albon":"Williams","Pierre Gasly":"Alpine",
  "Franco Colapinto":"Alpine"
};

// --- REFERENCIAS DOM ---
const mensajePronostico = document.getElementById("mensajePronostico");
const gpSelector = document.getElementById("gpSelector");
const clasificacionCarrera = document.getElementById("clasificacionCarrera");
const tipoCarrera = document.getElementById("tipoCarrera");

// --- CARGAR SELECTOR GP ---
gpList.forEach(gp=>{
  const option = document.createElement("option");
  option.value = gp.value;
  option.textContent = gp.nombre;
  option.dataset.sprint = gp.sprint;
  gpSelector.appendChild(option);
});

const sprintContainer = document.getElementById("sprintContainer");

function actualizarSprint(){
  const selected = gpSelector.selectedOptions[0];
  if(!selected) return;

  const tieneSprint = selected.dataset.sprint === "si";

  if(tieneSprint){
    sprintContainer.style.display = "block"; // mostrar contenedor
    tipoCarrera.value = ""; // resetear
  }else{
    sprintContainer.style.display = "none"; // ocultar contenedor
    tipoCarrera.value = "normal"; // default
  }
}

// ocultarlo al cargar la página según GP
actualizarSprint();

// evento cuando cambia el GP
gpSelector.addEventListener("change", actualizarSprint);


// --- PARSEAR MENSAJE ---
function parsearMensaje(texto,tipo){
  const lineas = texto.split("\n").map(l=>l.trim()).filter(l=>l!=="");
  let pronostico = [];

  if(tipo==="clasificacion"){
    let zona="";
    for(let l of lineas){
      if(l.startsWith("Q3")) zona="Q3";
      else if(l.startsWith("Q2")) zona="Q2";
      else if(l.startsWith("Q1")) zona="Q1";
      else if(l.startsWith("────────────")) continue;
      else pronostico.push({nombre:l.replace(/^\d+°?\s*/,""),zona});
    }
  }else if(tipo==="carrera"){
    for(let l of lineas){
      if(l.startsWith("Vuelta Rápida")) continue;
      else pronostico.push({nombre:l.replace(/^\d+°?\s*/,"")});
    }
  }

  return pronostico;
}

// --- CALCULAR PUNTOS ---
function calcularPuntos(usuario,real,tipo,vuelta){
  let total=0;
  let aciertos=0;
  const tablaUsuario = document.getElementById("tablaUsuario");
  const tablaReal = document.getElementById("tablaReal");
  tablaUsuario.innerHTML="";
  tablaReal.innerHTML="";

  for(let i=0;i<real.length;i++){
    const realP = real[i];
    const usuarioP = usuario[i]?.nombre || "";

    let clase = "";
    let puntos=0;

    if(tipo==="clasificacion"){
      if(usuarioP===realP){
        clase="acertado";
        if(i===0) puntos=4;
        else if(i===1) puntos=3;
        else if(i===2) puntos=2;
        else if(i>=3 && i<=9) puntos=1.5;
        else if(i>=10 && i<=15) puntos=0.6;
        else puntos=0.3;
      }else{
        if(usuarioP && equipos[usuarioP]===equipos[realP]) puntos=(i<3? (i===0?2: i===1?1.5:1):i>=3 && i<=9?0.75:i>=10 && i<=15?0.3:0.15);
        clase="fallado";
      }
    }else if(tipo==="carrera"){
      if(usuarioP===realP){
        clase="acertado";
        if(i===0) puntos=8;
        else if(i===1) puntos=6;
        else if(i===2) puntos=4;
        else if(i>=3 && i<=9) puntos=2;
        else puntos=1;
      }else{
        if(usuarioP && equipos[usuarioP]===equipos[realP]) puntos=(i<3? (i===0?4: i===1?3:2)/2:i>=3 && i<=9?1:0.5:i>=10 && i<=21?0.5:0);
        clase="fallado";
      }
    }

    aciertos += clase==="acertado"?1:0;
    total += puntos;

    const divU=document.createElement("div");
    divU.className=clase;
    divU.innerText=usuarioP;
    tablaUsuario.appendChild(divU);

    const divR=document.createElement("div");
    divR.innerText=realP;
    tablaReal.appendChild(divR);
  }

  // Vuelta rápida
  const vrContainer = document.getElementById("vrContainer");
  if(tipo==="carrera" && vuelta){
    vrContainer.style.display="flex";
    const vrUsuarioDiv = document.getElementById("vrUsuario");
    const vrRealDiv = document.getElementById("vrReal");
    const aciertoVR = vuelta===resultados["australia"].carrera.vueltaRapida;
    vrUsuarioDiv.innerText=vuelta;
    vrUsuarioDiv.style.color = aciertoVR?"#0f5e0f":"#f00";
    vrRealDiv.innerText=resultados["australia"].carrera.vueltaRapida;
    vrRealDiv.style.color="#fff";
  }else{
    vrContainer.style.display="none";
  }

  document.getElementById("puntosContainer").style.display="block";
  document.getElementById("puntosTotales").innerText = total.toFixed(1);
  document.getElementById("cantidadAciertos").innerText = aciertos;
}

// --- BOTÓN CALCULAR ---
document.getElementById("calcular").addEventListener("click",()=>{
  const mensaje = mensajePronostico.value;
  const gp = gpSelector.value;
  const tipo = clasificacionCarrera.value;
  const carreraSprint = tipoCarrera.value;
  if(!mensaje||!gp||!tipo){
    alert("Completa todos los campos");
    return;
  }

  const usuario = parsearMensaje(mensaje,tipo);
  const real = tipo==="clasificacion"?resultados[gp].clasificacion.posiciones:resultados[gp].carrera.posiciones;
  let vuelta = null;
  if(tipo==="carrera"){
    const match = mensaje.match(/Vuelta Rápida\s*([\w\s]+)/i);
    if(match) vuelta = match[1].trim();
  }

  calcularPuntos(usuario,real,tipo,vuelta);
});