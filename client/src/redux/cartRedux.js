
//selectors
export const getAllCart = state => state.cart;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;
const LOAD_CART = createActionName('LOAD_CART')
//const ADD_TOCART = createActionName('ADD_ORDER');
//const DELETE_FROMCART = createActionName('DELETE_FROMCART');
//const EDIT_CART = createActionName('EDIT_CART');
//const DELETE_CART = createActionName('DELETE_CART');

// action creators
export const loadCart = payload => ({ payload, type: LOAD_CART })
//export const addToCart = payload => ({ payload, type: ADD_TOCART });
//export const deleteFromCart = payload => ({ payload, type: DELETE_FROMCART });
//export const editCart = payload => ({ type: EDIT_CART, payload });
//export const deleteCart = payload => ({ type: DELETE_CART });


/* THUNKS */
export const loadCartRequest = () => {
  return async dispatch => {
    try {
      let cartItem = await JSON.parse(localStorage.getItem("cart") || "[]");
      dispatch(loadCart(cartItem));
    } catch(e) {
      console.log(e);
    }
  };
};

  export const addToLocalStorage = (cart) => {
    return async dispatch => {
      try {
        const cartItem = await JSON.parse(localStorage.getItem("cart") || "[]");
        await cartItem.push(cart);
        await dispatch(localStorage.setItem('cart', JSON.stringify(cartItem)));
      } catch(e) {
        console.log(e);
      }
    };
  };

export const deleteCartRequest = (id) => {
    return async dispatch => {
  
      try {

        const cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
        const deletedArray = cartItem.filter(deleteItem => deleteItem.id !== id);
        await dispatch(localStorage.setItem('cart', JSON.stringify(deletedArray)));
      } catch(e) {
        console.log(e);
      }
  
    };
  };

  export const editCartRequest = (id, amount, comments, sum) => {
    return async dispatch => {
  
      try {
        const cartItem = await JSON.parse(localStorage.getItem("cart") || "[]");
        const editArray = await cartItem.map(not => (not.id === id ? { ...not, amount, comments, sum } : not));
        await dispatch(localStorage.setItem('cart',JSON.stringify(editArray)));  
      } catch (err) {
        console.log(err);
      }
    } 
  };

  export const deleteAllCartRequest = () => {
    return async dispatch => {
  
      try {
        await dispatch(localStorage.setItem('cart', []));
      } catch (err) {
        console.log(err);
      }
    } 
  };


const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_CART: 
      return [...action.payload ];
    /*case ADD_TOCART:
      return [...statePart, { ...action.payload, cartId: shortid()}];
    case DELETE_FROMCART:
      return statePart.filter(not => not.id !== action.payload);
    case EDIT_CART: 
      return statePart.map(not => (not.id === action.payload.id ? { ...not, ...action.payload } : not));
    case DELETE_CART: 
      return [];*/
    default:
      return statePart;
  };
};
export default cartReducer;