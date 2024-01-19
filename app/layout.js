"use client";
//import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect } from 'react'
import { NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import styles from './layout.module.css'


/*export const metadata = {
  title: 'Monasterio',
  description: 'App Web Monasterio',
}*/

export default function RootLayout({ children }) {

  useEffect(() => {
    if(typeof window !== 'undefined'){
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" />
        <title>Monasterio</title>
      </head>
      <body>
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbarTransparent}`}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                alt="LogoEmpresa"
                src="https://media.discordapp.net/attachments/745676914840305846/1194073124308795492/image.png?ex=65af0641&is=659c9141&hm=5ee0ea19c57466db95518283927a519236a097c787c9ac1922af85ebf0ab178c&=&format=webp&quality=lossless&width=440&height=227"
                className={styles.logo}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <NavDropdown title="Tienda" className={styles.textoNormal}>
                <NavDropdown title="Prendas" drop='end' className={`text-end ${styles.textoNormalNav}`}>
                  <NavDropdown.Item href="/productos">Chompas</NavDropdown.Item>
                  <NavDropdown.Item href="#">Sacos</NavDropdown.Item>
                  <NavDropdown.Item href="#">Polos</NavDropdown.Item>
                  <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                  <NavDropdown.Item href="#">Ponchos</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chalecos</NavDropdown.Item>
                  <NavDropdown.Item href="#">Pijamas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Accesorios" drop='end' className={`text-end ${styles.textoNormalNav}`}>
                  <NavDropdown.Item href="#">Guantes</NavDropdown.Item>
                  <NavDropdown.Item href="#">Gorros</NavDropdown.Item>
                  <NavDropdown.Item href="#">Chalinas</NavDropdown.Item>
                  <NavDropdown.Item href="#">Cuelleras</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Materiales" drop='end' className={`text-end ${styles.textoNormal}`}>
                  <NavDropdown.Item href="#">Baby Alpaca</NavDropdown.Item>
                  <NavDropdown.Item href="#">Royal Alpaca</NavDropdown.Item>
                  <NavDropdown.Item href="#">100% Alpaca</NavDropdown.Item>
                  <NavDropdown.Item href="#">Alpaca Seda</NavDropdown.Item>
                  <NavDropdown.Item href="#">Alpaca Oveja</NavDropdown.Item>
                  <NavDropdown.Item href="#">Oveja</NavDropdown.Item>
                </NavDropdown>
                  <NavDropdown.Item href="/looks-book" className={`text-end ${styles.textoNormal}`}>Looks Book</NavDropdown.Item>
                </NavDropdown>
                </li>
                <li className="nav-item">
                  <NavDropdown title="Nuestra Marca" className={styles.textoNormalNav}>
                    <NavDropdown.Item href="/marca" className={styles.textoNormal}>Detras de la marca</NavDropdown.Item>
                    <NavDropdown.Item href="/proyectos" className={styles.textoNormal}>Proyectos</NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.textoNormalNav}`} href="/encuentranos">
                    Encuéntranos
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href='/inicio-sesion'>
                  <img
                    alt="Usuario"
                    src="/elementos/user-solid.svg"
                    className={`nav-link ${styles.vectorNav}`} 
                  />
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/bolsa'>
                  <img
                    alt="Bolsa"
                    src="/elementos/bag-shopping-solid.svg"
                    className={`nav-link ${styles.vectorNav}`} 
                  />
                  </a>
                </li>
                <li className="nav-item">
                  <a href='/'>
                  <img
                    alt="Búsqueda"
                    src="/elementos/magnifying-glass-solid.svg"
                    className={`nav-link ${styles.vectorNav}`} 
                  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-content">
          {children}
        </div>
        <footer className={`mt-4 container-fluid ${styles.footer}`}>
          <div className={`row ${styles.textoFooter}`}>
            <div className="col-sm-2 mt-3">
              <a href="/ayuda">Ayuda</a>
            </div>
            <div className="col-sm-3 mt-3">
              <a href="/terminos">Términos y Condiciones</a>
            </div>
            <div className="col-sm-4 mt-3">
              <a href="/libro-reclamaciones">Libro de Reclamaciones</a>
            </div>
            <div className="col mt-3">
              <img className={styles.vectorFoot} alt="Facebook" src="/elementos/facebook.svg" />
              <img className={styles.vectorFoot} alt="Instagram" src="/elementos/instagram.svg" />
              <img className={styles.vectorFoot} alt="TikTok" src="/elementos/tiktok.svg" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4 text-center">
              <p className={styles.textoPequeño}>Monasterio | 2024</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
