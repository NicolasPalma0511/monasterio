"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollLinkRef = useRef(null);

  const scrollToSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setIsVisible(currentScroll > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <div className="position-relative text-center">
        <img src="https://play.teleporthq.io/static/svg/default-img.svg" alt="Descripción de la imagen" className={`img-fluid ${styles.imagenLarga}`} />
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <h2 className={styles.titulo}>Bienvenido</h2>
          <br />
          <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a
            ref={scrollLinkRef}
            href="#scrollTarget"
            className={`${isVisible ? 'visible' : 'hidden'} ${styles.textoPequeñoBold}`}
            onClick={scrollToSection}
          >
            Ver más
          </a>
        </div>
      </div>
      <div className="row align-items-center mt-5">
        <div className="col-md-6 ms-5 text-start">
            <h2 className={styles.titulo}>Sobre nosotros</h2>
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
          <h2 className={styles.titulo}>Nuestro trabajo</h2>
          <p className={styles.textoNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}
