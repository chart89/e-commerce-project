
import Card from 'react-bootstrap/Card';
import { IMGS_URL } from '../../../config';
import styles from './CarsList.module.scss';
import { Col } from 'react-bootstrap';

const CarsList = ({model, description, picture}) => {

    return (
        <Col className="my-3">
            <Card className={styles.listCard}>
                <Card.Img className={styles.listIMG} variant="top" src={IMGS_URL + picture} />
                <Card.Body className={styles.listBody}>
                    <Card.Title>{model}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CarsList;