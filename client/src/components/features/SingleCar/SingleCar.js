import { useParams, Navigate } from "react-router-dom";
import { getCarsById } from "../../../redux/carsRedux";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { IMGS_URL } from "../../../config";
import styles from './SingleCar.module.scss';

const SingleCar = () => {

    const { id } = useParams();
    const CarData = useSelector(data => getCarsById(data, id));

    if(!CarData) return <Navigate to="/" />
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <img className={styles.singleIMG} src={IMGS_URL + CarData.picture} alt={CarData.model} />
                </Col>
                <Col className={`mx-5 ${styles.singleCol}`}>
                    <h1 className="my-5">{CarData.model}</h1>
                    <h5>Price: ${CarData.price}</h5>  
                    <p className="my-5">{CarData.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleCar;