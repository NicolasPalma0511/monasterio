
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../layout.module.css'

export default function Home() {
  return (
  <div className="container">
    <h1 className={`text-center ${styles.titulo}`}>Ayuda</h1>
    <p className={`text-start ${styles.subtitulo}`}>Compras</p>
    <br></br>
    <p className={`text-start ${styles.textoNormal}`}>Para realizar un pedido en Monasterio, simplemente navega por nuestra tienda en línea, selecciona los productos que te encanten y agréalos a tu carrito de compras. Luego, sigue los sencillos pasos del proceso de pago para completar tu pedido.</p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Navegación</p>
    <p className={`text-start ${styles.textoNormal}`}>Utiliza las categorías y filtros para encontrar rápidamente lo que estás buscando. Desde suéteres y chompas hasta accesorios, tenemos opciones elegantes y cómodas para cada ocasión.</p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Selecciona tus Productos</p>
    <p className={`text-start ${styles.textoNormal}`}>Haz clic en los productos que te interesen para obtener más detalles. Asegúrate de revisar la información de la talla y la descripción del producto. Una vez que hayas decidido, añade los artículos a tu carrito de compras.</p>
    <p className={`text-start ${styles.subtitulopequeño}`}>Carrito de Compras</p>
    <p className={`text-start ${styles.textoNormal}`}>En el carrito, revisa tu selección y asegúrate de que todo esté correcto. Aquí podrás ajustar las cantidades o eliminar artículos si es necesario.</p>
    <div className={styles.spacer}>
    </div>
  </div>
  )
}
