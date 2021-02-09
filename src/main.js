import filtrara from './data.js';
import data from './data/pokemon/pokemon.js';

  

const normal = document.getElementById("normal");
normal.addEventListener("click", () =>{

  let a = filtrara.filterData(data,"normal");
  lista.innerHTML = "";
    for(let i=0;i<a[0].length;i++){
        let node = document.createElement("figure");
        let node2 = document.createElement("img");
        let node3 = document.createElement("figcaption");
        let animacion = document.createElement("div");
        let node4 = document.createElement("a");
        let node5 = document.createElement("p");
        animacion.className = 'capa';
        node5.innerText = a[2][i];
        node4.innerText = a[3][i];
        node2.src = a[0][i];
        node3.innerText = a[1][i];
        let figura= document.getElementById("lista").appendChild(node);
        figura.appendChild(node2);
        figura.appendChild(node3);
        figura.appendChild(animacion);
        animacion.appendChild(node4);
        animacion.appendChild(node5);
        
}}); 

data.pokemon.sort(function (prev,next){
    if(prev.name > next.name){
        return 1;
    }
    if(prev.name < next.name){
        return -1;
    }
    return 0;
});

/* let a = filtrara.sortdata(data);
for(let i=0;i<a[1].length;i++){
    let node = document.createElement("figure");
    let node2 = document.createElement("img");
    let node3 = document.createElement("figcaption");
    let animacion = document.createElement("div");
    let node5 = document.createElement("p");
    let node4 = document.createElement("a");
    animacion.className = 'capa';
    node5.innerText = a[2][i];
    node4.innerText = a[3][i];
    node2.src = a[0][i];
    node3.innerText = a[1][i];
    let figura= document.getElementById("lista").appendChild(node);
    figura.appendChild(node2);
    figura.appendChild(node3);
    figura.appendChild(animacion);
    animacion.appendChild(node4);
    animacion.appendChild(node5);
} */


const text = document.querySelector("#text");
const lista = document.getElementById("lista");
const filtrar = () => {
   lista.innerHTML = "";
   const valorTexto = text.value.toLowerCase();
   let a = filtrara.sortdata(data);
   for(let i=0;i<a[1].length;i++){
   let nombre = a[1][i].toLowerCase();
        if(nombre.indexOf(valorTexto) !==-1){            
            let node = document.createElement("figure");
            let node2 = document.createElement("img");
            let node3 = document.createElement("figcaption");
            let animacion = document.createElement("div");
            let node5 = document.createElement("p");
            let node4 = document.createElement("a");
            animacion.className = 'capa';
            node5.innerText = a[2][i];
            node4.innerText = a[3][i];
            node2.src = a[0][i];
            node3.innerText = a[1][i];
            let figura= document.getElementById("lista").appendChild(node);
            figura.appendChild(node2);
            figura.appendChild(node3);
            figura.appendChild(animacion);
            animacion.appendChild(node4);
            animacion.appendChild(node5);
        }
    if(lista.innerHTML === ""){
        lista.innerHTML += ""
    }}};

    text.addEventListener("keyup", filtrar);
    filtrar();
    

/* button.addEventListener("click", filtrar); */

/*  const enter = document.getElementById("enter");
enter.addEventListener("click", ()=>{
    document.getElementById("FirstPage").classList.add("hide");
    document.getElementById("FirstPage").classList.remove("display");
    
    
    document.getElementById("SecondPage").classList.add("display");
    document.getElementById("SecondPage").classList.remove("hide");
    document.body.style.background = "#fff";
}); 
 */
const menu = document.getElementById("menu");
menu.addEventListener("click", function press2(){
    let siteNav = document.getElementById("site-nav");
        siteNav.classList.toggle("site-nav-open");
        menu.classList.toggle("menu-open");
});