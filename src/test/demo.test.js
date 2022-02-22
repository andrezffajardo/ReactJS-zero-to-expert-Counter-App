

describe('Pruebas en el archivo demo.test.js', () => {

    test( 'deben ser iguales los string', () => {

        //1. Inicializacion
        const mensaje = 'Hi World';

        //2. Estimulo
        const mensaje2 = `Hi World`;

        //3. Observar comportamiento
        expect( mensaje ).toBe( mensaje2 );
    })

});
