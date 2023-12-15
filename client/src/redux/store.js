import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

// import reducers
import carsReducer from './carsRedux';
import cartReducer from './cartRedux';

const subreducers = {
  cars: carsReducer,
  cart: cartReducer,
}
// combine reducers
const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;



