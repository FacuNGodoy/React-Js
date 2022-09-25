import CartWidget from "../CartWidget/CartWidget";
import carrito from '../../Assets/Img/carrito.png'
import './Shop.css'

const Shop = () => {
  return (
    <div className="bloque">
        <h2 className="titulo">Carrito</h2>
        <div className="bloqueDos">
            <img src={carrito} className="carrito-logo" alt="logo" />
            <CartWidget className="numero"/>
        </div>
    </div>
  )
}

export default Shop;