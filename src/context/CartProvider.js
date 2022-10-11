import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    

    const addToCart = (list, cantidad) =>{
        const inCart= isInCart(list.id)
        if (inCart) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === list.id) {
                    return { ...cartItem, cantidad: cartItem.cantidad + cantidad }
                } else {
                    return cartItem
                }
            })
            setCart(newCart)
        } else{
            setCart([...cart, {...list, cantidad}]);
        };
    };
    
    const isInCart = (id) =>{
        return cart.some((list) => list.id === id);
    }

    const removeItem = (listID) => {
        setCart(cart.filter((list)=> list.id !== listID))
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}