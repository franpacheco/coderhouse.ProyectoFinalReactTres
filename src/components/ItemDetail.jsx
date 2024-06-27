import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ( {producto} ) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = () => {

    agregarAlCarrito(producto);

  }
      
  return (

    <div className='producto-detail'>  
            <img src={producto.imagen}/> 
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <button onClick={handleAgregar}>Agregar al carrito</button>
            {/*<input type="number" name="cantidadCarrito" id="hola" placeholder='seleccione la cantidad' min={1} max={10} />*/}
    </div>
  )
}
