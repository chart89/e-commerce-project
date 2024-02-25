import { Col, Row } from "react-bootstrap";
import styles from './../SingleCar/SingleCar.module.scss';

const WidgetAmount = ({changeAmount, amount}) => {
    return (
        <Row className={`my-3 mx-1 ${styles.singleRow}`}>
            <Col className={styles.singleClick} onClick={()=>changeAmount('minus')}><span>-</span></Col>
            <Col className="text-center">{amount}</Col>
            <Col className={styles.singleClick} onClick={()=>changeAmount('plus')}><span>+</span></Col>
        </Row>
    );
};

export default WidgetAmount;



