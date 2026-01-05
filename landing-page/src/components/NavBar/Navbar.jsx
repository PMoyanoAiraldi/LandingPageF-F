import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="#inicio">
                    <img src={logo} alt="F&F Hidráulica" className={styles.logoImg} />
                </a>
            </div>

            <button 
                className={styles.hamburger} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            <ul className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
                <li>
                    <a href="#nosotros" className={styles.navLink} onClick={closeMenu}>
                        NOSOTROS
                    </a>
                </li>
                <li>
                    <a href="#servicios" className={styles.navLink} onClick={closeMenu}>
                        SERVICIOS
                    </a>
                </li>
                <li>
                    <a href="#productos" className={styles.navLink} onClick={closeMenu}>
                        PRODUCTOS
                    </a>
                </li>
                <li>
                    <a href="#contacto" className={styles.navLink} onClick={closeMenu}>
                        CONTACTO
                    </a>
                </li>
            </ul>

        
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