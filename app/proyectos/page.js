import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'

export default function Home() {
    return (
        <div className="container">
        <div className='text-center'>
          <h2 className={styles.titulo}>Proyectos</h2>
        </div>
            <div className="row align-items-center mt-5">
        <div className="col-md-6 ms-5 text-start">
            <h2 className={styles.titulo}>Nuevos diseños</h2>
          <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-md-5 text-center">
          <img
            className="img-fluid float-md-right"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            alt="Imagen1"
          />
        </div>
      </div>
      <div className="row align-items-center mt-5">
      <div className="col-md-5 text-center">
          <img
            className="img-fluid float-md-right"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            alt="Imagen1"
          />
        </div>
        <div className="col-md-6 ms-5 text-end">
          <h2 className={styles.titulo}>Mas diversidad</h2>
          <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
    </div>
    )
}


