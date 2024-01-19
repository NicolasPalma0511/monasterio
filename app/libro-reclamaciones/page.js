import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'

export default function Home() {
    return (
    <div className="container d-flex align-items-center justify-content-center mt-4">
        <div className="col-sm-6">
          <h1 className={`text-center ${styles.titulo}`}>Libro de reclamaciones</h1>
            <br />
            <p className={`${styles.textoNormal}`}>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a su disposición.</p>
            <p className={`${styles.textoNormal}`}>Razón Social: </p>
            <p className={`${styles.textoNormal}`}>RUC: </p>
          <form action="reclamacion.php" method="POST">
        <div className="form-group">
          <h1 className={`${styles.subtitulo}`}>Datos del reclamante</h1>
          <p className={styles.textoPequeño}>Los campos con (*) son obligatorios </p>
          <label className={styles.textoNormal}>Nombre *</label>
          <input type="text" className="form-control" placeholder="Ej. Cesar" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Apellidos *</label>
          <input type="text" className="form-control" placeholder="Ej. Aquino Maximiliano" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Dirección *</label>
          <input type="text" className="form-control" placeholder="Ej. Av. Los Angeles 1025" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Distrito *</label>
          <input type="text" className="form-control" placeholder="Ej. Villa El Salvador" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Documento de Identidad*</label>
          <select className="form-control">
            <option>-Ninguno-</option>
            <option value="D.N.I.">D.N.I.</option>
            <option value="C.E.">C.E.</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>N° doc. Identidad *</label>
          <input type="text" className="form-control" placeholder="Ej. 40125201" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Correo electrónico *</label>
          <input type="email" className="form-control" placeholder="Ej. nombre@correo.com" />
        </div>
        <div className="form-group mt-4">
          <label className={styles.textoNormal}>Teléfono alternativo *</label>
          <input type="text" className="form-control" placeholder="Ej. 1 294-0008" />
        </div>
        <div className="form-group mt-4">
          <h1 className={`${styles.subtitulo}`}>Detalle del reclamo</h1>
          <label className={styles.textoNormal}>Monto a reclamar (S/.)</label>
          <input type="text" className="form-control" placeholder="Ej. 200" />
        </div>
        <label className={`radio-inline  mt-4 ${styles.textoNormal}`}>
          <input type="radio" name="tipo" defaultChecked /> Reclamo
        </label>
        <label className={`radio-inline ms-5  mt-4 ${styles.textoNormal}`}>
          <input type="radio" name="tipo" /> Queja
        </label>
        <p className={`mt-3 ${styles.textoPequeño}`}>- RECLAMO: Disconformidad relacionada a los productos expendidos o servicios brindados.</p>
        <p className={`mt-3 ${styles.textoPequeño}`}>- QUEJA: Disconformidad NO RELACIONADA a los productos o servicios. Malestar o descontento respecto con la atención al público</p>
        <div className="form-group mt-3">
          <label className={styles.textoNormal}>Descripción</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <div className="form-group mt-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="terminosCheckbox" required />
              <label className={`form-check-label ${styles.textoPequeño}`} htmlFor="terminosCheckbox">Acepto los términos y condiciones</label>
            </div>
          </div>
        <button type="submit" class={`btn mt-2 ${styles.boton}`}>Enviar</button>
      </form>
      <p>&nbsp;</p>
    </div>
    </div>
    )
  }