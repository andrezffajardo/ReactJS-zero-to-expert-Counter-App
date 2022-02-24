import CounterApp from "../CounterApp";
import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en <CounterApp />', () => {

    test('Debe mostrar <CounterApp /> correctamente', () => {

        const wrapper = shallow( <CounterApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value={ 100 }/> );

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('100');


    })

});
