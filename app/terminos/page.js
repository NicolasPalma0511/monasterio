import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../layout.module.css'

export default function Home() {
    return (
        <div className="container mt-4">
            <div className="text-center">
                <h2 className={styles.titulo}>Términos y Condiciones</h2>
                <br/>
                <p className={styles.textoNormal}>Bienvenido a Monasterio, tu destino en línea para prendas de vestir de alta calidad 
                hechas de alpaca. Antes de explorar nuestro sitio web y realizar compras, te invitamos a revisar detenidamente nuestros 
                términos y condiciones generales.
                </p>
            </div>
            <div className="container mt-4">
                <h1 className={styles.subtitulopequeño}>1. Productos y Descripciones</h1>
                <p className={styles.textoNormal}>Nos esforzamos por brindar descripciones precisas y representaciones fieles de nuestros 
                productos en alpaca. Sin embargo, no podemos garantizar que la pantalla de tu dispositivo refleje con precisión los colores 
                reales de los artículos.
                </p>
                <h1 className={styles.subtitulopequeño}>2. Pedidos y Pago</h1>
                <p className={styles.textoNormal}>Los pedidos están sujetos a disponibilidad y nos reservamos el derecho de rechazar o cancelar 
                pedidos en cualquier momento debido a factores como la disponibilidad de productos o errores de precios. Los pagos se realizan 
                de forma segura y cifrada.
                </p>
                <h1 className={styles.subtitulopequeño}>3. Envíos y Entregas</h1>
                <p className={styles.textoNormal}>Los tiempos de envío estimados se proporcionan como referencia. Monasterio no asume 
                responsabilidad por retrasos causados por eventos fuera de nuestro control. Los envíos están sujetos a las políticas de 
                nuestros courier o proveedores, y se recomienda revisar nuestra política de envíos para obtener información detallada.
                </p>
                <h1 className={styles.subtitulopequeño}>4. Devoluciones y Cambios</h1>
                <p className={styles.textoNormal}>Aceptamos devoluciones y cambios dentro de un plazo determinado. Consulta nuestra política 
                específica para conocer los detalles y los pasos a seguir.
                </p>
                <h1 className={styles.subtitulopequeño}>5. Privacidad y Seguridad</h1>
                <p className={styles.textoNormal}>Respetamos tu privacidad. Consulta nuestra política de privacidad para comprender cómo 
                manejamos la información personal.
                </p>
                <h1 className={styles.subtitulopequeño}>6. Propiedad Intelectual</h1>
                <p className={styles.textoNormal}>Todos los derechos de propiedad intelectual relacionados con el sitio web y su contenido 
                son propiedad de Monasterio. Se prohíbe la reproducción sin autorización.
                </p>
                <h1 className={styles.subtitulopequeño}>7. Modificaciones de Términos</h1>
                <p className={styles.textoNormal}>Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos 
                términos y condiciones en cualquier momento. Es responsabilidad del usuario revisar periódicamente los cambios.
                </p>
                <h1 className={styles.subtitulopequeño}>8. Contacto</h1>
                <p className={styles.textoNormal}>Para preguntas o inquietudes relacionadas con estos términos y condiciones, contáctanos a 
                través de los canales proporcionados en nuestro sitio web.
                </p>
            </div>
        </div>
    )
  }