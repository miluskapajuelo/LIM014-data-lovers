import funciones from "./data.js";
import data from "./data/pokemon/pokemon.js";

let newData = funciones.NewData(data.pokemon);

const lista = document.getElementById("lista");

const modalMode = document.getElementById("modal-mode"); 
const modalWindow = document.getElementById("modal-window");

/* DEFINIR SI EXISTE UNA EVOLUCIÓN SIGUIENTE O PREVIA */
function getNextEvol(evol){
    let netevol = evol[0]["next-evolution"];
    const evolution = [];
    if(netevol){
      evolution.push(...getNextEvol(netevol));
    }
    evolution.push(evol[0]);
    return evolution;
    }
function getPrevEvol(evol){
  let netevol = evol[0]["prev-evolution"];
  const evolution = [];
  if(netevol){
    evolution.push(...getPrevEvol(netevol));
  }
  evolution.push(evol[0]);
  return evolution;
  }


/* FUNCIÓN DE APOYO */

function mostrarCard(array) {
  if (array.length !== 0) {
    array.forEach(function (element) {
      let node0 = document.createElement("figcaption");
      let node = document.createElement("figure");
      let node2 = document.createElement("img");
      let node3 = document.createElement("figcaption");
      let animacion = document.createElement("div");
      let node5 = document.createElement("p");
      animacion.className = "capa";
      node5.innerText = element.about;
      node2.src = element.img;
      node0.innerHTML=`<p style="font-size: 13px;text-align: end"> CP: ${element.maxCp}</p>`;
      node3.innerText= element.name;
      let figura = document.getElementById("lista").appendChild(node);
      figura.appendChild(node0);
      figura.appendChild(node2);
      figura.appendChild(node3);
      figura.appendChild(animacion);
      animacion.appendChild(node5);
      
      /* FUNCIÓN DE EVOLUCIÓN DEL POKEMON */
      /* FUNCIÓN POSTERIOR */
      let next;
      function evolucionNext(){
        if(element.evolution){ 
          let cade = "";
          if(element.evolutionNext){
            next = getNextEvol(element.evolutionNext);
            next.forEach(elemento => cade +=  `<tr>
            <td>Next-Evolution</td>
            <td>${elemento.name}</td>
            <td><img id="pokemon-evolucion" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"></td>
            <td>${elemento["candy-cost"]}</td>
          </tr>`)
            }
            return cade
      }
    }
    /* FUNCIÓN ANTERIOR */
    let prev;
    function evolucionPre(){
      if(element.evolution){ 
        let cade = "";
        if(element.evolutionPrev){
          prev = getPrevEvol(element.evolutionPrev);
          prev.forEach(elemento => cade += `<tr>
          <td>Pre-Evolution</td>
          <td>${elemento.name}</td>
          <td><img id="pokemon-evolucion" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"></td>
          <td>${elemento["candy-cost"]}</td>
        </tr>`)
          }
          return cade
    }
  }
      /* CLICK MOSTRAR MODAL */
      let btnModal = node.querySelector(".capa");
      btnModal.addEventListener("click", mostrarModal);
      
      function mostrarModal() {
    
        modalMode.classList.toggle("hide");
        modalWindow.classList.toggle("hide");
        
              
        modalWindow.innerHTML = 
        `<div id="div-img-modal"><img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">
            </div> 
            
            <section id="body-modal" class="modal flex-wrap">
            <article id="NameModal" class="font f-medium f-green one-fraction"> 
            <p class="nameP"></p>
            ${element.name}
            </article>
            <article id="pokemon-generacion-modal" class="font-g f-medium-g f-green-g one-fraction "> 
            Generación : ${element.generation}
            </article>
            <br>
            <br>
            <div class="column-1 flex-wrap color-container ">  
            <img src="./img/talla.png" alt="" class="icon-medium">           
            <div class="font f-small">
                <span class="block f-green">Height: </span><span id="otro" class="">${element.height}</span>
            </div> 
            </div>
            <div class="column-1 flex-wrap color-container ">  
            <img src="./img/weight.png" alt="" class="icon-medium">           
            <div class="font f-small">
                <span class="block f-green">Weight: </span><span id="value-height" class="">${element.weight}</span>
            </div> 
            </div>
            <div class="column-1 flex-wrap color-container ">            
            <div class="font f-small">
                <span class="image-size">Type: </span>
                <span id="value-height">
                  ${element.type.length === 1 ?
                   '<img src="./img/' + element.type[0]+ '.png" alt="" class="icon-medium">' :
                   '<img src="./img/' + element.type[0]+ '.png" alt="" class="icon-medium"><img src="./img/' + element.type[1]+ '.png" alt="" class="icon-medium">'}
                </span>
            </div> 
            </div>
            </section>
            <section id="body-modal2" class="modal2 flex-wrap2">
            <div class="left-stat">
            <div class="box1">
                <p class="titulo" >Resistant: </p>
                <p class="caract">${element.resistant}</P>
            </div>
            <div class="box1">
              <p class="titulo" >Weaknesses: </p>
              <p class="caract">${element.weaknesses}</P>
            </div>
            
            <div class="containerTable">
            <table class="tableEvoluciones">
            <tr>
              <td></td>
              <td>Name</td>
              <td>Me</td>
              <td>Candy Cost</td>
            </tr>
            <tr>
              <tr>${evolucionPre()}</tr>
              <tr>
              <td>ACTUAL</td>
              <td>${element.name}</td>
              <td><img src="${element.img}" alt="" id="pokemon-evolucion" class="image-modal"></td>
              </tr>
              <tr>${evolucionNext()}</tr>
              </tr>
            
            </table>
            </div>
            </div>
            <div>
            <a href="#" title="Close" class="modal-close">Close</a>
            </div>
            </section>`;
        
        
        const btnCloseModal = modalWindow.querySelector(".modal-close");

        btnCloseModal.addEventListener("click", cerrarModal);
      }

      function cerrarModal() {
        modalMode.classList.toggle("hide");
        modalWindow.classList.toggle("hide");
      }
    });
  } else {
    lista.innerHTML = "<h1>No se han encontrado pokemones</h1>";
  }
} 

