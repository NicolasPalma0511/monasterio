import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css';

const Producto = () => {
  return (
    <div className={`container mt-4 ${styles.productContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mb-3">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Image 1" className={`img-fluid ${styles.productImage}`} />
            </div>
            <div className="col-md-6 mb-3">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Image 2" className={`img-fluid ${styles.productImage}`} />
            </div>
            <div className="col-md-6 mb-3">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Image 3" className={`img-fluid ${styles.productImage}`} />
            </div>
            <div className="col-md-6 mb-3">
              <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Image 4" className={`img-fluid ${styles.productImage}`} />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center ">
          <div className={`${styles.productDetails}`}>
            <div className={`text-end ${styles.titulo}`}>Nombre del Producto</div>
            <br />
            <div className={`text-end ${styles.subtitulopequeño}`}>Categoría del Producto</div>
            <br />
            <div className={`product-description ${styles.subtitulopequeño}`}>Descripción del Producto: </div>
            <br />
            <div className={`product-price ${styles.textoNormal}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <br />
            <form>
            <div className="mb-3">
              <label htmlFor="color" className={`form-label ${styles.textoNormal}`}>Color:</label>
              <div className={`d-flex justify-content-center align-items-center ${styles.productOptions}`}>
                <div className="form-check">
                  <input type="radio" id="color1" name="color" value="Azul" className="form-check-input" />
                  <label htmlFor="color1" className={`${styles.colorOption} ${styles.color1}`}></label>
                </div>

                <div className="form-check">
                  <input type="radio" id="color2" name="color" value="Negro" className="form-check-input" />
                  <label htmlFor="color2" className={`${styles.colorOption} ${styles.color2}`}></label>
                </div>

                <div className="form-check">
                  <input type="radio" id="color3" name="color" value="Gris" className="form-check-input" />
                  <label htmlFor="color3" className={`${styles.colorOption} ${styles.color3}`}></label>
                </div>
              </div>
            </div>
              <div className="mb-3">
                <label htmlFor="talla" className={`form-label ${styles.textoNormal}`}>Talla:</label>
                <div className={`d-flex justify-content-center`}>
                  <input type="radio" id="tallaXS" name="talla" value="XS" className="form-check-input ms-2" />
                  <label htmlFor="tallaXS" className={`ms-2 me-2 ${styles.textoNormal}`}>XS</label>

                  <input type="radio" id="tallaS" name="talla" value="S" className="form-check-input ms-2" />
                  <label htmlFor="tallaS" className={`ms-2 me-2 ${styles.textoNormal}`}>S</label>

                  <input type="radio" id="tallaM" name="talla" value="M" className="form-check-input ms-2" />
                  <label htmlFor="tallaM" className={`ms-2 me-2 ${styles.textoNormal}`}>M</label>

                  <input type="radio" id="tallaL" name="talla" value="L" className="form-check-input ms-2" />
                  <label htmlFor="tallaL" className={`ms-2 me-2 ${styles.textoNormal}`}>L</label>

                  <input type="radio" id="tallaXL" name="talla" value="XL" className="form-check-input ms-2" />
                  <label htmlFor="tallaXL" className={`ms-2 me-2 ${styles.textoNormal}`}>XL</label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className={`btn ${styles.boton}`}>Comprar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
