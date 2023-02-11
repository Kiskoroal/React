/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from '../FirstApp'

describe('Pruebas en <FirstApp />', () => {
  
    // test('debe de hacer el match con el snapshot', () => {

    //     const title = 'Hola, Soy Goku';
    //     const {container} = render( <FirstApp title = {title}/> );

    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe mostrar el título en un h1', () =>{

        const title = 'Hola, Soy Goku';

        const {container, getByText, getByTestId} = render( <FirstApp title={ title } /> )

        expect( getByTestId('test-title').innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');

        // expect(h1.innerHTML).toContain( title )
    });

    test('debe mostrar el subtitulo mostrado por props', () => {
        const subtitle = 'Soy un subtitulo';
        const title = 'Hola, Soy Goku';

        const {getAllByText} = render( <FirstApp title={ title } subtitle = {subtitle}/> )

        expect(getAllByText(subtitle).length).toBe(2);
    })
    

})
