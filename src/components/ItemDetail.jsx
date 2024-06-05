import React from 'react'

export const ItemDetail = ( {producto} ) => {
  return (
    <div className='producto-detail'>  
            <img src={producto.imagen}/> 
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <button>Agregar al carrito</button>
    </div>
  )
}
