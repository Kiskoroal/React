import { getImagen } from "../../base-pruebas/11-async-await"


describe('Pruebas en 11-async-await', () => {
  
    test('Debe retornar la url de una imagen', async() => {
      
        const resp = await getImagen();
       
        expect(resp).toBe('No se encontro la imágen');
        
    })
    

})
