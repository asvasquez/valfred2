import { useState } from "react";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import cart4 from "../../../src/cart4.svg"
import { NavLink } from "react-router-dom";

export function CartWidget () {
    const context = useContext(CartContext);
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active);
    };
    const handleBlur = () => {
        setTimeout(()=> setActive(false), 50);
    };
    return(
        <div className="cart-widget">
            <button className="icon-btn" onClick={handleClick} onBlur={handleBlur}>
                <img src={cart4} className="cart-widget__icon" alt="" />
                <span className={context.price === 0 ? '' : 'cart-widget__price appear'} hidden>{context.totalQty}</span>
            </button>
            <div className={`cart-widget__cart-container ${active ? 'active' : ''}`}>
                <h5>Items del carrito</h5>
                <ul>
                    {
                        context.cart.lenght===0 ? <li>Todavia no tenemos productos en el carrito</li> 
                        :context.cart.map((obj)=>{
                            return ( 
                                <li key={obj.id} className="cart-widget">
                                    <img src={obj.image} alt={obj.title} className="cart-item__img"/>
                                    <div className="cart-item__title">
                                        <h5>{obj.title}</h5>
                                    <span>Cantidad: {obj.cantidad}</span>
                                    </div>
                                </li>
                            )})
                    }
                </ul>
                <NavLink to="/cart" className="btn-big">Ir al Carrito</NavLink>
            </div>
        </div>
    ) 
}