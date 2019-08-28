// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

describe('Counter', () => {

    describe('Component render correctly', () => {

        it('renders correctly', () => {
            const tree = renderer.create(<Counter />).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });



    describe('Counter correctly', () => {

        const container = shallow(<Counter />);
        const incrementButton = container.find('.t-btn-increment');
        const descrementButton = container.find('.t-btn-descrement');

        it('increment correctly', () => {
            expect(container.find('.t-text').text()).toEqual('0');
            incrementButton.simulate('click');
            expect(container.find('.t-text').text()).toEqual('1');

            incrementButton.simulate('click');
            expect(container.find('.t-text').text()).toEqual('2');
        });

        it('descrement correctly', () => {
            expect(container.find('.t-text').text()).toEqual('2');
            descrementButton.simulate('click');
            expect(container.find('.t-text').text()).toEqual('1');

            descrementButton.simulate('click');
            expect(container.find('.t-text').text()).toEqual('0');
        });

    });

});