import styles from "../Productos/Productos.module.css"

const Productos = () => {
const products = [
        {
        id: 1,
        title: "Empaquetaduras",
        description: "O-rings, polipack y empaquetaduras hidráulicas. Todas las medidas disponibles.",
        image: "src/assets/productos/Empaquetaduras.jpeg"
        },
        {
        id: 2,
        title: "Terminales, acoples, punteras",
        description: "Conexiones hidráulicas para mangueras. Variedad de tipos y medidas. ",
        image: "src/assets/productos/Acoples.jpeg"
        },
        {
        id: 3,
        title: "Lubricantes",
        description: "Aceites hidráulicos de marcas reconocidas para equipos agrícolas.",
        image: "src/assets/productos/Lubricantes.jpeg"
        },
        
    ];

    return (
        <section  className={styles.container}>
        <div className={styles.header}>
            
            <h2 className={styles.title}>
            Nuestros <span className={styles.titleGradient}>Productos</span>
            </h2>
        </div>

        <div className={styles.grid}>
            {products.map((product) => {
            return (
                <div key={product.id} className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={product.image} alt={product.title} />
                    <div className={styles.cardOverlay}></div>
                </div>
                
                <div className={styles.cardContent}>
                    
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <p className={styles.cardDescription}>{product.description}</p>
                </div>
                </div>
            );
            })}
        </div>
        </section>
    );
};

export default Productos;