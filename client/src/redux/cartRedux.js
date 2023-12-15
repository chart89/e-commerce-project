import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

//selectors
export const getAllCart = state => state.cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;
const ADD_TOCART = createActionName('ADD_ORDER');

// action creators
export const addToCart = payload => ({ payload, type: ADD_TOCART });

/* THUNKS */
export const addToCartRequest = ({id, model, amount, sum, picture}) => {
    return async dispatch => {
      try {

        dispatch(addToCart({id, model, amount, sum, picture}));
      } catch(e) {
        console.log(e);
      }
    };
  };


const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TOCART:
      return [...statePart, { ...action.payload, id: shortid()}];
    default:
      return statePart;
  };
};
export default cartReducer;