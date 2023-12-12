import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCar, loadCarsRequest } from "../../../redux/carsRedux";
import Carousel from "../../features/Carousel/Carousel";

const Home = () => {

    const dispatch = useDispatch();
    const cars = useSelector(getCar);

    useEffect(() => {
        dispatch(loadCarsRequest())
      }, [dispatch]);

    return (
        <Container>
            <Carousel props={cars} />
        </Container>
    );
};

export default Home;

