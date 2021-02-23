const funciones = {
  /*  FILTRO POKEMON */
  FilterData: function (data, tipo) {
    let PokemonesFiltrados = data.pokemon.filter((data) => data.type == tipo);
    let newArray = [];
    PokemonesFiltrados.forEach(function (pokemones) {
      console.log(pokemones.evolution["next-evolution"]);
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

  /*  BUSCAR TEXTO POKEMON */
  BuscarTexto: function (data, valorTexto) {
    let findId1user = data.filter((elemento) =>
      elemento.name.includes(valorTexto)
    );
    return findId1user;
  },

  /* ORDENAR DATA */

  sortData: function (data, sortOrder) {
    if (sortOrder === "Ascendente") {
      data.pokemon.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
        return 0;
      });
      return data.pokemon;
    } else if (sortOrder === "Descendente") {
      data.pokemon.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      return data.pokemon;
    } else if (sortOrder === "Debilidad") {
      data.pokemon.sort((a, b) => {
        if (a.weaknesses < b.weaknesses) return -1;
        if (b.weaknesses > a.weaknesses) return 1;
        return 0;
      });
      return data.pokemon;
    } else if (sortOrder === "Resistencia") {
      data.pokemon.sort((a, b) => {
        if (b.resistant > a.resistant) return -1;
        if (a.resistant < b.resistant) return 1;
        return 0;
      });
      return data.pokemon;
    }
  },
};

export default funciones;



var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
  datasets: [{
    label: "Student A",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "Student B",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData
});