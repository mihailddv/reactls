import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import searchMiddleware from './middlewares/searchMiddleware';
import showhMiddleware from './middlewares/showMiddleware';

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(searchMiddleware),
      applyMiddleware(showhMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  return store;
};
