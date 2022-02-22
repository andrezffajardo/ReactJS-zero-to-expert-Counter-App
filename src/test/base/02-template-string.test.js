import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';



describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hi Andrew!', () => {

        const nombre = 'Andrew';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hi ' + nombre + '!');
    });

    // getSaludo debe retornar Hi Pipe! si no hay argumento en nombre
    test('getSaludo debe retornar Hi Pipe!', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hi Pipe!');
    });



})
