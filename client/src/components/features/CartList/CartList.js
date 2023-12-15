import { Col, Row } from "react-bootstrap";
import { IMGS_URL } from "../../../config";
import styles from './CartList.module.scss';

const CartList = ({model, picture}) => {

    return (
        <Row className='my-3 border-bottom'>
            <Col className='my-2'>
                <img className={styles.cartListIMG} src={IMGS_URL + picture} alt={model} />
            </Col>
            <Col>
                {model}
            </Col>
            <Col>
                <Row className={`my-3 mx-1 ${styles.singleRow}`}>
                    <Col className={styles.singleClick}><span>-</span></Col>
                    <Col className="text-center">1</Col>
                    <Col className={styles.singleClick}><span>+</span></Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default CartList;