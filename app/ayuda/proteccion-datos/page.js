
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Proteccion de datos</p>
    <br></br>
    <p className={`text-start ${styles.textoNormal}`}>En Monasterio, valoramos y respetamos profundamente tu privacidad. Reconocemos la importancia de proteger tu información personal y queremos que te sientas seguro(a) al utilizar nuestros servicios. Por esta razón, hemos establecido una sólida política de privacidad que detalla cómo recopilamos, utilizamos y protegemos tu información.
    <br></br>
    Te animamos a revisar detenidamente nuestra política de privacidad, donde encontrarás información detallada sobre los tipos de datos que recopilamos, los propósitos para los cuales los utilizamos y las medidas de seguridad que implementamos para garantizar la confidencialidad de tu información.
    </p>
    <p className={`text-start ${styles.subtitulo}`}>Políticas de información</p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Información Recopilada</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>En Monasterio, recopilamos información personal limitada y específica, como tu nombre, dirección, dirección de correo electrónico y detalles de pago. Esta recopilación se realiza exclusivamente con el propósito de procesar tus pedidos de manera eficiente y mejorar tu experiencia como cliente. Queremos asegurarte que mantenemos la confidencialidad de esta información de manera integral.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>Uso de la Información</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>La información personal proporcionada tiene un propósito claro en Monasterio. Utilizamos estos datos para procesar tus pedidos de manera efectiva, enviar actualizaciones relevantes sobre el estado de tus pedidos, responder a tus consultas y, fundamentalmente, mejorar constantemente la calidad de nuestros productos y servicios. Es nuestra política firme no compartir ni vender información personal a terceros sin tu consentimiento explícito.</li>
    </ul>
    <p className={`text-start ${styles.subtitulopequeño}`}>Seguridad de la Información</p>
    <ul className={`text-start ${styles.textoNormal}`}>
        <li>La seguridad de tu información es de suma importancia para nosotros. En Monasterio, hemos implementado medidas de seguridad como el uso de certificados SSL (Secure Sockets Layer), para garantizar la transmisión segura de datos entre tu navegador y nuestro sitio web. Este protocolo SSL asegura que tus datos estén encriptados y protegidos durante la transferencia. Queremos que confíes en que tus datos están resguardados con los más altos estándares de seguridad en todo momento.</li>
    </ul>
  </div>
  )
}
