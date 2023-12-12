import { useSelector } from "react-redux";
import { getCar } from "../../../redux/carsRedux";
import CarsList from "../../features/CarsList/CarsList";
import { Container, Row } from "react-bootstrap";

const Gallery = () => {

    const cars = useSelector(getCar);

    return (
        <Container className="my-5">
            <Row className="justify-content-between">
                {cars && cars.map(car => <CarsList key={car.id} {...car} />)}
            </Row>
        </Container>
    );
};

export default Gallery;