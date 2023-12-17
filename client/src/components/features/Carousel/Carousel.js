import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
import { IMGS_URL } from '../../../config';
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CarouselImg = ({props}) => {


    return (
        <Row>
            <Col>
                <Carousel className={`mx-auto border mt-2 mb-5 ${styles.carouselImg}`} fade>
                    <Carousel.Item>
                        <div className={styles.carouselDiv}>
                            <img src={props && IMGS_URL +  props[0].picture} alt="cars" />
                        </div>
                        <Carousel.Caption>
                            <h3>Lamborghini Aventador</h3>
                            <p>The fast and the furious.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.carouselDiv}>
                            <img src={props && IMGS_URL +  props[1].picture} alt="cars" />
                        </div>
                        <Carousel.Caption>
                            <h3>BMW M3 DTM</h3>
                            <p>Deutsche Tourenwagen Masters.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.carouselDiv}>
                            <img src={props && IMGS_URL +  props[2].picture} alt="cars" />
                        </div>
                        <Carousel.Caption>
                            <h3>McLaren 675LT</h3>
                            <p>Inspired by McLaren F1 GTR</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col className="my-5 text-center">
                <h2 className={styles.carouselH2}>Welcome in our Shop</h2>
                <p className={styles.carouselP}>
                    Join to incredible world of small cars. Even though the size is not too big, fun is huge!
                </p>
                <Nav>
                    <Nav.Link as={NavLink} to={'/gallery'}>
                        <p className={styles.listP}>Check gallery</p>
                    </Nav.Link>    
                </Nav>
            </Col>
        </Row>
    );
};

export default CarouselImg;