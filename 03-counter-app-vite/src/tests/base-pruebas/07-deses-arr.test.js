import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un número', () => {

    const [letters, numbers] = retornaArreglo();

    // expect( letters ).toBe('ABC');
    // expect( numbers ).toBe(123);
    expect( letters ).toEqual(expect.any(String));
    expect( numbers ).toEqual(expect.any(Number));
  })
})