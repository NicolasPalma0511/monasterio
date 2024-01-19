import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'


export default function Home() {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-4">
        <div className="row align-items-center">
            <h1 className={`text-center ${styles.titulo}`}>Registro</h1>
            <form action="reclamacion.php" method="POST">
              <div className="form-group">
                <label className={styles.textoNormal}>Nombre</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="form-group mt-4">
                <label className={styles.textoNormal}>Apellidos</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="form-group mt-4">
                <label className={styles.textoNormal}>Dirección</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="form-group mt-4">
                <label className={styles.textoNormal}>Correo electrónico</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="form-group mt-4">
                <label className={styles.textoNormal}>Contraseña</label>
                <input type="text" className="form-control"/>
              </div>
              <div className={`text-center ${styles.spacer}`}>
              <button type="submit" class={`btn mt-4 ${styles.boton}`}>Registrate</button>
              </div>
            </form>
        </div>
    </div>
    
  )
}