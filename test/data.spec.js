import funciones from '../src/data.js';

/* BUSCAR POKEMONES */
describe('funciones', () => {

    // Prueba 1 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones).toBe('object');
  });
});
  // Prueba 2 : ¿Es función?
describe('funciones.FilterData', () => {
  // Prueba 2 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.FilterData).toBe('function');
  });

  // Prueba 2 :Filtrar data
  it('It should return "grass"', () => {

    const data = [{
      type: [
        "grass",
    ]},
    {
      type: [
      "electric",
    ]},
     {
      type: [
    "fire",
    ]}];

    const result = [{"type": ["grass"]}];
    const type = "grass"

    expect(funciones.FilterData(data,type)).toStrictEqual(result);
  });


});

 describe('funciones.sortData', () => {
  // Prueba 1 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.sortData).toBe('function');
  });

  // Prueba 2 : Ordenar Data
  it('It should return "Charmander,Ivysaur,Pikachu"', () => {

   
    const data = [{
      name: 'Ivysaur',
    },
    {
      name: 'Charmander',
    },
    {
      name: 'Pikachu',
    }
  ];
  const result = [{
      name: 'Charmander',
    },
    {
      name: 'Ivysaur',
    },
    {
      name: 'Pikachu',
    }
  ];

    const sortOrder = "Ascendent";

    expect(funciones.sortData(data,sortOrder)).toStrictEqual(result);
  })

  // Prueba 3 : Ordenar Data
  it('It should return "Pikachu,Ivysaur, Charmander"', () => {

   
    const data = [{
      name: 'Ivysaur',
    },
    {
      name: 'Charmander',
    },
    {
      name: 'Pikachu',
    }
  ];
  const result = [{
      name: 'Pikachu',
    },
    {
      name: 'Ivysaur',
    },
    {
      name: 'Charmander',
    }
  ];

    const order = "Descendent";

    expect(funciones.sortData(data,order)).toStrictEqual(result);
  });

   // Prueba 4 : Ordenar Data
   it('It should return "1119,1100,990"', () => {

   
    const data = [{
      maxCp: "1100",
      },
    {
      maxCp: "1119",
      },
      {
      maxCp: "990",
      }];

  const result = [{
    maxCp: "1119",
    },
  {
    maxCp: "1100",
    },
    {
    maxCp: "990",
    }]

    const order = "+CombatPower";

    expect(funciones.sortData(data,order)).toStrictEqual(result);
  });
   // Prueba 5 : Ordenar Data
   it('It should return "990,1100,1119"', () => {

   
    const data = [{
      maxCp: "1100",
      },
      {
      maxCp: "1119",
      },
      {
      maxCp: "990",
      }];

    const result = [{
    maxCp: "990",
     },
    {
    maxCp: "1100",
      },
      {
    maxCp: "1119",
      }]

    const order = "-CombatPower";

    expect(funciones.sortData(data,order)).toStrictEqual(result);
  })
  it('It should return "data', () => {

   
    const data = [{
      name: 'Ivysaur',
    },
    {
      name: 'Charmander',
    },
    {
      name: 'Pikachu',
    }
  ];
  const result = [{
    name: 'Ivysaur',
  },
  {
    name: 'Charmander',
  },
  {
    name: 'Pikachu',
  }
  ];

    const order = "sorted by";

    expect(funciones.sortData(data,order)).toStrictEqual(result);
  });

});


describe('funciones.computeStats', () => {
  // Prueba 6 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.computeStats).toBe('function');
  });

  // Prueba 6 :Stadistic data
  it('It should return "[20,100]"', () => {

    const data = [{
      maxCp: [
        "20",
    ]},
    {
      maxCp: [
      "100",
    ]},
     ];

    const result = [20,100];

    expect(funciones.computeStats(data)).toStrictEqual(result);
  })})

  describe('funciones.top', () => {
    // Prueba 7 : ¿Es función?
    it('is a function', () => {
      expect(typeof funciones.top).toBe('function');
    });
  
    // Prueba 7 :Top 10
    it('It should return "[20,100]"', () => {
  
      const data = [{
        spawnChance: [
          "3.12",
      ]},
      {
        spawnChance: [
        "0.23",
      ]},
      {
        spawnChance: [
        "2.57",
      ]},
       ];
  
      const result = [{
        spawnChance: [
          "3.12",
      ]},
      {
        spawnChance: [
        "2.57",
      ]},
      {
        spawnChance: [
        "0.23",
      ]},
       ];
      const number = 3;
      expect(funciones.top(data,number)).toStrictEqual(result);
    })})

    // Prueba 8 : ¿Es función?
describe('funciones.FindTxt', () => {
  // Prueba 8 : ¿Es función?
  it('is a function', () => {
    expect(typeof funciones.FindTxt).toBe('function');
  });

  // Prueba 8 :Filtrar data
  it('It should return "charmander, charmeleon"', () => {

    const data = [{
      name: [
        "charmander",
    ]},
    {
      name: [
        "charmeleon",
    ]},
    { name: [
        "pikachu",
  ]}];

    const result = [{"name": ["charmeleon"]}];
    const textValue = "charmeleon";

    expect(funciones.FindTxt(data, textValue)).toStrictEqual(result);
  }); 
});
    // Prueba 9 : ¿Es función?
    describe('funciones.NewData', () => {
      // Prueba 8 : ¿Es función?
      it('is a function', () => {
        expect(typeof funciones.NewData).toBe('function');
      });
    
      // Prueba 8 :Filtrar data
      it('It should return "charmander, charmeleon"', () => {
    
        const data = [{
          "num": "245",
          "name": "suicune",
          "generation": {
            "num": "generation ii",
            "name": "johto"
          },
          "about": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
          "img": "https://www.serebii.net/pokemongo/pokemon/245.png",
          "size": {
            "height": "2.01 m",
            "weight": "187.0 kg"
          },
          "type": [
            "water"
          ],
          "spawn-chance": "0",
          "stats": {
            "base-attack": "180",
            "base-defense": "235",
            "base-stamina": "225",
            "max-cp": "2983",
            "max-hp": "189"
          },
          "resistant": [
            "fire",
            "water",
            "ice",
            "steel"
          ],
          "weaknesses": [
            "electric",
            "grass"
          ],
          "egg": "not in eggs",
          "buddy-distance-km": "20",
          "evolution": {
            "candy": "suicune candy"
          }
        }];
    
        const result = [{
          about: "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
          baseAttack: "180",
          baseDefense: "235",
          baseStamina: "225",
          evolution: {candy: "suicune candy"},
          generation: "johto",
          height: "2.01 m",
          img: "https://www.serebii.net/pokemongo/pokemon/245.png",
          maxCp: "2983",
          maxHp: "189",
          name: "suicune",
          num: "245",
          resistant: ["fire", "water", "ice", "steel"],
          spawnChance: "0",
          type: ["water"],
          weaknesses: ["electric", "grass"],
          weight: "187.0 kg",
          evolutionNext: undefined,
          evolutionPrev: undefined}];
          
    
        expect(funciones.NewData(data)).toStrictEqual(result);
      }); 
    });

