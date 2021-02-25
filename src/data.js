const funciones = {
  /*  NUEVA DATA */
  NewData: (data) => data.map(pokemones => ({
    "img": pokemones.img,
    "name": pokemones.name,
    "about": pokemones.about,
    "num": pokemones.num,
    "type": pokemones.type,
    "weaknesses": pokemones.weaknesses,
    "resistant": pokemones.resistant,
    "generation": pokemones.generation["name"],
    "height": pokemones.size["height"],
    "weight": pokemones.size["weight"],
    "baseAttack": pokemones.stats["base-attack"],
    "baseDefense": pokemones.stats["base-defense"],
    "baseStamina": pokemones.stats["base-stamina"],
    "maxCp": pokemones.stats["max-cp"],
    "maxHp": pokemones.stats["max-hp"],
    "evolution": pokemones.evolution,
    "evolutionNext": pokemones.evolution["next-evolution"],
    "evolutionPrev": pokemones.evolution["prev-evolution"],
    "especialAttack": pokemones["special-attack"],  
  })),
  /*  FILTRAR POR TIPO POKEMON */
  FilterData: (data, tipo) => data.filter((element) => element.type == tipo),
  
  /*  FILTRAR NOMBRE POKEMON */
  FindTxt: (data, valorTexto) => data.filter((elemento) => elemento.name.includes(valorTexto)),
   
  /* ORDENAR DATA */
  sortData: (data, sortOrder) => {
    if (sortOrder === "Ascendente") {
      
      data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        return 0;
      });
      return data
      
    } else if (sortOrder === "Descendente") {
      data.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      return data
    }else if (sortOrder === "+CombatPower") {
      data.sort((a, b) => {
        return parseInt(b.maxCp) - parseInt(a.maxCp)
      });
      return data
      
    }  else if (sortOrder === "-CombatPower") {
      data.sort((a, b) => {
        return parseInt(a.maxCp) - parseInt(b.maxCp)
      });
      return data
       
}}}
export default funciones;
/* Grafica: function(data1){
    let newArray = [];
    data1.pokemon.forEach(function (pokemones) {
      newArray.push({
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });})


      let chart = new Chart(ctx, {
        type: 'radar',
        data: {
            datasets: [{
                label: 'Gráfico radial de pokemones',
                data: [newArray.baseAttack, newArray.baseDefense, newArray.baseStamina, newArray.maxCp,newArray.maxHp]
            }],
            labels: ['base-attack', 'base-defense', 'base-stamina', 'max-cp','max-hp']
        },
        options: {
            scale: {
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 2000
                }
            }
        }
          
      })
      return chart}

       */
    
