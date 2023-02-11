import { usContext } from "../../base-pruebas/06-deses-obj"

describe('Test de desestructuración de objetos', () => {
  test('Debe retornar un objeto identico', () => {
    
    const clave = 'Ironman', edad = 45;

    const objInit = usContext({clave, edad});

    expect(objInit).toStrictEqual({
        nombreClave: clave,
        anios: edad,
    });

  })
  
})
