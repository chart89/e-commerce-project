import { Container } from "react-bootstrap";
import CarsList from "../features/CarsList";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCar, loadCarsRequest } from "../../redux/carsRedux";

const Home = () => {

    const dispatch = useDispatch();
    const cars = useSelector(getCar);
    console.log('cars', cars)

    useEffect(() => {
        dispatch(loadCarsRequest())
      }, [dispatch]);

    return (
        <Container>
            {cars && cars.map(car => <CarsList key={car.id} {...car} />)}
        </Container>
    );
};

export default Home;

