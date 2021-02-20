const funciones = {
  /*  FILTRO POKEMON */
  FilterData: function (data, tipo) {
    let PokemonesFiltrados = data.pokemon.filter((data) => data.type == tipo);
    let newArray = [];
    PokemonesFiltrados.forEach(function (pokemones) {
      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    });

    return newArray;

  },

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

  /*  BUSCAR TEXTO POKEMON */
    BuscarTexto: function (data, valorTexto) {
    let findId1user = data.filter((elemento) =>
      elemento.name.includes(valorTexto));
      
      let newArray = [];
      findId1user.forEach(function (pokemones) {
      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    })
    return newArray;
  }, 

  /* ORDENAR DATA */

  sortData: function (data, sortOrder) {
    if (sortOrder === "Ascendente") {
      data.pokemon.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        return 0;
      });
      
      let newArray = [];
      data.pokemon.forEach(function (pokemones) {

      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    })
    return newArray;
    } else if (sortOrder === "Descendente") {
      data.pokemon.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      let newArray = [];
      data.pokemon.forEach(function (pokemones) {
      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    })
    return newArray;
    } else if (sortOrder === "Debilidad") {
      data.pokemon.sort((a, b) => {
        if (a.weaknesses < b.weaknesses) return -1;
        if (b.weaknesses > a.weaknesses) return 1;
        return 0;
      });
      let newArray = [];
      data.pokemon.forEach(function (pokemones) {
      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    })
    return newArray;
    } else if (sortOrder === "Resistencia") {
      data.pokemon.sort((a, b) => {
        if (b.resistant > a.resistant) return -1;
        if (a.resistant < b.resistant) return 1;
        return 0;
      });
      let newArray = [];
      data.pokemon.forEach(function (pokemones) {
      newArray.push({
        img: pokemones.img,
        name: pokemones.name,
        about: pokemones.about,
        num: pokemones.num,
        type: pokemones.type,
        weaknesses: pokemones.weaknesses,
        resistant: pokemones.resistant,
        generation: pokemones.generation["name"],
        height: pokemones.size["height"],
        weight: pokemones.size["weight"],
        baseAttack: pokemones.stats["base-attack"],
        baseDefense: pokemones.stats["base-defense"],
        baseStamina: pokemones.stats["base-stamina"],
        maxCp: pokemones.stats["max-cp"],
        maxHp: pokemones.stats["max-hp"],
      });
    })
    return newArray;
    }
  },
};
export default funciones;