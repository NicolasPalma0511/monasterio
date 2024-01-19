
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Pagos</p>
    <br></br>
    <p className={`text-start ${styles.textoNormal}`}>Hacemos todo lo posible para satisfacer tu pedido, nos esforzamos por brindarte una experiencia de compra fácil y segura. Nuestro proceso de pago ha sido diseñado para garantizar la comodidad y la tranquilidad durante cada transacción.
    <br></br>
    <br></br>
    Para tu comodidad, aceptamos varios métodos de pago seguros y cifrados, incluyendo:
    </p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li><strong>Tarjetas de credito / debito</strong></li>
        <li><strong>Paypal</strong></li>
        <li><strong>Pago Efectivo</strong></li>
        <li><strong>Yape / Plin</strong></li>
        <li><strong>Pagalo.pe</strong></li>
    </ul>
    <div className={styles.spacer}>
    </div>
  </div>
  )
}
