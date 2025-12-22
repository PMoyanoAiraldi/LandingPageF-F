import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Descripción */}
                
                <div className={styles.brandSection}>
                <h3 className={styles.brandName}>F&F Hidráulica</h3>
                <p className={styles.tagline}>
                    Soluciones hidráulicas profesionales
                </p>
            </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Info y redes */}
                <div className={styles.bottomSection}>
                    <div className={styles.info}>
                        <p className={styles.copyright}>
                            © {currentYear} F&F Hidráulica - Todos los derechos reservados
                        </p>
                        <p className={styles.location}>
                            López, Santa Fe, Argentina
                        </p>
                        <p className={styles.developer}>
                            Desarrollado por Paula Moyano
                        </p>
                    </div>

                    <div className={styles.social}>
                        <a 
                            href="https://www.instagram.com/hidraulicafyf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Síguenos en Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;