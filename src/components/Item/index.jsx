import React from "react"
import { CartComponent } from "../Cart"
export const ItemComponent = React.memo(({addToCart, title, image, categoryId, id, description, stock, price, updateStock}) =>{
    console.log("renderizado")
    return (
    <div className="row product">
        <div className="col-md-2">
            <img src={image} width="300" height="300"/>
        </div>
        <div className="col-md-6 produt-detail">
            <h1>{title}</h1>
            <h4>{description}</h4>
            <h3>Stock disponible: {stock}</h3>
            <h4>Id Producto: {id}, Categoria: {categoryId}</h4>
         </div>
         <div className="col-md-4 producto-price">   
            <h2>Precio ${price}.-</h2>
            <button onClick={()=>{
                let product = {title:title, image:image, categoryId:categoryId, id:id, description:description, stock:stock, price:price, cantidad :1}
                addToCart(product)}}
                updateStock={CartComponent && CartComponent.cambiarStock}>Agregar Producto</button>
        </div>
    </div>)
}, (valorInicial, valorActual)=>{
    return valorInicial.stock === valorActual.stock
});
    
 