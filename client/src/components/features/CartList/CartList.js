import { Col, Row, Button, Form } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import styles from './CartList.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartRequest, loadCartRequest } from '../../../redux/cartRedux';
import { editCartRequest } from '../../../redux/cartRedux';
import PropTypes from 'prop-types';
import WidgetAmount from '../WidgetAmount/WidgetAmount';
import { changeAmount } from '../../../utils/changeAmount';

const CartList = ({ model, picture, mark, price, id, amount, comments }) => {
  const dispatch = useDispatch();

  const [CartAmount, setAmount] = useState(amount);
  const [commentsS, setComments] = useState(comments || '');

  const sum = CartAmount * price;

  const changeAmountFunction = (chk) => {
    changeAmount(chk, CartAmount, setAmount);
  };

  useEffect(() => {
    dispatch(editCartRequest(id, CartAmount, commentsS, sum));
    dispatch(loadCartRequest());
  }, [CartAmount, commentsS]);

  const handleRemove = () => {
    dispatch(deleteCartRequest(id));
    dispatch(loadCartRequest());
  };

  return (
    <>
      <Row className="mt-5">
        <Col className="my-2">
          <img
            className={styles.cartListIMG}
            src={IMGS_URL + picture}
            alt={model}
          />
        </Col>
        <Col>
          <h5>{mark}</h5>
          <p>{model}</p>
        </Col>
        <Col>
          <WidgetAmount
            changeAmount={changeAmountFunction}
            amount={CartAmount}
          />
          <h5 className={styles.cartH5}>$ {sum}</h5>
        </Col>
        <Col>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleRemove()}
          >
            Delete
          </Button>{' '}
        </Col>
      </Row>
      <Row className="border-bottom mb-5">
        <Col></Col>
        <Col xs={6}>
          <Form.Group className="mb-3">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              type="text"
              placeholder={commentsS}
              onChange={(e) => setComments(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default CartList;

CartList.propTypes = {
  model: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
};
