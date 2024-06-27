import { Fragment, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => (
        <Fragment key={prod.id}>
          <h1>{prod.nombre} : ${prod.precio}</h1>
          <button onClick={() => eliminarProducto(prod)} className='borrarBtn'>borrar producto</button>
        </Fragment>
      ))}
    
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <Link to="/finalizar-compra">Finalizar Compra</Link>

        </>
      ) : (
        <h2>Carrito Vacio</h2>
      )}
    </div>
  );
};
