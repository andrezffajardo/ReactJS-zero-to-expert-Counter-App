import React from "react";
import {render} from '@testing-library/react';
import FirstApp from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {

    test('Dede mostrar el mensaje "Hi World', () => {

        const greet = "Hi World";

        const { getByText } = render( <FirstApp greet={ greet }/> );

        expect( getByText(greet)).toBeInTheDocument();

    })
})
