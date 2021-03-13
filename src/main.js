import funciones from "./data.js";
import data from "./data/pokemon/pokemon.js";


const dashboard = document.getElementById("lista");
const modalMode = document.getElementById("modal-mode");
const modalWindow = document.getElementById("modal-window");
let newData = funciones.NewData(data.pokemon);


/* ENTER TO THE SECOND SCREEN*/
const enter = document.getElementById("enter");
let textUser;
enter.addEventListener("click", () => {
  document.getElementById("firstscreen").classList.add("hide");
  document.getElementById("firstscreen").classList.remove("display");
  document.getElementById("secondscreen").classList.add("display");
  document.getElementById("secondscreen").classList.remove("hide");
  document.body.style.background = "#fff";

  textUser = document.getElementById("textUser").value;
  document.getElementById("UserName").innerHTML = "Welcome " + textUser + " !";
});


/* MENU DROPDOWN */

const menu = document.getElementById("menu");
menu.addEventListener("click", function press2() {
  let siteNav = document.getElementById("site-nav");
  siteNav.classList.toggle("site-nav-open");
  menu.classList.toggle("menu-open");
});

/* AUDIO POKEMON SONG */
const audio = document.getElementById("audio2");
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

/* EXISTS PREV OR NEXT EVOLUTION */
function getNextEvol(evol){
    let nextevol = evol[0]["next-evolution"];
    const evolution = [];
    if(nextevol){
      evolution.push(...getNextEvol(nextevol));
    }
    evolution.push(evol[0]);
    return evolution;
    }
function getPrevEvol(evol){
  let preevol = evol[0]["prev-evolution"];
  const evolution = [];
  if(preevol){
    evolution.push(...getPrevEvol(preevol));
  }
  evolution.push(evol[0]);
  return evolution;
  }


/* FUNCTION TO CREATE ELEMENTS IN DASHBOARD */

       /* FILTER BY TOP 10 */

       const top = document.getElementById("top");
       top.addEventListener("click",function(){
         dashboard.innerHTML = "";
         let a = funciones.top(newData,10)
         mostrarCard(a)
         anotherValues(a)
         orderData(a)
       });

function mostrarCard(array) {
  if (array.length !== 0) {
    array.forEach(function (element) {
      let figcaptionCP = document.createElement("figcaption");
      let figurePokemon = document.createElement("figure");
      let imgPokemon = document.createElement("img");
      let figcaptionName = document.createElement("figcaption");
      let divPokemon = document.createElement("div");
      let description = document.createElement("p");
      divPokemon.className = "cap";
      description.innerText = element.about;
      imgPokemon.src = element.img;
      figcaptionCP.innerHTML=`<p style="font-size: 13px;text-align: end"> CP: ${element.maxCp}</p>`;
      figcaptionName.innerText= element.name;
      let figura = document.getElementById("lista").appendChild(figurePokemon);
      figura.appendChild(figcaptionCP);
      figura.appendChild(imgPokemon);
      figura.appendChild(figcaptionName);
      figura.appendChild(divPokemon);
      divPokemon.appendChild(description);



      /* POKEMON EVOLUTION (NEXT-PREV) */
      /* NEXT EVOLUTION */
      let next;
      function evolucionNext(){
        if(element.evolution){
          let result = "";
          if(element.evolutionNext){
            next = getNextEvol(element.evolutionNext);
            next.forEach(elemento => result += `<tr class= "tablePa">
          <td>Next-Evolution</td>
          <td>${elemento.name}</td>
          <td><img id="pokemon-evolucion" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"></td>
          <td>${elemento["candy-cost"]}</td></tr>`)
            }
            return result
      }
    }
    /* PREV EVOLUTION */
    let prev;
    function evolucionPre(){
      if(element.evolution){
        let result = "";
        if(element.evolutionPrev){
          prev = getPrevEvol(element.evolutionPrev);
          prev.forEach(elemento => result += `<tr class= "tablePa">
        <td>Pre-Evolution</td>
        <td>${elemento.name}</td>
        <td><img id="pokemon-evolucion" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"></td>
        <td>${elemento["candy-cost"]}</td></tr>`)
          }
          return result
    }
  }



  /* TABLE RESISTANT */

  function resistant(){
    let result = "";
      if(element.resistant){
        element.resistant.forEach(elemento => result += `
        <p class="spaceElement">${elemento}</p>`)
        }
        return result
  }
  /* TABLE WEAKNESSES */
  function weaknesses(){
    let result = "";
      if(element.weaknesses){
        element.weaknesses.forEach(elemento => result += `
        <p class="spaceElement">${elemento}</p>`)
        }
        return result
  }

      /* CLICK TO SHOW MODAL */
      let btnModal = figurePokemon.querySelector(".cap");
      btnModal.addEventListener("click", showModal);

      function showModal() {

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
                <p class="titulo " >Resistant: </p>
                <div class="spaceElementF ">${resistant()}</div>
                <p class="titulo" >Weaknesses: </p>
                <div class="spaceElementF">${weaknesses()}</div>
            </div>
            <div id="move-and-attack" class="column-4 flex-wrap2" style="display: flex;">
                <table id="stats-table" class="column-4 font ">
                <caption class="titulo">Stats Table</caption>
                <tbody"><tr>
                <td>base-attack</td>
                <td>${element.baseAttack}</td></tr></tbody>
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
              <div id="move-and-attack" class="column-5 flex-wrap2" style="display: flex;">
                <table id="stats-table" class="column-5 font">
                <caption class="titulo">Evolution Table</caption>
                <thead>
                    <tr>
                      <th>Evolution</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Candy-Cost</th>
                    </tr>
                </thead>
                <tbody>
                ${evolucionPre()}
                </tbody>
                <tbody><tr>
                <td>Now</td>
                <td>${element.name}</td>
                <td><img id="pokemon-evolucion" src="${element.img}"></td>
                <td></td>
                </tr></tbody>
                <tbody>
                ${evolucionNext()}</tbody>

                </table>
              </div>
            </div>

            <footer class="footerModal"> <p class="chance">Spawn Chance: ${element.spawnChance}</p>
            </footer>
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
    dashboard.innerHTML = "<h1>No se han encontrado pokemones</h1>";
  }
}

/* ANOTHER VALUES */

  const anotherValues = (a) => {
  let array = funciones.computeStats(a);
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
}

/* FILTER BY TYPE POKEMON */

const buttons = document.querySelectorAll(".fa");
const choose = (event) => {
  dashboard.innerHTML = "";
  let a = funciones.FilterData(newData, event.target.id);
  mostrarCard(a)
  anotherValues(a)
  orderData(a)
};
buttons.forEach((button) => {
  button.addEventListener("click", choose);
});



/* ORDER BY A-Z /Z-A/+CP/-CP */
const orderData = (data) => {
const choose = document.querySelector("#selecta");
choose.addEventListener("change", (event) => {
  dashboard.innerHTML = "";
  let valor = event.target.value;
  let a = funciones.sortData(data, valor);
  mostrarCard(a)
  anotherValues(a)
})};


/* BUSQUEDA POR TEXTO */
const text = document.querySelector("#text");
const FilterDat = () => {
  dashboard.innerHTML = "";
  const TextValue = text.value.toLowerCase();
  let a = funciones.FindTxt(newData, TextValue);
  mostrarCard(a);
  anotherValues(a)
  orderData(a)
};
text.addEventListener("keyup", FilterDat);
FilterDat()
;

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
