import { useSelector } from "react-redux";
import { getAllCart } from "../../../redux/cartRedux";
import { Container } from "react-bootstrap";
import CartList from "../../features/CartList/CartList";


const Cart = () => {

    const CartData = useSelector(getAllCart);

    return (
        <Container className='my-5'>
            {CartData && CartData.map(cart => <CartList key={cart.id} {...cart} />)}
        </Container>
    );
};

export default Cart;