import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { NavBar } from "./NavBar"


export const Header = () => {
  return (
    <header className="header">
    <Link to="/" className="link-titulo">
      <img src="https://firebasestorage.googleapis.com/v0/b/tienda-reactjs-coderhouse24.appspot.com/o/logo%20y%20varios%2Flogo.jpg?alt=media&token=baf2bf94-5999-4b2d-ae2d-baac91075a48" alt="logo" className="logo-img" />
    </Link>
    <NavBar/>
    <CartWidget />
    </header>
  )
}