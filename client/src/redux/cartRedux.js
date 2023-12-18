import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

//selectors
export const getAllCart = state => state.cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;
const ADD_TOCART = createActionName('ADD_ORDER');
const DELETE_FROMCART = createActionName('DELETE_FROMCART');
const EDIT_CART = createActionName('EDIT_CART');
const DELETE_CART = createActionName('DELETE_CART');

// action creators
export const addToCart = payload => ({ payload, type: ADD_TOCART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROMCART });
export const editCart = payload => ({ type: EDIT_CART, payload });
export const deleteCart = payload => ({ type: DELETE_CART });


/* THUNKS */
export const addToCartRequest = ({id, model, amount, sum, picture, mark, price, comments}) => {
    return async dispatch => {
      try {

        dispatch(addToCart({id, model, amount, sum, picture, mark, price, comments}));
      } catch(e) {
        console.log(e);
      }
    };
  };

export const deleteCartRequest = (id) => {
    return async dispatch => {
  
      try {
        dispatch(deleteFromCart(id));
  
      } catch(e) {
        console.log(e);
      }
  
    };
  };

  export const editCartRequest = (id, amount, comments, sum) => {
    return async dispatch => {
  
      try {
        

          dispatch(editCart({id, amount, comments, sum}));
      } catch (err) {
        console.log(err);
      }
    } 
  };

  export const deleteAllCartRequest = () => {
    return async dispatch => {
  
      try {
        

          dispatch(deleteCart());
      } catch (err) {
        console.log(err);
      }
    } 
  };


const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TOCART:
      return [...statePart, { ...action.payload, cartId: shortid()}];
    case DELETE_FROMCART:
      return statePart.filter(not => not.id !== action.payload);
    case EDIT_CART: 
      return statePart.map(not => (not.id === action.payload.id ? { ...not, ...action.payload } : not));
    case DELETE_CART: 
      return [];
    default:
      return statePart;
  };
};
export default cartReducer;