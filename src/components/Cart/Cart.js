import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import { Link } from "react-router-dom"
import { collection, addDoc, getFirestore } from "firebase/firestore"

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);


  //Suma total del carrito
  const getTotalPrice = () => {
    return cart.reduce(
      (cont, cartItem) => cont + cartItem.price * cartItem.cantidad,
      0
    );
  };

  //Crea orden de compra
  const createOrder = () =>{
    const db = getFirestore();
    const order = {
      buyer: {
        name: 'Facundo',
        phone: '445566',
        email: 'test@test.com'
      },
      items: cart,
      total: getTotalPrice(),
    };
    //Crea un id nuevo de la orden generada
    const query = collection(db, 'orders');
    addDoc(query, order)
    .then(({id}) => {
      console.log(id)
      alert('Felicidades por tu compra')
    })
    .catch(() => alert('Tu compra no pudo ser completada, intentalo mas tarde'))
  }

  const rutaInicial = '../img/';

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
                <img src={rutaInicial+item.image} alt={item.title} className="imagen"></img>
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
          <div className="totalCarrito">
            <h3 className="totalCarritoTitulo">Total</h3>
            <p className="totalCarritoPrecio">{getTotalPrice()}</p>
          </div>
          <div className="cartComprarCont">
            <button onClick={createOrder} className="cartComprar">COMPRAR</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;