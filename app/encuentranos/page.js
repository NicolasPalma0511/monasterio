import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'

export default function Home() {
    return (
        <div className="container mt-4">
        <div className="text-center">
            <h2 className={styles.titulo}>Encuéntranos</h2>
            <br/>
            <p className={styles.textoNormal}>Descubre la calidez y elegancia de nuestras exclusivas prendas de alpaca para hombres en nuestra tienda física. 
            Ubicados en un rincón acogedor, te invitamos a explorar nuestra colección de suéteres, chompas y accesorios confeccionados 
            con la suavidad incomparable de la fibra de alpaca.</p>
            <p className={styles.textoNormal}>Descubra cómo podemos elevar la distinción de su marca a través de nuestras prendas de alpaca. Estamos listos para atender sus solicitudes personalizadas. ¡Contáctenos para realizar su pedido y déjenos llevar la calidad y elegancia de la alpaca a su equipo corporativo!</p>
            <a href="/" className={styles.textoPequeñoBold}>Solicitar un pedido →</a>
        </div>
        <div className="row mt-4">
            <div className="col-sm-6 text-center">
            <h3 className={styles.subtitulo}>Sede 1</h3>
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Sede 1" className={`img-fluid ${styles.imagenCentrada}`} />
            <p className={styles.textoNormal}>Dirección</p>
            </div>
            <div className="col-sm-6 text-center">
            <h3 className={styles.subtitulo}>Sede 2</h3>
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Sede 2" className={`img-fluid ${styles.imagenCentrada}`} />
            <p className={styles.textoNormal}>Dirección</p>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-sm-6 text-center">
            <h3 className={styles.subtitulo}>Sede 3</h3>
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Sede 1" className={`img-fluid ${styles.imagenCentrada}`} />
            <p className={styles.textoNormal}>Dirección</p>
            </div>
            <div className="col-sm-6 text-center">
            <h3 className={styles.subtitulo}>Sede 4</h3>
            <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Sede 2" className={`img-fluid ${styles.imagenCentrada}`} />
            <p className={styles.textoNormal}>Dirección</p>
            </div>
        </div>
        </div>
    )
  }