/* FILTRO TIPO DE POKEMON */  

const botones = document.querySelectorAll(".fa");
const elegir = (evento) => {
  lista.innerHTML = "";
  let a = funciones.FilterData(newData, evento.target.id);

  mostrarCard(a)
  let array = [];
  a.forEach(function(elemento){
    
  array.push(parseInt(elemento.maxCp))
})
  let sum = array.reduce((a, b) => a + b, 0);
  let avg = sum / array.length;
  let max = Math.max(...array);
  let min = Math.min(...array);
  let average = avg.toFixed(2);

  const PMax = document.getElementById("max");
  const PMin = document.getElementById("min");
  const Pavg = document.getElementById("avg");
  PMax.innerHTML = `<p>MAX CP:</p><p>${max}</p>`;
  PMin.innerHTML = `<p>MIN CP:</p><p>${min}</p>`;
  Pavg.innerHTML = `<p>PROM CP:</p><p>${average}</p>`;
};

botones.forEach((boton) => {
  boton.addEventListener("click", elegir);
});
 
/* ORDEN A-Z */

const ordera = document.querySelector("#selecta");
ordera.addEventListener("change", (event) => {
  lista.innerHTML = "";
  let valor = event.target.value;
  let a = funciones.sortData(newData, valor);
  mostrarCard(a);
});


/* BUSQUEDA POR TEXTO */
const text = document.querySelector("#text");
const filtrar = () => {
  lista.innerHTML = "";
  const valorTexto = text.value.toLowerCase();
  let a = funciones.BuscarTexto(newData, valorTexto);
  mostrarCard(a);
};
text.addEventListener("keyup", filtrar);
filtrar(); 

/* Ingresar a la segunda pantalla */
const entrar = document.getElementById("entrar");

entrar.addEventListener("click", () => {
  document.getElementById("firstscreen").classList.add("hide");
  document.getElementById("firstscreen").classList.remove("display");
  document.getElementById("secondscreen").classList.add("display");
  document.getElementById("secondscreen").classList.remove("hide");
  document.body.style.background = "#fff";
}); 

/* Menú desplegable */

const menu = document.getElementById("menu");
menu.addEventListener("click", function press2() {
  let siteNav = document.getElementById("site-nav");
  siteNav.classList.toggle("site-nav-open");
  menu.classList.toggle("menu-open");
}); 

//Audio de Pokemon
const audio = document.getElementById("audio");
const playPauseBTN = document.getElementById("playPauseBTN");
let count = 0;
playPauseBTN.addEventListener("click", function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause &#9208;";
  } else {
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9658;";
  }
}); 

/* GRAFICO RADIAL */
/* var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
}); 

return radarChart */