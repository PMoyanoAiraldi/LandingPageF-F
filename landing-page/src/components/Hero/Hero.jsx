import styles from "../Hero/Hero.module.css";
import { FaClock, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import { IoFlashSharp } from 'react-icons/io5';

const Hero = ()=> {
    return (
            <section className={styles.hero}>
      {/* Degradé de fondo */}
        <div className={styles.gradientBg}></div>

      {/* Grid de imágenes */}
        <div className={styles.imageGrid}>
        <div className={styles.imageBox}>
            <img 
            src="src/assets/InstalacionCentralPlantaSilo.jpeg" 
            alt="Trabajo hidráulico 1" 
        />
        </div>
        <div className={styles.imageBox}>
            <img 
                src="src/assets/InstalacionCentralPlantaSilo.jpeg" 
                alt="Trabajo hidráulico 2" 
            />
            </div>
            <div className={styles.imageBox}>
            <img 
                src="src/assets/InstalacionCentralPlantaSilo.jpeg" 
                alt="Trabajo hidráulico 3" 
            />
        </div>
        </div>

      {/* Card central con glassmorphism */}
        <div className={styles.content}>
            <div className={styles.card}>
    
            {/* Título */}
            <h1 className={styles.title}>
                Soluciones 
                <span className={styles.highlight}> Hidráulicas</span>
            </h1>

            {/* Subtítulo */}
            <p className={styles.subtitle}>
                Reparación, instalación y mantenimiento con garantía.
            <br />
            Tu solución en cada problema hidráulico.
            </p>

            {/* Botones */}
            <div className={styles.buttons}>
                <a 
                href="https://wa.me/549340415632052?text=Hola,%20necesito%20información" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
                >
                <FaWhatsapp /> WhatsApp
                </a>
                <button className={styles.btnSecondary}>
                Ver Servicios
                </button>
            </div>

            {/* Features */}
            <div className={styles.features}>
                <div className={styles.feature}>
                <FaClock  className={styles.featureIcon}/>
                <span>Servicio 24/7</span>
                </div>
                <div className={styles.feature}>
                <FaShieldAlt className={styles.featureIcon}/>
                <span>Garantía Total</span>
                </div>
                <div className={styles.feature}>
                <IoFlashSharp  className={styles.featureIcon}/>
                <span>Respuesta Rápida</span>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    
}

export default Hero;