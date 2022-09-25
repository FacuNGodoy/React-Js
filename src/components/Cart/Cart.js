import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  console.log('cart', cart);

  function carritoTotal (){
    let total=0;
    cart.forEach(item => {
      total = total + item.price*item.cantidad
    });
  }

  carritoTotal();

  return (
    <div>
      <h1 className="carritoTituloVacio">Su carrito</h1>
     
      {cart.length === 0 ? (
      <>
        <h2 className="carritoVacio">El carrito se encuentra vacio.</h2>
        <Link to={'/'} className="carritoLink">Volver a comprar</Link>
      </>
      ) : (
        <>
          <div className="carritoTitulos">
            <div className="carritoTitulo">
              <h2>Nombre</h2>
            </div>
            <div className="carritoImagen">
              <h2>Producto</h2>
            </div>
            <div className="carritoPrecio">
              <h2>Precio</h2>
            </div>
            <div className="carritoCantidad">
              <h2>Cantidad</h2>
            </div>
            <div className="carritoBorrar">
            </div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="carrito">
              <div className="carritoTitulo">
                <h3>{item.title}</h3>
              </div>
              <div className="carritoImagen">
                <img src={item.image} alt={item.title} className="imagen"></img>
              </div>
              <div className="carritoPrecio">
                <p>${item.price}</p>
              </div>
              <div className="carritoCantidad">
                <p>{item.cantidad}</p>
              </div>
              <div className="carritoBorrar">
                <button onClick={()=> removeItem(item.id)} className="carritoBotBorrar">X</button>
              </div>
            </div>
          ))}
          <div>
            <h3>Total</h3>
            <p>{carritoTotal()}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;