import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCart } from "../../../redux/cartRedux";
import styles from './Order.module.scss';
import OrderList from "../../features/OrderList/OrderList";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToOrderRequest } from "../../../redux/orderRedux";
import { deleteAllCartRequest } from "../../../redux/cartRedux";
import Alert from 'react-bootstrap/Alert';
import { loadCartRequest } from "../../../redux/cartRedux";

const Order = () => {

    const CartData = useSelector(getAllCart);
    const product = CartData.map(cart=>cart.model + ' ,sum: $' + cart.sum  + ' ,amount: '+ cart.amount + ' ,comments: ' + cart.comments).join('/ ')


    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState(null);

    // create array
    const amountArray = CartData.map(cart => cart.sum)
    
    // create a variable for the sum and initialize it
    let totalSum = 0;

    // iterate over each item in the array
    for (let i = 0; i < amountArray.length; i++ ) {
        totalSum += amountArray[i];
    }

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = (e) => {
        dispatch(addToOrderRequest({product, name, address, email, phone}));

        dispatch(deleteAllCartRequest());
        setStatus('success');
        dispatch(loadCartRequest());
    }


    return (
        <Container>
            {status === "success" && (
                <Alert className="w-25 my-5 mx-auto" variant="success">
                    <Alert.Heading>Success</Alert.Heading>
                    <p>
                        Your order has been successfully sending!
                    </p>
                 </Alert>
            )}
            <Form onSubmit={validate(handleSubmit)}>
                <Row>
                    {CartData && CartData.map(cart => <OrderList key={cart.id} {...cart} />)}
                </Row>
                <Row className="mb-3">
                    <Col></Col>
                    <Col xs={4}><h3>Total: ${totalSum}</h3></Col>
                </Row>
                <Row className="w-50 mt-5">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control   
                        {...register("name", { required: true, minLength: 3 })}
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                    {...register("address", { required: true, minLength: 3 })}
                    type="text"
                    placeholder="Avenue Str. New York"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                     />
                    {address.name && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    {...register("email", { required: true, minLength: 3 })}
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
                </Form.Group>
                <Form.Group className="mb-3 w-25" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                    {...register("phone", { required: true, minLength: 3 })}
                    type="phone"
                    placeholder="123123456"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    />
                    {errors.phone && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
                </Form.Group>
                </Row>
                <Col className="mb-5 mt-0 w-50 text-end "><Button className="me-5"  variant="primary" type="submit">Send</Button></Col>
                
            </Form>
        </Container>
    );
};

 export default Order;