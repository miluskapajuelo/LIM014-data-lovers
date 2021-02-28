import {funciones} from '../src/data.js';

/* BUSCAR POKEMONES */
  describe('funciones', () => {

    // Prueba 1 : ¿Es función?
  it('is a function', () => {
    expect(typeof example).toBe('object');
  });
});
  // Prueba 2 : ¿Es función?
describe('funciones.FilterData', () => {
  // Prueba 2 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.FilterData).toBe('function');
  });

  // Prueba 2 :Filtrar data
  it('returns `It should return "grass"`', () => {

    const data = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
    ]}]

    const result = true;
    const type = "grass"

    expect(funciones.FilterData(data,type)).toBe(result);
  });


});

/* describe('funciones.sortData', () => {
  // Prueba 1 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.sortData).toBe('function');
  });

  // Prueba 2 : Ordenar Data
  it('returns `It should return "grass"`', () => {

   
    const data = [{
      name: 'A',
    },
    {
      name: 'Z',
    },
    {
      name: 'D',
    }
  ];
  const result = [{
      name: 'A',
    },
    {
      name: 'D',
    },
    {
      name: 'Z',
    }
  ];

    const order = "Ascendente";

    expect(funciones.sortData(data,order)).toBe(result);
  })
});

 // Prueba 3 : ¿Es función?
 describe('funciones.NewData', () => {
  // Prueba 2 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.NewData).toBe('function');
  });

  // Prueba 2 :Filtrar data
  it('returns `It should return "grass"`', () => {

    const data = [{
        
      "num": "001",
          "name": "bulbasaur",
          "generation": {
            "num": "generation i",
            "name": "kanto"
          },
          "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
          "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
          "size": {
            "height": "0.71 m",
            "weight": "6.9 kg"
          },
          "type": [
            "grass",
            "poison"
          ],

          "spawn-chance": "0.69",
          "stats": {
            "base-attack": "118",
            "base-defense": "111",
            "base-stamina": "128",
            "max-cp": "1115",
            "max-hp": "113"
          },
          "resistant": [
            "water",
            "electric",
            "grass",
            "fighting",
            "fairy"
          ],
          "weaknesses": [
            "fire",
            "ice",
            "flying",
            "psychic"
          ],
          "evolution": {
            "candy": "bulbasaur candy",
            "next-evolution": [{
              "num": "002",
              "name": "ivysaur",
              "candy-cost": "25",
              "next-evolution": [{
                "num": "003",
                "name": "venusaur",
                "candy-cost": "100"
              }]
            }]
          }
        },
    ]});

    const result = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
    ]}]

    expect(funciones.FilterData(data,type)).toBe(result);
  }) */