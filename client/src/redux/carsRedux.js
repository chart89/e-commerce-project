import axios from 'axios';
import { API_URL } from '../config';

//selectors
export const getCar = ({ cars }) => cars.data;
//export const getCarsById = ({ cars }, id) => cars.data.find(car => car.id === id);
export const getCarById = state => state.cars;

// action name creator
const reducerName = 'cars';
const createActionName = name => `app/${reducerName}/${name}`;
const LOAD_CARS = createActionName('LOAD_CARS');
const LOAD_CARS_ID = createActionName('LOAD_CARS_ID');

// action creators
export const loadCars = payload => ({ payload, type: LOAD_CARS });
export const loadCarsById = payload => ({ payload, type: LOAD_CARS_ID });

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

  export const loadCarsRequestbyId = (id) => {
    return async dispatch => {
      try {
        let res = await axios.get(`${API_URL}/cars/${id}`);
        console.log('res', res.data)
        dispatch(loadCarsById(res.data));
      } catch(e) {
        console.log(e);
      }
    };
  };


const carsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_CARS: 
      return { data: [...action.payload] };
    case LOAD_CARS_ID: 
      return {...action.payload};
    default:
      return statePart;
  };
};
export default carsReducer;