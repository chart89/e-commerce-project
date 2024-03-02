import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

// import reducers
import carsReducer from './carsRedux';
import cartReducer from './cartRedux';
import orderReducer from './orderRedux';

const subreducers = {
  cars: carsReducer,
  cart: cartReducer,
  order: orderReducer
}
// combine reducers
const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;



