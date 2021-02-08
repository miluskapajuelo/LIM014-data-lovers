import data from './data/pokemon/pokemon.js';
  const filtrara={
  filterData : function(data, normal){
    let imagen =[];
    let nombre =[];
    data.pokemon.forEach(function(task){
    if(task.type == normal){
        imagen.push(task.img)
        nombre.push(task.name)
        }
    });
    let bebe = [imagen,nombre]
    return bebe
  },

  sortdata : function(data){
    let imagen =[];
    let nombre =[];
    data.pokemon.forEach(function(task){
    if(task.type){
        imagen.push(task.img)
        nombre.push(task.name)
        }
    });
    let bebe = [imagen,nombre]
    console.log(bebe)
    return bebe
  }
  };
export default filtrara