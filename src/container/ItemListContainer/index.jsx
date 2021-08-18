import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemComponent } from "../../components/Item";
import { CartContext } from "../../context/CartContext";
// import {addToCart} from "react"

export const ItemListContainer = () =>{
    const [list, setList] = useState([]);
    const {listProducts, cart, setCart, cambiarStock} = useContext(CartContext)
    // const {CartComponent} = useContext(CartContext)
    const {categoryId} = useParams()
    
    function addCart(product){
        if(listProducts.length !== 0){
            const auxProduct = cart.findIndex(producto=> producto.id===product.id);
            if(auxProduct !== -1){
                cart[auxProduct].cantidad++;
                setCart([...cart])
            }else{
            setCart([...cart, product])
            }
        }else{
            setCart([...cart, product])
        }
    let total = 0;
    cart.forEach(element => {
        total = total + (element.cantidad * element.price)
    })
    }
    console.log(addCart)


    const [total, setTotal]=useState(0)
    useEffect(()=>{
        // const total = CartComponent.reduce((prev, actual)=>{return prev.price + actual.price});
        setTotal(total)
        setList(listProducts)
        FiltrarProductos(categoryId)
    },[categoryId])
        
    function FiltrarProductos(categoryId){
        const array = listProducts.filter(producto => producto.categoryId === categoryId)
        setList(array);
    }
    function Example() {
        return(list.map(producto=>{
            return<ItemComponent addToCart={addCart} key={producto.id} id={producto.id} title={producto.title} categoryId={producto.categoryId} image={producto.image} description={producto.description} stock={producto.stock} price={producto.price} updateStock={cambiarStock}/>
        }))
        
    }

    return <div>
        <div>
            <button onClick={()=>{FiltrarProductos("faja")}}>Fajas</button>
            <button onClick={()=>{FiltrarProductos("corset")}}>Corset</button>
            <button onClick={()=>{FiltrarProductos("tobillera")}}>Tobilleras</button>
            <button onClick={()=>{FiltrarProductos("rodillera")}}>Rodilleras</button>
            <button onClick={()=>{FiltrarProductos("talonera")}}>Talonera</button>
        </div>
        <Example/>        
    </div>
}