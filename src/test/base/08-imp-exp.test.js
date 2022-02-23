import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {

    test('Debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe retornar undefine si no existe heroe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('Debe retornar un arreglo con los heroes DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );
        //console.log(heroe);

        const heroeOwner = heroes.filter( h => h.owner === owner );
        //console.log(heroeOwner);

        expect( heroe ).toEqual( heroeOwner );

    });

    test('Debe retornar un arreglo con los heroes Marvel', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe( 2 );

        //const heroeOwner = heroes.filter( h => h.owner === owner );
        //expect( heroe.length = 2 ).toBe( heroeOwner.length = 2 );


    });






})
