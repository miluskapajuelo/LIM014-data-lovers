import {funciones} from '../src/data.js';

/* BUSCAR POKEMONES */
/*  */

  describe('funciones', () => {

    // Prueba 1 : ¿Es función?
  it('is a function', () => {
    expect(typeof example).toBe('object');
  });
});
  // Prueba 1 : ¿Es función?
describe('funciones.FilterData', () => {
  // Prueba 1 : ¿Es función?
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

describe('funciones.sortData', () => {
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