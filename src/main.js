import funciones from "./data.js";
import data from "./data/pokemon/pokemon.js";

const lista = document.getElementById("lista");

const modalMode = document.getElementById("modal-mode"); // trae el div de la pantalla modal
const modalWindow = document.getElementById("modal-window");

/* FUNCIÓN DE APOYO */

function mostrarCard(array) {
    console.log(array.length)
  if (array.length !== 0) {
    array.forEach(function (element) {
      let node = document.createElement("figure");
      let node2 = document.createElement("img");
      let node3 = document.createElement("figcaption");
      let animacion = document.createElement("div");
      /*   let node4 = document.createElement("a"); */
      let node5 = document.createElement("p");
      animacion.className = "capa";
      node5.innerText = element.about;
      /* node4.innerText = element.num; */
      node2.src = element.img;
      node3.innerText = element.name;
      let figura = document.getElementById("lista").appendChild(node);
      figura.appendChild(node2);
      figura.appendChild(node3);
      figura.appendChild(animacion);
      /* animacion.appendChild(node4); */
      animacion.appendChild(node5);

      let btnModal = node.querySelector(".capa");
      btnModal.addEventListener("click", mostrarModal);

      function mostrarModal() {
        modalMode.classList.toggle("hide");
        modalWindow.classList.toggle("hide");
        modalWindow.innerHTML = `<div id="div-img-modal">
            <img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">
            </div> 
            <h2 class="nombrePoke"> ${element.name} </h2>
            <p class="nombrePoke"> ${element.generation} </p>
         
            <p class="Characters"> Height </p>
            <p class="Characters"> Weight </p>
            <p class="Characters"> Tipo </p>
          
            <img src="/img/${element.type}.png" class="icono">
            <p class="Characters"> ${element.height} </p>
            <p class="Characters"> ${element.weight} </p>
            <p class="Characters"> ${element.weaknesses} </p>
            <p class="Characters"> ${element.resistant} </p>
            <p class="Characters"> ${element.baseAttack} </p>
            <p class="Characters"> ${element.baseDefense} </p>
            <p class="Characters"> ${element.baseStamina} </p>
            <p class="Characters"> ${element.maxCp} </p>
            <p class="Characters"> ${element.maxHp} </p>
           `;

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
