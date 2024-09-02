import { useSelector, useDispatch } from 'react-redux';
import { getAllCart } from '../../../redux/cartRedux';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import CartList from '../../features/CartList/CartList';
import styles from './Cart.module.scss';
import { NavLink } from 'react-router-dom';
import { addToLocalStorage } from '../../../redux/cartRedux';
import { useEffect } from 'react';
import { loadCartRequest } from '../../../redux/cartRedux';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartRequest());
  }, [dispatch]);

  const CartData = useSelector(getAllCart);

  // create array
  const amountArray = CartData.map((cart) => cart.sum);

  // create a variable for the sum and initialize it
  let totalSum = 0;

  // iterate over each item in the array
  for (let i = 0; i < amountArray.length; i++) {
    totalSum += amountArray[i];
  }

  return (
    <Container className={`w-75 my-5 ${styles.cartCon}`}>
      <Row>
        {CartData.length === 0 && (
          <div className={styles.cartDiv}>
            <h1>The cart is empty...</h1>
          </div>
        )}
        <Form>
          {CartData &&
            CartData.map((cart) => <CartList key={cart.id} {...cart} />)}
        </Form>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={2}>
          <Nav>
            <Nav.Link as={NavLink} to={'/order'}>
              {CartData.length !== 0 && <Button variant="primary">Next</Button>}
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
