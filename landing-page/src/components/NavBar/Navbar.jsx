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
                <Link to='/'>
                    <img src={logo} alt="F&F Hidráulica" className={styles.logoImg} />
                </Link>
            </div>

            {/* Links centrados */}
            <ul className={styles.links}>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >
                        NOSOTROS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/servicios" 
                        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >
                        SERVICIOS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/productos" 
                        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >
                        PRODUCTOS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contacto" 
                        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    >
                        CONTACTO
                    </NavLink>
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