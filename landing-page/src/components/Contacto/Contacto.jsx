import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faMapMarkerAlt, faClock} from '@fortawesome/free-solid-svg-icons';
import styles from "../Contacto/Contacto.module.css"
import { faWhatsapp, faInstagram  } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
return (
        <section className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>
                Contacta<span className={styles.titleGradient}>nos</span>
            </h2>
            {/* Horarios de atención */}
            <div className={styles.scheduleWrapper}>
                <div className={styles.scheduleInfo}>
                    <FontAwesomeIcon icon={faClock} className={styles.clockIcon} />
                    <span className={styles.scheduleText}>
                        Lunes a Viernes: 8:00 - 12:00 hs | 15:00 - 19:00hs
                    </span>
                </div>
                <div className={styles.emergencyInfo}>
                    <span className={styles.emergencyText}>
                        🚨 Emergencias disponibles 24/7
                    </span>
                </div>
            </div>
        </div>
        

        <div className={styles.contactGrid}>
        {/* Email */}
        <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/> 
            </div>
            <h3 className={styles.cardTitle}>Email</h3>
                <a href="mailto:fyfhidraulica@gmail.com" className={styles.link}>
                fyfhidraulica@gmail.com
                </a>
                <span className={styles.cardSubtext}>Enviar Email</span>
        </div>

        {/* WhatsApp Facundo */}
                <div className={styles.contactCard}>
                    <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Facundo</h3>
            
                <a href="https://wa.me/549340415632052?text=Hola,%20necesito%20información%20sobre%20servicios%20hidráulicos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    (03404) 15632052
                </a>
                <span className={styles.cardSubtext}>Enviar WhatsApp</span>
            </div>

            {/* WhatsApp Fabián */}
                <div className={styles.contactCard}>
                    <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Fabián</h3>
                
                <a href="https://wa.me/549340415535342?text=Hola,%20necesito%20información%20sobre%20servicios%20hidráulicos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    (03404) 15535342
                </a>
                <span className={styles.cardSubtext}>Enviar WhatsApp</span>
            </div>


            {/* Ubicación */}
                <div className={styles.contactCard}>
                    <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Ubicación</h3>
            <a href="https://www.google.com/maps/dir/-31.9011011,-61.2791656/F%26F+hidr%C3%A1ulica,+Rivadavia,+S2255+L%C3%B3pez,+Santa+Fe/@-31.9007082,-61.2809726,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x95b5870023ecaa09:0xef3d4f554096385d!2m2!1d-61.277967!2d-31.9003615!3e2?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Rivadavia, López - Santa Fe
                    </a>
                    <span className={styles.cardSubtext}>Ver en mapa</span>
                </div>


        {/* Instagram */}
        <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </div>
        <h3 className={styles.cardTitle}>Instagram</h3>
            <a 
                href="https://www.instagram.com/hidraulicafyf" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                @hidraulicafyf
            </a>
        <span className={styles.cardSubtext}>Síguenos</span>
            </div>
        </div>
        </section>
    )
}

export default Contacto;