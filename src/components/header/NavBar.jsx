import { Link, NavLink } from "react-router-dom"
import categories from "../../data/Categorias.json"

export const NavBar = () => {
  return (
    <nav className="nav">
    <ul className="nav-menu">
      <li>
        <NavLink to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
      </li>
      {
        categories.map((category) => {
          return (
            <li className="nav-item" key={category.id}>
              <NavLink to={`/category/${category.id}`} activeClassName="active" className="nav-link">
              {category.nombre}
            </NavLink>
            </li>
          )
        })
      }
    </ul>
  </nav>
  )
}
