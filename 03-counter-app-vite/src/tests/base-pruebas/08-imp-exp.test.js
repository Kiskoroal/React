import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  
    test('getHeroeById debe retorna un heroe por un id', () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe retorna undefind si no existe un id', () => {
        const id = 10;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy( undefined );
    })
    
    //Tarea

    test('Debe retornar solo heroes de DC', () => {

        const owner = 'DC';

        const heroByOwner = getHeroesByOwner( owner );

        console.log(heroByOwner)

        expect(heroByOwner.length).toBe(3);

        expect(heroByOwner).toEqual( 
        [{
                id: 1,
                name: 'Batman',
                owner: 'DC'
        },
        {
                id: 3,
                name: 'Superman',
                owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },]  
        );
    });

    test('Debe retornar solo heroes de Marvel', () => {

        const owner = 'Marvel';

        const heroByOwner = getHeroesByOwner( owner );

        console.log(heroByOwner)

        expect(heroByOwner.length).toBe(2);

        expect(heroByOwner).toEqual( 
        [{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        },]  
        );
    });

})
