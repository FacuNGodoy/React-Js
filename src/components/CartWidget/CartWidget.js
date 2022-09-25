import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    return(
    <div className="numero">
        {cart.length === 0 ? <></> : <p>{cart.length}</p>}
    </div>
    )
}

export default CartWidget;