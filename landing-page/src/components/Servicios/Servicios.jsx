// import { FaCheck } from 'react-icons/fa';
// import styles from "../Servicios/Servicios.module.css"

// const Servicio = () =>  {
//     return (
//         <section className= {styles.container}>
//         <div className={styles.card}>
//             <div className={styles.lista}>
//                 <p><FaCheck  className={styles.featureIcon} /> Reparaciones Hidráulicas </p>
//             </div>
//             <div className={styles.lista}>
//                 <p><FaCheck  className={styles.featureIcon} /> Asistencia a campo </p>
//             </div>
//             <div className={styles.lista}>
//                 <p><FaCheck  className={styles.featureIcon} /> Instalación de equipos hidráulicos </p>
//             </div>
            
//         </div>

//         </section>
//     )
// }

// export default Servicio;

import { useState } from 'react';
import { Wrench, Zap, Settings, Shield } from 'lucide-react';
import styles from '../Servicios/Servicios.module.css';

const Servicios = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Wrench,
      title: "Reparaciones Hidráulicas",
      description: "Diagnóstico y reparación de sistemas hidráulicos con tecnología de punta",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      icon: Zap,
      title: "Asistencia a Campo",
      description: "Servicio de emergencia 24/7 con tiempos de respuesta inmediatos",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      icon: Settings,
      title: "Instalación de Equipos",
      description: "Instalación profesional de sistemas hidráulicos industriales",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      icon: Shield,
      title: "Mantenimiento Preventivo",
      description: "Planes de mantenimiento personalizados para máxima eficiencia",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="servicios" className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>Lo que hacemos</span>
        <h2 className={styles.title}>
          Nuestros <span className={styles.titleGradient}>Servicios</span>
        </h2>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          Soluciones integrales en sistemas hidráulicos con tecnología de última generación
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={styles.card}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={styles.cardImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.cardOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                
                <button className={styles.cardButton}>
                  Más información
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>¿Necesitas asistencia inmediata?</h3>
        <p className={styles.ctaText}>Nuestro equipo está disponible 24/7 para atender tus emergencias</p>
        <button className={styles.ctaButton}>
          💬 Contactar por WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Servicios;