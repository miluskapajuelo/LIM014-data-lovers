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

    const order = "Ascendente";

    expect(funciones.sortData(data,order)).toStrictEqual(result);
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

    const order = "Descendente";

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