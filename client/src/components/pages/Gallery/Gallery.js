import { useSelector, useDispatch } from "react-redux";
import { getCar } from "../../../redux/carsRedux";
import CarsList from "../../features/CarsList/CarsList";
import { Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from "react";
import { loadCarsRequest } from "../../../redux/carsRedux";

const Gallery = () => {

    const dispatch = useDispatch();
    const cars = useSelector(getCar);

    useEffect(() => {
        dispatch(loadCarsRequest())
      }, [dispatch]);


    if(!cars) return <div className="my-5 w-25 text-center mx-auto"><Spinner animation="border" variant="danger" /></div>
    return (
        <Container className="my-5">
            <Row className="justify-content-between">
                {cars.map(car => <CarsList key={car.id} {...car} />)}
            </Row>
        </Container>
    );
};

export default Gallery;