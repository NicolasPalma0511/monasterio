import styles from '../layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
  return (
    <div className={`container mt-5 ${styles.productosContainer}`}>
      <h1 className={`text-center ${styles.titulo}`}>Productos</h1>

      <div className="d-flex align-items-center mt-3">
        <img src="elementos/filter-solid.svg" alt="filtro" className={`img-fluid ${styles.vectorFoot}`} />
        <p className={`${styles.textoNormal} ms-2`}>Filtrar</p>
      </div>

      <div className={`row ${styles.productosRow}`}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={`col-sm-4 mt-4 ${styles.productoCol}`}>
            <div className={`${styles.productoFondo} p-3 d-flex flex-column`}>
              <a href="/producto" className="text-decoration-none">
                <img
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  alt={`Producto ${index + 1}`}
                  className={`img-fluid ${styles.productoImagen}`}
                />
              </a>
              <div className={`${styles.productoInfo} mt-3 flex-grow-1 d-flex flex-column`}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className={styles.subtitulopequeño}>Titulo del Producto</h5>
                    <p className={styles.textoNormal}>Detalle del Producto</p>
                  </div>
                  <div className={`${styles.textoNormal} ${styles.productoPrecio} ps-4 pe-4 pt-2`}>
                    Precio: 
                    <br />
                    S/.20.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
