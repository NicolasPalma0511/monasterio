
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Preguntas frecuentes (FAQ)</p>
    <br></br>
    <p className={`text-start ${styles.subtitulopequeño}`}>1.-¿Cómo puedo pagar mi compra?</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Puedes pagar tu pedido con tarjeta de crédito o débito, PayPal, Yape / Plin, PagoEfectivo o Pagalo.pe</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>2.-¿Cuánto tardará en llegar mi compra?</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>El plazo de entrega varia segun la direccion de entrega, esta fecha esta sujeta a cambios de el courier asignado.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>3.-¿Cuál es el coste del envío?</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>El coste del envío dependerá de la tarifa que tenga el proveedor asignado y la distancia de envió</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>4.-¿Cómo puedo devolver un producto?</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Para devolver un producto, debe tomar en cuenta lo siguiente:</li>
        <ul className={`text-start ${styles.textoNormal}`}>
          <li>Tiene un plazo de 7 dias habiles despues de recibido el producto para presentar un reclamo de devolución</li>
          <li>Debera ponerse en contacto con un asesor (@gmail.com) explicando su caso y el mismo se pondra en contacto con usted en un plazo no mayor a 15 dias hábiles</li>
        </ul>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>5.- ¿Cómo puedo realizar un pedido personalizado?</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>Para realizar un pedido personalizado, debes seguir los siguientes pasos:</li>
        <ul className={`text-start ${styles.textoNormal}`}>
          <li>Ingresa a la seccion de Encuentranos</li>
          <li>Verás un boton de "Solicitar pedido" y seras redirigido a un chat de Whatsapp</li>
          <li>Brinda la infrmacion necesaria y un asesor se pondra en contacto contigo</li>
        </ul>
    </ul>
  </div>
  )
}
