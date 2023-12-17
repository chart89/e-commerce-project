import { Col, Row, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCart } from "../../../redux/cartRedux";
import styles from './Order.module.scss';
import OrderList from "../../features/OrderList/OrderList";

const Order = () => {

    const CartData = useSelector(getAllCart);

    // create array
    const amountArray = CartData.map(cart => cart.sum)
    
    // create a variable for the sum and initialize it
    let totalSum = 0;

    // iterate over each item in the array
    for (let i = 0; i < amountArray.length; i++ ) {
        totalSum += amountArray[i];
    }


    return (
        <Container>
            <Form>
                <Row>
                    {CartData && CartData.map(cart => <OrderList key={cart.id} {...cart} />)}
                </Row>
                <Row className="mb-3">
                    <Col></Col>
                    <Col xs={4}><h3>Total: ${totalSum}</h3></Col>
                </Row>
                <Row className="w-50 my-5">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="johndoe@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="wiejska, Warszawa" />
                </Form.Group>
                <Form.Group className="mb-3 w-25" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="111222333" />
                </Form.Group>
                </Row>
            </Form>
        </Container>
    );
};

 export default Order;