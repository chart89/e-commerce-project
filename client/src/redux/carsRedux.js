import axios from 'axios';
import { API_URL } from '../config';

//selectors
export const getCar = ({ cars }) => cars.data;

// action name creator
const reducerName = 'cars';
const createActionName = name => `app/${reducerName}/${name}`;
const LOAD_CARS = createActionName('LOAD_CARS');

// action creators
export const loadCars = payload => ({ payload, type: LOAD_CARS });

/* THUNKS */
export const loadCarsRequest = () => {
    return async dispatch => {
      try {
        let res = await axios.get(`${API_URL}/cars`);
        dispatch(loadCars(res.data));
      } catch(e) {
        console.log(e);
      }
    };
  };


const carsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_CARS: 
      return { ...statePart, data: [...action.payload] };
    default:
      return statePart;
  };
};
export default carsReducer;