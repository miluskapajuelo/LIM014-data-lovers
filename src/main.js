import funciones from "./data.js";
import data from "./data/pokemon/pokemon.js";

const btnn = document.getElementById("btn10");
btnn.addEventListener("click", function(){

const poke=data.pokemon;
let array = [];
poke.forEach(function(elemento){
  array.push(parseInt(elemento.stats["max-cp"]))
})
let sum = array.reduce((a, b) => a + b, 0);
let avg = sum / array.length;

console.log(Math.max(...array))
console.log(Math.min(...array))
console.log(avg.toFixed(2))})




















const lista = document.getElementById("lista");

const modalMode = document.getElementById("modal-mode"); 
const modalWindow = document.getElementById("modal-window");

/* FUNCIÓN DE APOYO */

function mostrarCard(array) {
  if (array.length !== 0) {
    array.forEach(function (element) {
      let node = document.createElement("figure");
      let node2 = document.createElement("img");
      let node3 = document.createElement("figcaption");
      let animacion = document.createElement("div");
      let node5 = document.createElement("p");
      animacion.className = "capa";
      node5.innerText = element.about;
      node2.src = element.img;
      node3.innerText = element.name;
      let figura = document.getElementById("lista").appendChild(node);
      figura.appendChild(node2);
      figura.appendChild(node3);
      figura.appendChild(animacion);
      animacion.appendChild(node5);

      
      let btnModal = node.querySelector(".capa");
      btnModal.addEventListener("click", mostrarModal);
      

      function mostrarModal() {
        modalMode.classList.toggle("hide");
        modalWindow.classList.toggle("hide");
        if(element.type.length !== 1){
          
        modalWindow.innerHTML = `<div id="div-img-modal">
            <img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">
            </div> 
            
            <section id="body-modal" class="modal flex-wrap">
            <article id="pokemon-name-modal" class="font f-medium f-green one-fraction"> 
            ${element.name}
            </article>
            <article id="pokemon-generacion-modal" class="font-g f-medium-g f-green-g one-fraction "> 
            (${element.generation})
            </article>
            <br>
            <br>
            <div class="column-1 flex-wrap color-container ">  
            <img src="./img/talla.png" alt="" class="icon-medium">           
            <div class="font f-small">
                <span class="block f-green">Height: </span><span id="value-height" class="">${element.height}</span>
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
                <span class="image-size">Type: </span><span id="value-height">${element.type.length}<img src="./img/${element.type[1]}.png" alt="" class="icon-medium"><img src="./img/${element.type[0]}.png" alt="" class="icon-medium"></span>
            </div> 
            </div>
            </section>
            <section id="body-modal2" class="modal2 flex-wrap2">
            <div class="box1">
                <p class="titulo" >Resistant: </p>
                <p class="caract">${element.resistant}</P>
            </div>
            <div class="box1">
              <p class="titulo" >Weaknesses: </p>
              <p class="caract">${element.weaknesses}</P>
            </div>
            </section>
            
            <div id="move-and-attack" class="column-4 flex-wrap" style="display: flex;">
            <span class="two-fraction font f-small f-blue">stats</span>
            <table id="stats-table" class="column-4 font">
            <tbody><tr><th></th>
            <th><img class="icon-small" src="./img/stats.png"></th></tr></tbody>
            <tbody><tr>
            <td>base-attack</td>
            <td>${element.baseAttack} </td></tr></tbody>
            <tbody><tr>
            <td>base-defense</td>
            <td>${element.baseDefense}</td></tr></tbody>
            <tbody><tr>
            <td>base-stamina</td>
            <td>${element.baseStamina}</td></tr></tbody>
            <tbody><tr>
            <td>max-cp</td>
            <td>${element.maxCp}</td></tr></tbody>
            <tbody><tr>
            <td>max-hp</td>
            <td>${element.maxHp}</td></tr></tbody>
          </table>
        </div>
            <div class="column-3 flex-wrap3 color-container3">
              <div class="font f-small">
                <span class="block f-blue">baseAttack:</span><br><span id="value-region" class="color-gray">${element.baseAttack}</span>
              </div>
            </div>
            </section>`;
        }
        else{
          
          modalWindow.innerHTML = `<div id="div-img-modal">
            <img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">
            </div> 
            
            <section id="body-modal" class="modal flex-wrap">
            <article id="pokemon-name-modal" class="font f-medium f-green one-fraction"> 
            ${element.name}
            </article>
            <article id="pokemon-generacion-modal" class="font-g f-medium-g f-green-g one-fraction "> 
            (${element.generation})
            </article>
            <br>
            <br>
            <div class="column-1 flex-wrap color-container ">  
            <img src="./img/talla.png" alt="" class="icon-medium">           
            <div class="font f-small">
                <span class="block f-green">Height: </span><span id="value-height" class="">${element.height}</span>
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
                <span class="block f-green">Type: </span><span id="value-height">${element.type.length}<img src="./img/${element.type}.png" alt="" class="icon-medium"></span>
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
            </div>
            </div>
            <div class="right-stat"> 
             <div id="move-and-attack" class="column-4 flex-wrap" style="display: flex;">
             <span class="two-fraction font f-small f-blue">stats</span>
             <table id="stats-table" class="column-4 font">
             <tbody><tr><th></th>
             <th><img class="icon-small" src="./img/stats.png"></th></tr></tbody>
             <tbody><tr>
             <td>base-attack</td>
             <td>${element.baseAttack} </td></tr></tbody>
             <tbody><tr>
             <td>base-defense</td>
             <td>${element.baseDefense}</td></tr></tbody>
             <tbody><tr>
             <td>base-stamina</td>
             <td>${element.baseStamina}</td></tr></tbody>
             <tbody><tr>
             <td>max-cp</td>
             <td>${element.maxCp}</td></tr></tbody>
             <tbody><tr>
             <td>max-hp</td>
             <td>${element.maxHp}</td></tr></tbody>
             </table>
            </div>
            </div>
            </section>
            `;

        }
        const btnCloseModal = modalWindow.querySelector("#img-pokemon-modal");

        btnCloseModal.addEventListener("click", cerrarModal);
      }

      function cerrarModal() {
        modalMode.classList.toggle("hide");
        modalWindow.classList.toggle("hide");
      }
    });
  } else {
    lista.innerHTML = "<h1>no se ha encontrado pokemos</h1>";
  }
} 

/* FILTRO TIPO DE POKEMON */

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
  


const botones = document.querySelectorAll(".fa");
const elegir = (evento) => {
  lista.innerHTML = "";
  let a = funciones.FilterData(data, evento.target.id);
  mostrarCard(a);
};

botones.forEach((boton) => {
  boton.addEventListener("click", elegir);
});
 
/* ORDEN A-Z */

const ordera = document.querySelector("#selecta");
ordera.addEventListener("change", (event) => {
  lista.innerHTML = "";
  let valor = event.target.value;
  let a = funciones.sortData(data, valor);
  mostrarCard(a);
});
const ordera2 = document.querySelector("#selecta1");
ordera2.addEventListener("change", (event) => {
  lista.innerHTML = "";
  let valor = event.target.value;
  let a = funciones.sortData(data, valor);
  mostrarCard(a);
}); 

/* BUSQUEDA POR TEXTO */
const text = document.querySelector("#text");
const filtrar = () => {
  lista.innerHTML = "";
  const valorTexto = text.value.toLowerCase();
  let a = funciones.BuscarTexto(data.pokemon, valorTexto);
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