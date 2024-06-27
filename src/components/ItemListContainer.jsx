import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
  const { categoryId } = useParams(); 
  const [productos, setProductos] = useState([]); 
  const [titulo, setTitulo] = useState("Productos"); 

  useEffect(() => {
    // Función asin para obtener los productos desde Firestore
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos"); // Referencia a la colección "productos" en Firestore
        const categoriasRef = collection(db, "categorias"); // Referencia a la colección "categorias" en Firestore

        let q; // Variable para almacenar la consulta

        // si categoryId tiene un valor definido (no es null ni undefined)
        if (categoryId) {
          // Si categoryId tiene valor, filtramos por categoría
          q = query(productosRef, where("categoria.id", "==", categoryId));

          // Buscamos el nombre de la categoría correspondiente al categoryId
          const categoriasSnapshot = await getDocs(query(categoriasRef, where("id", "==", categoryId)));
          const categoria = categoriasSnapshot.docs[0]?.data();
          if (categoria) {
            setTitulo(categoria.nombre); // Establecemos el título con el nombre de la categoría
          }
        } else {
          // Si categoryId no tiene valor (página inicial), obtenemos todos los productos sin filtro
          q = productosRef;
          setTitulo("Productos"); 
        }

        // Ejecutamos la consulta y obtenemos el snapshot de los documentos
        const querySnapshot = await getDocs(q);

        // Mapeamos los documentos del snapshot y agregamos el campo id al objeto
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        // Actualizamos el estado productos con los datos obtenidos
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching productos: ", error); // Manejo de errores en caso de fallo en la consulta
      }
    };

    // Llamamos a la función para obtener los productos cuando cambie categoryId
    fetchProductos();
  }, [categoryId]);

  return (
    <div className="products-container">
      <h1>{titulo}</h1> 
      <ItemList productos={productos} /> 
    </div>
  );
};
