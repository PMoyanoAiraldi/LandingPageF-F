import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import styles from "../Contacto/Contacto.module.css"

const Contacto = () => {
return (
        <div className={styles.container}>

        <div className={styles.header}>
            <h2 className={styles.title}>
                Contactanos
            </h2>
        </div>
        <p><FontAwesomeIcon icon={faEnvelope} /> {' '}
                <a href="mailto:fyfhidraulica@gmail.com" className={styles.link}>
                fyfhidraulica@gmail.com
                </a>
        </p>
            <p>
                <a href="https://wa.me/549340415632052?text=Hola,%20necesito%20información%20sobre%20servicios%20hidráulicos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                >
                (03404) 15535060
                </a>
            </p>
                
        </div>
    )
}

export default Contacto;