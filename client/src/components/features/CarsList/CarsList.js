import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../../config';
import styles from './CarsList.module.scss';
import { Col, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartRequest } from '../../../redux/cartRedux';

const CarsList = ({id, mark, model, description, picture, price}) => {

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addToCartRequest({id: id, model: model, amount: 1, sum: price, picture: picture, mark: mark,price: price, comments: '' }));
        console.log(1, price)
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
                    <Card.Text>
                        <h6>{model}</h6>
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text >
                        <Nav>
                            <Nav.Link as={NavLink} to={`/gallery/${id}`}>
                                <p className={styles.listP}>Show more</p>
                            </Nav.Link>    
                        </Nav>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CarsList;