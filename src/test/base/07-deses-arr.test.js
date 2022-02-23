import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion', () => {

    test('Debe retornar string y un numero', () => {

        //const arr = retornaArreglo(); //['ABC', 123]
        const [letras, numeros] = retornaArreglo();
        //expect( arr ).toEqual( ['ABC', 123] );
        //console.log( typeof numeros );

        expect( letras ).toBe('ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe(123 );
        expect( typeof numeros ).toBe( 'number' );

    })
})
