import { Children, createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = 
({children}) => {

    const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {

    setCarrito([...carrito, producto])

  }

  const calcularCantidad = () => { return carrito.length }

  const calcularTotal = () => {

    return carrito.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);

  }

  const vaciarCarrito = () => {

    setCarrito ([]);

  }

  const eliminarProducto = (producto) => { //pasamos producto como parametro

    const productoEncontrado = carrito.find(prod => prod.id === producto.id); //buscamos un producto en el carrito con id que coincida con el id del producto que pasamos como parametro
    const indice = carrito.indexOf(productoEncontrado); //buscamos el indice del elemento encontrado

    const nuevoCarrito = [...carrito]; //creamos un nuevo carrito con los productos que contenga nuevos
    nuevoCarrito.splice(indice, 1); //a ese carrito le sacamos el indice del elemento que seleccionamos arriba
    setCarrito(nuevoCarrito); //seteamos el producto a esa variable, ya que esta es e larray del carrito pero con el producto eliminado


  }

  return (

    <CartContext.Provider value={ { carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto } }>
    {children}
    </CartContext.Provider >

  )

}