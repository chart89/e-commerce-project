import { useSelector } from "react-redux";
import { getCar } from "../../../redux/carsRedux";
import CarsList from "../../features/CarsList/CarsList";
import { Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const Gallery = () => {

    const cars = useSelector(getCar);


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