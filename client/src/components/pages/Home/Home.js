import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCar, loadCarsRequest } from "../../../redux/carsRedux";
import Carousel from "../../features/Carousel/Carousel";
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {

    const dispatch = useDispatch();
    const cars = useSelector(getCar);

    useEffect(() => {
        dispatch(loadCarsRequest())
      }, [dispatch]);

    if(!cars) return <div className="my-5 w-25 text-center mx-auto"><Spinner animation="border" variant="danger" /></div>
    return (
        <Container>
            <Carousel props={cars} />
        </Container>
    );
};

export default Home;

