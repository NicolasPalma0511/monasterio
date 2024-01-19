import styles from '../layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = (props) => {
  return (
    <div className="container mt-5">
      <h1 className={`text-center ${styles.titulo}`}>Looks Book</h1>

      <div className="d-flex align-items-center mt-3">
        <img src="elementos/filter-solid.svg" alt="filtro" className={`img-fluid ${styles.vectorFoot}`} />
        <p className={`${styles.textoNormal} ms-2`}>Filtrar</p>
      </div>

      <div className="row mt-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="col-sm-12 mt-4">
            <div className={`${styles.productoFondo} p-3 d-flex flex-column`}>
              <a href="/detalle-look" className="text-decoration-none">
                <div className="d-flex">
                  <img
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    alt={`Producto ${index + 1}`}
                    className={`img-fluid ms-4 me-4 ${styles.imagenlook}`}
                  />
                  <img
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    alt={`Producto ${index + 2}`}
                    className={`img-fluid ms-5  me-5 ${styles.imagenlook}`}
                  />
                  <img
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    alt={`Producto ${index + 3}`}
                    className={`img-fluid ms-4 ms-4 ${styles.imagenlook}`}
                  />
                </div>
              </a>
              <div className={`${styles.productoInfo} mt-3 flex-grow-1 d-flex flex-column`}>
                <div className="d-flex ms-4">
                  <div>
                    <h5 className={styles.subtitulopequeño}>Titulo del Producto</h5>
                    <p className={styles.textoNormal}>Detalle del Producto</p>
                  </div>
                  <div className={`${styles.textoNormal} ${styles.productoPrecio} ps-4 pe-4 pt-2 ms-5`}>
                    Precio: 
                    <br />
                    S/.120.00
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
