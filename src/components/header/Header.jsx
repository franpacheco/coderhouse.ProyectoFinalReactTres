import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { NavBar } from "./NavBar"


export const Header = () => {
  return (
    <header className="header">
    <Link to="/" className="link-titulo">
      <img src="src\assets\logo.jpg" alt="logo" className="logo-img" />
    </Link>
    <NavBar/>
    <CartWidget />
    </header>
  )
}