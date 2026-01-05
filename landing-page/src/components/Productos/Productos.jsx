import styles from "../Productos/Productos.module.css"
import empaquetaduras from "../../assets/productos/Empaquetaduras.png";
import acoples from "../../assets/productos/Acoples.png";
import lubricantes from "../../assets/productos/Lubricantes.jpeg";
import bombas from "../../assets/productos/Bombas.png";

const Productos = () => {
const products = [
        {
        id: 1,
        title: "Empaquetaduras y Accesorios",
        description: "O-rings, polipack, tope para cilindro, acoplamientos ADA. Todas las medidas disponibles.",
        image: empaquetaduras
        },
        {
        id: 2,
        title: "Terminales, acoples, punteras",
        description: "Conexiones hidráulicas para mangueras. Variedad de tipos y medidas. ",
        image: acoples
        },
        {
        id: 3,
        title: "Lubricantes",
        description: "Aceites hidráulicos de marcas reconocidas para equipos agrícolas y viales.",
        image: lubricantes
        },
        {
        id: 4,
        title: "Bombas, motores y válvulas de comando",
        description: "A engranajes, a pistones, a paletas.",
        image: bombas
        }
        
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