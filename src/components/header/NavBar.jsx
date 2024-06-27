import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriasRef = collection(db, "categorias");
      const categorySnapshot = await getDocs(categoriasRef);
      const categoryList = categorySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoryList);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li>
          <NavLink to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <NavLink to={`/category/${category.id}`} activeClassName="active" className="nav-link">
              {category.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
