
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Envios</p>
    <br></br>
    <p className={`text-start ${styles.textoNormal}`}>Las estimaciones de los tiempos de envío se proporcionan como referencia. En Monasterio, comprendemos que la puntualidad es crucial, sin embargo, no podemos asumir responsabilidad por retrasos derivados de eventos fuera de nuestro control. Los envíos están sujetos a las políticas de nuestros servicios de mensajería o proveedores de logística. Te recomendamos revisar nuestra política de envíos para obtener información detallada.
    </p>
    <p className={`text-start ${styles.subtitulo}`}>Políticas de Envío:</p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Estimaciones de Tiempo:</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Las estimaciones de los tiempos de envío son proporcionadas como <strong>referencia.</strong></li>
        <li>No garantizamos <strong>tiempos específicos</strong> debido a eventos imprevistos.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>Responsabilidad por Retrasos:</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Monasterio <strong>no asume responsabilidad</strong> por retrasos causados por eventos fuera de nuestro control.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>Sujetos a Políticas de Courier/Proveedores:</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Los envíos están <strong>sujetos a las políticas</strong> de nuestros servicios de mensajería o proveedores de logística.</li>
    </ul>
  </div>
  )
}
