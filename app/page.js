
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './layout.module.css'


export default function Home() {
  return (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 ms-5 text-left">
        <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className={styles.textoPequeñoBold}>Comprar ahora</p>
      </div>
      <div className="col-md-5 text-center">
        <img
          className="img-fluid float-md-right"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="Imagen1"
        />
      </div>
    </div>
    <div className="row align-items-center">
    <div className="col-md-5 text-center">
        <img
          className="img-fluid float-md-right"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          alt="Imagen1"
        />
      </div>
      <div className="col-md-6 text-end">
        <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p className={styles.textoPequeñoBold}>Echa un vistazo</p>
      </div>
    </div>
    <div className="container mt-5 align-items-center">
      <h1 className={`text-center ${styles.titulo}`}>Productos Destacados</h1>
      <div className="row">
        <div className="col-sm-4 mt-4">
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Producto 1" className="img-fluid" />
        </div>
        <div className="col-sm-4 mt-4">
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Producto 2" className="img-fluid" />
        </div>
        <div className="col-sm-4 mt-4">
          <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Producto 3" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  )
}
