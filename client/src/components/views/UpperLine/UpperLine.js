import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './UpperLine.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const UpperLine = () => {

    return (
        <Row className={`align-items-center ${styles.redLine} `}>
            <Col>
                <p className={styles.redLineAp}><FontAwesomeIcon className="mx-3" icon={faCar} />Classical and legendary cars. As a toys!</p>
            </Col>
            <Col xs={1} className={styles.rghCol}>
                <Nav>
                    <Nav.Link as={NavLink} to={'/login'}><p className={styles.redLineLink}>Login</p></Nav.Link>
                </Nav>
            </Col>
            <Col xs={2} className={`text-center ${styles.rghCol}`}>
                <Nav>
                    <Nav.Link as={NavLink} to={'/register'}><p className={styles.redLineLink}>Register</p></Nav.Link>
                </Nav>
            </Col>
        </Row>
    )
}
 
export default UpperLine;