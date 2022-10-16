import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import { Link } from "react-router-dom"
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"
import moment from 'moment';
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeItem, clear } = useContext(CartContext);
  const [order, setOrder] = useState({
    buyer: {
      name: '',
      phone: 0,
      email: ''
    },
    items: cart,
    total: cart.reduce((acc, item) => acc + item.price * item.cantidad, 0),
    date: moment().format('DD/MM/YYYY, h:mm:ss a'),
  });
  const db = getFirestore();

  //Crea orden de compra
  const createOrder = () =>{
    //Crea un id nuevo de la orden generada
    const query = collection(db, 'orders');
    addDoc(query, order)
    .then(({id}) => {
      console.log(id)
      updateStockProducts();
      swal({
        title:'Felicitaciones',
        text: 'por tu compra',
        icon: "success",
        timer: 3000,
      })
    })
    .catch(() => alert('Tu compra no pudo ser completada, intentalo mas tarde'));
  };

  const updateStockProducts = () => {
    cart.forEach(product => {
      const queryUpdate = doc (db, 'items', product.id);
      updateDoc(queryUpdate, {
        categoryId: product.categoryId,
        desc: product.desc,
        image: product.image,
        price: product.price,
        title: product.title,
        stock: product.stock - product.cantidad
      }) 
        .then(() =>{
          if (cart[cart.length -1].id === product.id){
            clear();
            navigate('/');
          }
      })
      .catch(() =>{
        console.log('error al actualizar stock');
      });
    });
  };

  const rutaInicial = '../img/';

  const formulario = (e) => {
    setOrder((currentOrder) => {
      return{
        ...currentOrder,
        buyer: {
          ...currentOrder.buyer,
          [e.target.name]: e.target.value,
        },
      }
    });
  };

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
            <div className="totalCarritoCont">
              <h3 className="totalCarritoTitulo">Total</h3>
              <p className="totalCarritoPrecio">${order.total}</p>
            </div>
          </div>
          <div className="cartVaciarCont">
            <button onClick={() => clear()} className="cartVaciar">Vaciar carrito</button>
          </div>
          <div className="formulario">
            <div className="formularioBorde">
              <form>
                <div className="formLabel">
                  <label>Nombre</label>
                  <input className="formInput" name="name" type='text' value={order.buyer.name} onChange={formulario}/>
                </div>
                <div className="formLabel">
                  <label>Correo</label>
                  <input className="formInput" name="email" type='text' value={order.buyer.email} onChange={formulario}/>
                </div>
                <div className="formLabel">
                  <label>Telefono</label>
                  <input className="formInput" name="phone" type='number' value={order.buyer.phone} onChange={formulario}/>
                </div>
                <div className="cartComprarBoton">
                  <button onClick={createOrder}  className="cartComprar">COMPRAR</button>
                </div>
              </form>
            </div>
            
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;