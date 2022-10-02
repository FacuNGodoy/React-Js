import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    

    const addToCart = (list, cantidad) =>{
        const inCart= isInCart(list.id)
        if (inCart) {
            alert('ya esta en el carrito');
        } else{
            setCart([...cart, {...list, cantidad}]);
        };
    };
    
    const isInCart = (id) =>{
        return cart.some((list) => list.id === id);
    }

    const removeItem = (listID) => {
        let nuevoArreglo = []; 
        cart.forEach(list => {
            if(list.id !== listID){
                nuevoArreglo.push(list);
            }
        });
            setCart(nuevoArreglo);
         };

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}