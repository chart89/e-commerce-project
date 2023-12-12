import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {

    return (
        <div className={styles.footerDiv}>
            <p>Copyright <span><FontAwesomeIcon icon={faCopyright} /></span> SmallCars 2023</p>
        </div>
    );
};

export default Footer;