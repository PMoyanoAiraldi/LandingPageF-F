import styles from "../Nosotros/Nosotros.module.css"

const Nosotros = () => {
    return (
        <div className={styles.container}>

        <div className={styles.header}>
            <h2 className={styles.title}>
                ¿Quienes <span className={styles.titleGradient}>Somos?</span>
            </h2>
        </div>
        <p className={styles.textoIntro}>Somos una empresa de servicios hidráulicos formada por profesionales con amplia experiencia en el rubro.
        </p>

        <p className={styles.texto}>
        El equipo está integrado por Fabian Cerda y Facundo Moyano, quienes combinamos conocimiento, trayectoria y compromiso para brindar soluciones eficientes y duraderas. Abordamos cada trabajo con responsabilidad, precisión y atención al detalle.
        </p>

        <p className={styles.texto}>
        Nos enfocamos en ofrecer un servicio confiable y personalizado, entendiendo las necesidades de cada cliente y trabajando con el objetivo de resolver cada problema de manera rápida y efectiva.
        </p>
        </div>
    )
}

export default Nosotros;