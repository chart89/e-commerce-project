import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styles from './MainMenu.module.scss'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faHouse, faTruckFast  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { clsx } from 'clsx';
import { getAllCart } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const MainMenu = () => {

    const [active, setActive] = useState('home') // home, gallery, search, cart

    const CartData = useSelector(getAllCart);

    // create array
    const amountArray = CartData.map(cart => cart.amount)
    
    // create a variable for the sum and initialize it
    let sum = 0;

    // iterate over each item in the array
    for (let i = 0; i < amountArray.length; i++ ) {
        sum += amountArray[i];
    }


    return (
        <Row className="border-bottom border-danger justify-content-between align-middle">
            <Col className=' d-flex align-items-center my-2'>
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
            <Col className=' d-flex align-items-center'>
                <Nav>
                    <Nav.Link as={NavLink} to={'/cart'} className={styles.iconLink}>
                        <FontAwesomeIcon onClick={() => setActive('cart')} className={`mx-0 ${clsx(styles.icon, active === 'cart' && styles.linkActive)}`} icon={faCartShopping} />
                    </Nav.Link>
                </Nav>
                <span className={styles.amtSpan}>{sum}</span>  
            </Col>
        </Row>
    )
};

export default MainMenu;
