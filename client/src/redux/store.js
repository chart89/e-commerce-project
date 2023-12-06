import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

// import reducers
import carsReducer from './carsRedux';

const subreducers = {
  cars: carsReducer,
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



