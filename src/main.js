import data from './data/pokemon/pokemon.js'




const filtrar = document.getElementById("normal");
filtrar.addEventListener("click", ()=>{
    console.log("json:",data);
    console.log("json:",data.pokemon[0].name);
    var tipo2 = JSON.stringify(data).filter(function(entry){ console.log(entry.pokemon[0].type === "grass")}); 
    console.log("type:",tipo2);
    
});

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