import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../modules';
import profile from '../modules/Profile';
import auth from '../modules/Auth';
import select from '../modules/SelectBlock';

const sagaMiddleware = createSagaMiddleware();

const mainReducer = combineReducers({
  form: formReducer,
  profile,
  auth,
  select,
});

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(mainReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
