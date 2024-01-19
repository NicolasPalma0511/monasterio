import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'

export default function Home() {
    return (
        <div className="container align-items-center justify-content-center mt-4">
            <div className="row">
                <h1 className={`text-center ${styles.titulo}`}>Contacto</h1>
                <p className={`text-center ${styles.textoNormal}`}>¿Tienes alguna duda o sugerencia? Escríbenos y te responderemos lo más pronto posible.</p>
                <p className={`text-center ${styles.subtitulopequeño}`}>Email:</p>
                <p className={`text-center ${styles.textoNormal}`}>@gmail.com</p>
                <p className={`text-center ${styles.subtitulopequeño}`}>Teléfono</p>
                <p className={`text-center ${styles.textoNormal}`}>999 999 999</p>
                <p className={`text-center ${styles.subtitulopequeño}`}>Horarios</p>
                <p className={`text-center ${styles.textoNormal}`}>Lunes a Viernes de 00:00 a 00:00</p>
            </div>
            <div className="row">
                <h1 className={`text-start mb-4 ${styles.titulo}`}>Ayuda</h1>
                    <div className="col-md-4">
                        <a href="/ayuda/FAQ" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Pregunta" src="elementos/circle-question-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>FAQ</p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/ayuda/compras" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Bolso" src="elementos/bag-shopping-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>COMPRAS</p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/ayuda/cambios-devoluciones" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Devolucion" src="elementos/rotate-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>CAMBIOS Y DEVOLUCIONES</p>
                        </div>
                        </a>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4">
                        <a href="/ayuda/pagos" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Tarjeta" src="elementos/credit-card-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>PAGOS</p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/ayuda/proteccion-datos" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Datos" src="elementos/file-shield-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>PROTECCIÓN DE DATOS</p>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/ayuda/envios" className={styles.decoracion}>
                        <div className={`p-4 text-center ${styles.cuadro}`}>
                            <img className={`text-center${styles.vectorFoot}`} alt="Seguimiento" src="elementos/truck-fast-solid.svg" />
                            <p className={`mt-2 ${styles.textoPequeño}`}>ENVÍOS</p>
                        </div>
                        </a>
                    </div>
                </div>
                            
        </div>
    )
}