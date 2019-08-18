// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import {
    showRequest,
    showSuccess,
    showFailure,
  } from '../actions';
import { show } from '../api';

const showMiddleware = store => next => async action => {
  if (action.type === showRequest.toString()) {
    const queryParams = action.payload;

    show(queryParams)
      .then(data => store.dispatch(showSuccess(data)))
      .catch(error => store.dispatch(showFailure(error)))
  }
  next(action);
};

export default showMiddleware;