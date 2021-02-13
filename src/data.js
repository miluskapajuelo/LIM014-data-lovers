  const filtrara={ 
  filterData : function(data, tipo){
    let imagen =[];
    let nombre =[];
    let about = [];
    let number = [];
    data.pokemon.forEach(function(task){
    if(task.type == tipo){
        imagen.push(task.img)
        nombre.push(task.name)
        about.push(task.about)
        number.push(task.num)
        }
    });
    let bebe = [imagen,nombre,about,number]
    return bebe
  },

  sortdata : function(data){
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

   sorted : function(data, TypeOrder){
    if(TypeOrder === "Ascendente"){
          data.pokemon.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(b.name.toLowerCase()> a.name.toLowerCase()) return 1;
            return 0;
          }); return data.pokemon}
          
    else if(TypeOrder === "Descendente"){
          data.pokemon.sort((a, b) => {
            if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;
            if(a.name.toLowerCase()> b.name.toLowerCase()) return 1;
            return 0;
          }); return data.pokemon}
          
    else if(TypeOrder==="Debilidad"){
      data.pokemon.sort((a, b) => {
        if(a.weaknesses < b.weaknesses) return -1;
        if(b.weaknesses > a.weaknesses) return 1;
        return 0;
      }); return data.pokemon}
    
    else if(TypeOrder==="Resistencia"){
      data.pokemon.sort((a, b) => {
        if(b.resistant > a.resistant) return -1;
        if(a.resistant < b.resistant) return 1;
        return 0;
      }); return data.pokemon}
    }};

    
export default filtrara
