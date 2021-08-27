import { createContext, useEffect, useState } from "react";
import { getFirestoreDB } from "../firebase";


export const CartContext = createContext();

export const persistentCart = () => {
    const key = 'cartProducts';
    
    return {
      persist: (data) => localStorage.setItem(key, data),
      get: () => localStorage.getItem(key),
    }
  }
  
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);    
    const [listProducts, setListProducts] = useState([]);
    // console.log(cart)

    function cambiarStock(title){
        const nuevoList = listProducts.map(product=>{
            if(product.title === title){product.stock--
            }
            return product;
        })
        setListProducts(nuevoList)
    }
    
    useEffect(()=>{

        async function getData(){
            const DB = getFirestoreDB();
            const response = await DB.collection('productos').orderBy('id', 'asc').get()
            let productos = response.docs.map((producto)=>{
                return{id: producto.id, ...producto.data()};
            })
            setListProducts(productos);
        }
        getData();
        }, [])

        if(listProducts.length===0){
            return <h2>Loading</h2>
        }
    return<CartContext.Provider value={{cart, cambiarStock, listProducts, setCart}}>
        {listProducts.length >0 ? children:<div id="spinner"></div>}
    </CartContext.Provider>
}
export function CartConsumer({children}) {
    return(
        <CartContext.Consumer>
            {children}
        </CartContext.Consumer>
    )
}
