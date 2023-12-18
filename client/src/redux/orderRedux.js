import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

//selectors
export const getAllOrder = state => state.order;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;
const ADD_ORDER = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({ payload, type: ADD_ORDER });


/* THUNKS */
export const addToOrderRequest = ({product, name, address, email, phone}) => {
    return async dispatch => {
      try {

        let res = await axios.post(`${API_URL}/order`, {product, name, address, email, phone});
        dispatch(addOrder(res));
      } catch(e) {
        console.log(e);
      }
    };
  };


const orderReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, { ...action.payload}];
    default:
      return statePart;
  };
};
export default orderReducer;