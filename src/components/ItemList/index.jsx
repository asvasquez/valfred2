import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const ItemListComponent = () =>{
  const context = useContext(CartContext);
  return <div>
    {context.listProducts.map((element, index)=>{
      return <ItemComponent addToCart={addToCart} key={producto.id} updateStock={context.cambiarStock} id={producto.id} title={producto.title} categoryId={producto.categoryId} image={producto.image} description={producto.description} stock={producto.stock} price={producto.price}/>
    })}
  </div>   

}
