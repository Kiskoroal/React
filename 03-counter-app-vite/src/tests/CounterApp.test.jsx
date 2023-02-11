/** @jest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Prueba de componente CounterApp', () => {

    const initialValue = 10;

    test('hacer match con snap', () => {
        const { container } = render(<CounterApp value={initialValue} />)

        expect(container).toMatchSnapshot();
    })
    

    test('debe incrementar con el boton +1', () => {
        
        render( <CounterApp value ={initialValue}  /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    })
    
    test('debe decrementar con el boton -1', () => {
        
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect( screen.getByText('9') ).toBeTruthy();
    })
    
    test('debe de funcionar el boton reset', () => {
        render(<CounterApp value={355} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText(355) ).toBeTruthy();
    });

});