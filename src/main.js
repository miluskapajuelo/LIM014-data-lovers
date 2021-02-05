import filtrara from './data.js';

const normal = document.getElementById("normal");
normal.addEventListener("click", () =>{
    var a = filtrara.filtrar();
    console.log(a)
    for(let i=0;i<a[0].length;i++){
        var node = document.createElement("figure")
        var node2 = document.createElement("img");
        var node3 = document.createElement("figcaption")
        var animacion = document.createElement("div")
        animacion.className = 'capa';
        animacion.innerHTML = '<h3>hola</h3>';
        animacion.innerHTML = '<p>hola</p>';
        node2.src = a[0][i];
        node3.innerText = a[1][i];
        var figura= document.getElementById("lista").appendChild(node);
        figura.appendChild(node2);
        figura.appendChild(node3);
        figura.appendChild(animacion);
        console.log(i)
}
}); 

/* var pokemon = total
const pokemones = document.getElementById("lista").appendChild(pokemon) */





/*  const enter = document.getElementById("enter");
enter.addEventListener("click", ()=>{
    document.getElementById("FirstPage").classList.add("hide");
    document.getElementById("FirstPage").classList.remove("display");
    
    
    document.getElementById("SecondPage").classList.add("display");
    document.getElementById("SecondPage").classList.remove("hide");
    document.body.style.background = "#fff";
}); 
 */
const menu = document.getElementById("menu")
menu.addEventListener("click", function press2(){
    let siteNav = document.getElementById("site-nav");
        siteNav.classList.toggle("site-nav-open");
        menu.classList.toggle("menu-open");
});

/* function cambia(){
    var cosa;
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;

}

let filtrar = JSON.stringify(data,["pokemon"]);
console.log(filtrar) */
/* 
1. Llamar al select
2. Capturar el valor del select
*/