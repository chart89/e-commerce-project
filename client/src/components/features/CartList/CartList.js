import { Col, Row, Button, Form } from "react-bootstrap";
import { IMGS_URL } from "../../../config";
import styles from './CartList.module.scss';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartRequest } from "../../../redux/cartRedux";
import { editCartRequest } from "../../../redux/cartRedux";

const CartList = ({model, picture, mark, price, id, amount, comments}) => {

    const dispatch = useDispatch();

    const [CartAmount, setAmount] = useState(amount);
    const [commentsS, setComments] = useState(comments || '');

    const sum = CartAmount * price;

    const changeAmount = async (chk) => {
        if (chk === 'plus' && CartAmount <= 9) {
           setAmount(CartAmount + 1);
        } else if (chk === 'minus' && CartAmount > 1) {
            setAmount(CartAmount - 1);
        }
    }

    useEffect(() => {
        dispatch (editCartRequest(id, CartAmount, commentsS, sum));
    }, [CartAmount, commentsS]);

    const handleRemove = () => {
        dispatch(deleteCartRequest(id));
    }

    return (
        <>
        <Row className="mt-5">
            <Col className='my-2'>
                <img className={styles.cartListIMG} src={IMGS_URL + picture} alt={model} />
            </Col>
            <Col>
                <h5>{mark}</h5>
                <p>{model}</p>
            </Col>
            <Col>
                <Row className={`my-3 mx-1 ${styles.singleRow}`}>
                    <Col className={styles.singleClick} onClick={()=>changeAmount('minus')}><span>-</span></Col>
                    <Col className="text-center">{CartAmount}</Col>
                    <Col className={styles.singleClick} onClick={()=>changeAmount('plus')}><span>+</span></Col>
                </Row>
                <h5 className={styles.cartH5}>$ {sum}</h5>
            </Col>
            <Col>
                <Button className="mt-3" variant="danger" onClick={() => handleRemove()}>Delete</Button>{' '}
            </Col>
        </Row>
        <Row className="border-bottom mb-5">
            <Col></Col>
            <Col xs={6}>
            <Form.Group className="mb-3">
                <Form.Label>Comments</Form.Label>
                    <Form.Control type="text" placeholder={commentsS} onChange={e => setComments(e.target.value)} />
            </Form.Group>
            </Col>
            <Col></Col>
        </Row>
        
        </>
    );
};

export default CartList;