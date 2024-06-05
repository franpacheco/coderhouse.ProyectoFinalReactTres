import { useEffect, useState } from 'react';
import data from "../data/Productos.json";
import categories from "../data/Categorias.json"
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  

  let [productos, setProductos] = useState([]);

  let [titulo, setTitulo] = useState("productos");

  const pedirProductos = () => {

    return new Promise((resolve,reject) => {
      
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {

    pedirProductos()
    .then((res) => {
      if (categoryId) {
        setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
        setProductos(res.filter((prod) => prod.categoria.id === categoryId))
      } else{
        setTitulo("productos");
        setProductos(res);
      }
      
    })

  }, [categoryId])
  
  return (
    <div className="products-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos}/>
    </div>
  );
}
