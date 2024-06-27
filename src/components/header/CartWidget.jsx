import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="cartwidget" to="/carrito">
    🛒 {calcularCantidad()}
</Link>
  )
}
