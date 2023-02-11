/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { FirstApp } from '../FirstApp'

describe('Pruebas en <FirstApp />', () => {
  
    const title = 'Hola, Soy Goku';
    const subtitle = 'Hola soy un subtítulo';

    test('Match con snapshot', () => {

        const { container } = render( <FirstApp title = {title} subtitle = {subtitle} /> )

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
        render( <FirstApp title = {title}  subtitle = {subtitle} /> );

        expect( screen.getByText(title)).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} subtitle= {subtitle} />);
        expect(screen.getByRole('heading', {level: 2}).innerHTML ).toContain( title );
    })

    test('debe mostrar el título enviado por props', () => {
        
        render(<FirstApp title = { title } subtitle = { subtitle } />);
        expect(screen.getAllByText(subtitle).length ).toBe(2);
    })

})
