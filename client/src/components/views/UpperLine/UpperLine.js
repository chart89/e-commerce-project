import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './UpperLine.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const UpperLine = () => {

    return (
        <Row className={`${styles.redLine} `}>
            <Col>
                <p className={styles.redLineAp}><FontAwesomeIcon className="mx-3" icon={faCar} />Classical and legendary cars. As a toys!</p>
            </Col>
            <Col className={styles.rghCol}>
                <a href="/" className={styles.redLineLink}>My account</a>
            </Col>
        </Row>
    )
}
 
export default UpperLine;