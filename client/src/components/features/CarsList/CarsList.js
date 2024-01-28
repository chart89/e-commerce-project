import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../../config';
import styles from './CarsList.module.scss';
import { Col, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToLocalStorage } from '../../../redux/cartRedux';
import { loadCartRequest } from '../../../redux/cartRedux';
import PropTypes from 'prop-types';

const CarsList = ({id, mark, model, description, picture, price}) => {


    const dispatch = useDispatch();

    const handleSubmit = () => {
        let cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
        if(cartItem.filter(x => x.id === id).length > 0) return console.log("Już jest");
        
        dispatch(addToLocalStorage({id: id, model: model, amount: 1, sum: price, picture: picture, mark: mark,price: price, comments: '' }));
        dispatch(loadCartRequest());
    }

    return (
        <Col className="my-3">
            <Card className={styles.listCard}>
                <Card.Img className={styles.listIMG} variant="top" src={IMGS_URL + picture} />
                <div className={styles.hiddenDiv}>
                    <div className={`justify-content-center mt-3 ${styles.listCart}`} onClick={()=>handleSubmit()}>
                        <p>Add to cart <FontAwesomeIcon icon={faCartShopping} /></p>
                    </div>
                </div>    
                <Card.Body className={styles.listBody}>
                    <Card.Title>
                        <Row>
                            <Col>{mark}</Col>
                            <Col className="text-end"><span className={styles.listSpan}>$ {price}</span></Col>
                        </Row>
                    </Card.Title>
                    <Card.Text className='bold'>
                        {model}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                        <Nav>
                            <Nav.Link as={NavLink} to={`/gallery/${id}`}>
                                <p className={styles.listP}>Show more</p>
                            </Nav.Link>    
                        </Nav>
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CarsList;

CarsList.propTypes = {
    id: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cartItem: PropTypes.arrayOf(PropTypes.shape({
        amount: PropTypes.number,
        comments: PropTypes.string,
        id: PropTypes.string,
        mark: PropTypes.string,
        model: PropTypes.string,
        picture: PropTypes.string,
        price: PropTypes.number,
        sum: PropTypes.number,
    }).isRequired)
  }