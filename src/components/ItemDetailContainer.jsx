import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from "../data/Productos.json";
import { useEffect } from 'react';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

    let { itemId } = useParams();

    let [producto, setProducto] = useState();

    useEffect(() => {

        console.log(itemId)
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));

    }, [itemId])
    


  return (
    <div>{producto ? <ItemDetail producto={producto}/> : "Cargando..." }</div>
  )
}
