import { Wrench, Zap, Settings, Shield } from 'lucide-react';
import styles from '../Servicios/Servicios.module.css';

const Servicios = () => {
  
  const services = [
    {
      id: 1,
      title: "Reparaciones Hidráulicas",
      description: "Diagnóstico y reparación de equipos hidráulicos",
      image: "src/assets/ReparacionesHidraulicas.png"
    },
    {
      id: 2,
      title: "Asistencia a Campo",
      description: "Servicio de emergencia 24/7 con tiempos de respuesta inmediatos",
      image: "src/assets/AsistenciaCampo.jpeg"
    },
    {
      id: 3,
      title: "Instalación de Equipos",
      description: "Instalación profesional de equipos hidráulicos",
      image: "src/assets/InstalacionHidraulica.png"
    },
    // {
    //   id: 4,
    //   title: "Mantenimiento Preventivo",
    //   description: "Planes de mantenimiento personalizados para máxima eficiencia",
    //   image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
    // }
  ];

  return (
    <section  className={styles.container}>
      <div className={styles.header}>
        
        <h2 className={styles.title}>
          Nuestros <span className={styles.titleGradient}>Servicios</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {services.map((service) => {
          return (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.cardOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Servicios;