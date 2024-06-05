import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/Productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();

    useEffect(() => {
        console.log(itemId);
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId]); 

    return (
        <div>{ producto ? producto.nombre : "Cargando ..."}</div>
    );
}

export default ItemDetailContainer;
