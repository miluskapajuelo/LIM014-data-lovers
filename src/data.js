// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */
import data from './data/pokemon/pokemon.js';

const filtrara={
  filtrar : function(){
    let imagen =[];
    let nombre =[];
    data.pokemon.forEach(function(task){
    if(task.type =="normal"){
        imagen.push(task.img)
        nombre.push(task.name)
        }
    });
    let bebe = [imagen,nombre]
    console.log(bebe)
    return bebe
  }
}

export default filtrara