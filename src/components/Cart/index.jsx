import { Button } from "bootstrap"
import {React, useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemComponent } from "../Item"
import firebase from "@firebase/app"
import firestore from "@firebase"
import { Link } from "react-router-dom"


export const CartComponent = () =>{
    
    // function Cart() {
        const {cart, clearCart, total}= useContext(CartContext)
        const [openPay, setOpenPay] = useState(false)
        const [form, setForm] = useState({name:'', email:'', phone:''});
        
        const classes =useStyles();

        function submitOrder(){
            const db = getFirestoreDB()
            const orders=db.collection('orders')

            const order={
                buyer:{...form},
                item:CartContext,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
            }
            orders.add(order)
            .then(({id})=>alert("Anota el id de tu compra"+id))
            .catch((error)=>console.log(error))
        }
        return(
            <div className="cart">
                {cart.length>0?(<h1>¡¡¡Ya puedes comprar!!! :D</h1>
        )
        :
        (<>
        <h1>Aun no elegiste tus productos</h1>
            <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Llevame a tus fantasticos productos
                </Button>
            </Link>
        </>)}
    
    <div className="cartItems">
        {cart.length>0 && cart.map(product =><ItemComponent addToCart={addToCart} key={producto.id} id={producto.id} title={producto.title} categoryId={producto.categoryId} image={producto.image} description={producto.description} stock={producto.stock} price={producto.price}/>)}
    </div>

    {cart.length > 0 &&
    <>
    <h2>${total}</h2>
    <div className="cartItem__buttons">
        <Button onClick={clearCart} variant="conatined" color="primary">
            Saca todo del carrito
        </Button>
        <Button onClick={()=>{setOpenPay(true)}} variant="contained" color="primary">
            A pagar!
        </Button>
    </div>
    </>}

    {openPay &&
        <div>
            <imput type="text" placeholder="Tu Nombre" onInput={(event)=>{setForm({...form, name: event.target.value})}} />
            <imput type="email" placeholder="Tu Email" onInput={(event)=>{setForm({...form, email: event.target.value})}} />
            <imput type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="000-000-0000" onInput={(event)=>{setForm({...form, phone: event.target.value})}} />
            <Button onClick={submitOrder} variant="contained" color="primary">
                Si!
            </Button>
        </div>}
    </div>
    )
}
// export default Cart
