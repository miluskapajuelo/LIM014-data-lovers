import data from './data/pokemon/pokemon.js';

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
    console.log(bebe)
    return bebe
  }
  };
export default filtrara