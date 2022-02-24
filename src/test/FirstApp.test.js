import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import FirstApp from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {

    // test('Dede mostrar el mensaje "Hi World', () => {
    //
    //     const greet = "Hi World";
    //
    //     const { getByText } = render( <FirstApp greet={ greet }/> );
    //
    //     expect( getByText( greet ) ).toBeInTheDocument();
    //
    // })
    test('Debe mostrar <FirstApp /> correctamente', () => {

        const greet = "Hi World";
        const wrapper = shallow( <FirstApp greet={ greet }/> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar el subtitulo enviado por props', () => {

        const greet = "Hi World";
        const subTittle = 'I am subtittle'

        const wrapper = shallow(
            <FirstApp
                greet={ greet }
                subtittle={ subTittle }
            />
        );

        const textParagraph = wrapper.find('p').text();

        expect( textParagraph ).toBe( subTittle );

    })


})
