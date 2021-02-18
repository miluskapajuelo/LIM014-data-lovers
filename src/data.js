const funciones={ 
 /*  FILTRO POKEMON */
  FilterData : function(data, tipo){
    let PokemonesFiltrados = data.pokemon.filter(data => data.type == tipo);
    let newArray = [] 
    PokemonesFiltrados.forEach(function(pokemones){
      
      newArray.push({
        "img" : pokemones.img,
        "name" : pokemones.name,
        "about" : pokemones.about,
        "num" : pokemones.num, 
        "type" : pokemones.type,
        "weaknesses" : pokemones.weaknesses,
        "generation" : pokemones.generation['name'],
        "height": pokemones.size['height'],
        "weight": pokemones.size['weight']
        
      })
          
    })
   
    return newArray

  },

  /*  FILTRO TEXTO POKEMON */
  FilterText : function(data, nombre){
    let PokemonesFiltrados = data.pokemon.filter(data => data.name == nombre);
    let newArray = [] 
    PokemonesFiltrados.forEach(function(pokemones){
      newArray.push({
        "img" : pokemones.img,
        "name" : pokemones.name,
        "about" : pokemones.about,
        "number" : pokemones.num, 
        "type" : pokemones.type      
      })}); return newArray,
      console.log(newArray)
    },
      

  /* TODOS LOS POKEMONES */

  AllData : function(data){
    let imagen =[];
    let nombre =[];
    let about = [];
    let number = [];
    data.pokemon.forEach(function(task){
    if(task.type){
        imagen.push(task.img)
        nombre.push(task.name)
        about.push(task.about)
        number.push(task.num)
        }
    });
    let bebe = [imagen,nombre,about,number]
    return bebe
  },

  /* ORDENAR DATA */

  sortData : function(data,sortOrder){

    if(sortOrder === "Ascendente"){
          data.pokemon.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(b.name.toLowerCase()> a.name.toLowerCase()) return 1;
            return 0;
          }); return data.pokemon}
          
    else if(sortOrder === "Descendente"){
          data.pokemon.sort((a, b) => {
            if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()> b.name.toLowerCase()) return 1;
            return 0;
          }); return data.pokemon}
          
    else if(sortOrder==="Debilidad"){
      data.pokemon.sort((a, b) => {
        if(a.weaknesses < b.weaknesses) return -1;
        if(b.weaknesses > a.weaknesses) return 1;
        return 0;
      }); return data.pokemon}
    
    else if(sortOrder==="Resistencia"){
      data.pokemon.sort((a, b) => {
        if(b.resistant > a.resistant) return -1;
        if(a.resistant < b.resistant) return 1;
        return 0;
      }); return data.pokemon}
    }};

    
export default funciones
