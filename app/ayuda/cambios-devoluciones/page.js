
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Cambios y devoluciones</p>
    <br></br>
    <p className={`text-start ${styles.textoNormal}`}>Comprendemos que las necesidades y preferencias pueden cambiar. Por ello, ofrecemos un proceso sencillo para devoluciones y cambios dentro de un plazo determinado. Te invitamos a consultar nuestra política específica, donde encontrarás todos los detalles y los pasos a seguir para garantizar una experiencia sin complicaciones.
    </p>
    <p className={`text-start ${styles.subtitulo}`}>Proceso y politicas de cambios y devoluciónes</p>
    <p className={`text-start ${styles.textoNormal}`}>Nos comprometemos a ofrecer productos de la más alta calidad, pero comprendemos que en ocasiones pueden surgir problemas. Si un cliente recibe una prenda defectuosa o dañada, le animamos a presentar un reclamo para que podamos abordar la situación de manera inmediata. En Monasterio, nos ocuparemos de recibir y procesar el reclamo con el objetivo de determinar si es más apropiado realizar un cambio por un producto en condiciones óptimas o efectuar un reembolso, todo ello basado en una cuidadosa evaluación de la situación y teniendo en cuenta las preferencias del cliente. Nuestro compromiso es garantizar la satisfacción del cliente y resolver cualquier problema de manera eficiente.
    </p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Proceso de cambio</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>En el caso de solicitar un cambio de producto debido a daño o defecto, el cliente deberá presentar un reclamo a través de nuestros canales de contacto dentro de los <strong>7 días posteriores</strong> a la recepción del producto, proporcionando la información pertinente. Un asesor evaluará el reclamo en un plazo máximo de <strong>15 días hábiles</strong> y determinará su aceptación o rechazo. Si el reclamo es aceptado, Monasterio procederá con el cambio de la prenda y cubrirá los gastos de envío asociados. Este proceso asegura una respuesta eficaz y satisfactoria para el cliente en situaciones de productos dañados o defectuosos.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>Proceso de Reembolso</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>En caso de recibir un producto dañado o defectuoso, el cliente debe presentar un reclamo en un plazo máximo de <strong>7 días después de la recepción</strong>, proporcionando la información necesaria e indicando el reembolso del mismo. Un asesor evaluará el reclamo en un plazo de <strong>15 días hábiles</strong> y decidirá su aceptación o rechazo. En caso de aceptación, Monasterio procederá al reembolso utilizando el mismo método de pago original y asumirá los gastos de envío asociados al retorno del producto defectuoso, garantizando así una solución eficiente y satisfactoria para el cliente.</li>
    </ul>
    <div className={styles.spacer}>
    </div>
  </div>
  )
}
