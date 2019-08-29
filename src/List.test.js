// Компонент List - список
// Напишите для него тесты.
// Компонент позволяет добавлять элементы в список.
// При добавлении нового элемента тексовое поле очищается.

// При клике на элементы списка они удаляются.

// Убедитесь, что вы протестировали всю функциональнось.

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { List } from './List';

describe('List', () => {

  describe('Component render correctly', () => {

    it('renders correctly', () => {
      const tree = renderer.create(<List />).toJSON();

      expect(tree).toMatchSnapshot();
    });

  });


  describe('Item work correctlly', () => {
    const container = shallow(<List />);
    const item = 'Text';

    it('add item', () => {      
      const input = container.find('.t-input');

      input.simulate('change', {
        target: { 
          value: item
        } 
      });

      container.find('.t-btn-add').simulate('click');

      expect(container.find('.t-list').contains(item)).toEqual(true);
    });


    it('input after add item is clear', () => {
      const input = container.find('.t-input');
      const inputValue = input.prop('value');

      expect(inputValue).toEqual('');
    });
    

    it('remove item', () => {
      container.find('.t-list__item').first().simulate('click');
      expect(container.find('.t-list__item').length).toEqual(0);
    });

  });

});