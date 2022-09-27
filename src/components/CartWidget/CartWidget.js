import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const getTotalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
      };
    return(
    <div className="numero">
        {cart.length === 0 ? <></> : <p>{getTotalItems()}</p>}
    </div>
    )
}

export default CartWidget;