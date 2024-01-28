import { Row, Col } from "react-bootstrap";
import styles from './OrderList.module.scss';
import { IMGS_URL } from "../../../config";
import PropTypes from 'prop-types';

const OrderList = ({model, picture, mark, amount, sum, comments}) => {

    return (

        <>
        <Row className="my-3 py-2 border-bottom">
            <Col>
                <img className={styles.orderIMG} src={IMGS_URL + picture} alt={model} />
            </Col>
            <Col>
                <h5>{mark}</h5>
                <p>{model}</p>
            </Col>
            <Col>
                <h6><strong>Amount:</strong> {amount}</h6>
                <h6><strong>Sum:</strong> ${sum}</h6>
            </Col>
            <Col xs={5}>
                <h6>Comments:</h6>
                <p>{comments}</p>
            </Col>
        </Row>
        </>
    );
};

export default OrderList;

OrderList.propTypes = {
    model: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired,
    comments: PropTypes.string.isRequired
};