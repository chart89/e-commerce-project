import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styles from './MainMenu.module.scss'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHouse, faTruckFast  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { clsx } from 'clsx';

const MainMenu = () => {

    const [active, setActive] = useState('home') // home, gallery, search, cart


    return (
        <Row className="border-bottom border-danger justify-content-between align-middle">
            <Col className=' d-flex align-items-center'>
                <Nav>
                    <Nav.Link as={NavLink} to={'/'} className={styles.iconLink}>
                        <FontAwesomeIcon onClick={() => setActive('home')} className={`mx-0 ${clsx(styles.icon, active === 'home' && styles.linkActive)}`} icon={faHouse} />
                    </Nav.Link>
                </Nav>
            </Col>
            <Col className=' d-flex align-items-center'>
                <Nav>
                    <Nav.Link as={NavLink} to={'/gallery'} className={styles.iconLink}>
                        <FontAwesomeIcon onClick={() => setActive('gallery')} className={`mx-0 ${clsx(styles.icon, active === 'gallery' && styles.linkActive)}`} icon={faTruckFast} />
                    </Nav.Link>
                </Nav>
            </Col>
            <Col xs={8} className=' d-flex align-items-center'><h2 className='mx-auto'>Small Cars' World</h2></Col>
            <Col className=' d-flex align-items-center'><a className={styles.iconLink} href="/"><FontAwesomeIcon className={`mx-0 ${styles.icon}`} icon={faMagnifyingGlass} /></a></Col>
            <Col className=' d-flex align-items-center'><a className={styles.iconLink} href="/"><FontAwesomeIcon className={`mx-0 ${styles.icon}`} icon={faCartShopping} /></a></Col>
        </Row>
    )
};

export default MainMenu;
