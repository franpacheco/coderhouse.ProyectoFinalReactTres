import { Link } from "react-router-dom"
import { Carrito } from "../Carrito"
import { NavBar } from "./NavBar"


export const Header = (props) => {
  return (
    <header className="header">
    <Link to="/" className="link-titulo"><h1 className="titulo">AgusMr Store</h1></Link>
    <NavBar/>
    <Carrito numerito={props.numerito}/>
    </header>
  )
}