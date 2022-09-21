import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    

    const addToCart = (list, cantidad) =>{

        if (isInCart(list.id)) {
            alert('ya esta en el carrito');
        } else{
            setCart([...cart, {...list, cantidad}]);
        };
        console.log('cart', [...cart, {...list,cantidad}]);
    };
         const isInCart = (id) =>{
        return cart.some((list) => list.id === id);
         }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}