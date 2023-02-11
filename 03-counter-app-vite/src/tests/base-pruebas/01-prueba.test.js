describe('Haciendo pruebas hola mundo', () => {
    test('debe de retornar un valor que diga hola mundo', () => {
        const hola = 'Hola Mundo';

        expect( hola.toUpperCase() ).toBe('HOLA MUNDO');
    });
})
