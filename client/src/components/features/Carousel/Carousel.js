import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
import { IMGS_URL } from '../../../config';

const CarouselImg = ({props}) => {


    return (
        <Carousel className={`mx-auto border my-5 ${styles.carouselImg}`} fade>
            <Carousel.Item>
                <div className={styles.carouselDiv}>
                    <img src={props && IMGS_URL +  props[0].picture} alt="cars" />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.carouselDiv}>
                    <img src={props && IMGS_URL +  props[1].picture} alt="cars" />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <div className={styles.carouselDiv}>
                    <img src={props && IMGS_URL +  props[2].picture} alt="cars" />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselImg;