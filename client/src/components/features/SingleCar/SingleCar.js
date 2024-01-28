import { useParams, Navigate } from "react-router-dom";
import { getCarsById } from "../../../redux/carsRedux";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { IMGS_URL } from "../../../config";
import styles from './SingleCar.module.scss';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loadCartRequest } from "../../../redux/cartRedux";
import { addToLocalStorage } from "../../../redux/cartRedux";
import PropTypes from 'prop-types';
import { loadCarsRequestbyId } from "../../../redux/carsRedux";
import { getCarById } from "../../../redux/carsRedux";



const SingleCar = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCarsRequestbyId(id))
    }, [dispatch]);

    //const CarData = useSelector(data => getCarsById(data, id));
    const CarData = useSelector(getCarById);

    const {model, picture, mark, price, description} = CarData

    const [amount, setAmount] = useState(1);
    const sum = amount * CarData.price;
    const comments = '';

    const changeAmount = (chk) => {
        if (chk === 'plus' && amount <= 9) {
            setAmount(amount + 1);
        } else if (chk === 'minus' && amount > 1) {
            setAmount(amount - 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
        if(cartItem.filter(x => x.id === id).length > 0) return console.log("Już jest");
        dispatch(addToLocalStorage({id, model, amount, sum, picture, mark, price, comments}));
        dispatch(loadCartRequest());
    }


    if(!CarData) return <Navigate to="/" />
    return (
        <Container className="my-5">
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <img className={styles.singleIMG} src={IMGS_URL + picture} alt={model} />
                </Col>
                <Col className={`mx-5 ${styles.singleCol}`}>
                    <h1 className="my-2">{mark}</h1>
                    <h4 className="mb-5">{model}</h4>
                    <h5>$ {CarData.price}</h5>
                    <Row className={`my-3 mx-1 ${styles.singleRow}`}>
                        <Col className={styles.singleClick} onClick={()=>changeAmount('minus')}><span>-</span></Col>
                        <Col className="text-center">{amount}</Col>
                        <Col className={styles.singleClick} onClick={()=>changeAmount('plus')}><span>+</span></Col>
                    </Row>  
                    <Button variant="danger" type="submit">Add to cart ${sum} </Button>{' '}
                    <p className="my-5">{description}</p>
                    
                </Col>
            </Row>
            </Form>
        </Container>
    );
};

export default SingleCar;

SingleCar.propTypes = {
    model: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}