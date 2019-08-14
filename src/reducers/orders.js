import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const currentPosition = ({ position }) => {
  return +position.substring(position.length - 1);
};

const nextPosition = ( { position, ingredients, recipe } ) => {

  if ( position === 'clients' ) {
    return 'conveyor_1';
  } else if ( position !== 'conveyor_4' ) {
    return `conveyor_${currentPosition({ position }) + 1}`;
  } else if ( position === 'conveyor_4' && ingredients.length === recipe.length ) {
    return 'finish';
  } else {
    return position;
  }

};

export default (state = [], action) => {
  switch (action.type) {

    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          id: action.payload.id,
          ingredients: [],
          position: 'clients',
          recipe: action.payload.recipe
        }
      ];

    case MOVE_ORDER_NEXT:
      return state.map(item => {
        if ( item.id === action.payload ) {
          return {
            ...item,
            position: nextPosition(item)
          }
        } else {
          return item
        }
      });


    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
