import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>
                <a href="#inicio">
                    <img src={logo} alt="F&F Hidráulica" className={styles.logoImg} />
                </a>
            </div>

            <ul className={styles.links}>
                <li>
                    <a href="#nosotros" className={styles.navLink}>
                        NOSOTROS
                    </a>
                </li>
                <li>
                    <a href="#servicios" className={styles.navLink}>
                        SERVICIOS
                    </a>
                </li>
                <li>
                    <a href="#productos" className={styles.navLink}>
                        PRODUCTOS
                    </a>
                </li>
                <li>
                    <a href="#contacto" className={styles.navLink}>
                        CONTACTO
                    </a>
                </li>
            </ul>

            {/* Botón CTA */}
            <div className={styles.ctaContainer}>
                <a 
                    href="https://wa.me/549340415632052?text=Hola,%20necesito%20información%20sobre%20servicios%20hidráulicos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                    >
                    <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
                        <span>CHAT</span>
                    </a>
            </div>
        </nav>
    );
}

export default Navbar;