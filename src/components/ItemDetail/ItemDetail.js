import '../ItemDetail/ItemDetail.css'
import Counter from "../Counter/Counter";
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({list}) => {
  const [carrito, setCarrito] = useState(1)

  const { addToCart } = useContext(CartContext);

  function onAdd(list) {
    addToCart(list, carrito)
  };

  return (
    <div className='item-Card-Total-Desc'>
      <div className="item-Card-Desc">
        <Link to='/' className='BotVolver'>Volver</Link>
        <div className='item-Img-Cont-Desc'>
          <img src={list.image} className="item-Img" alt={list.title}/>
        </div>
        <h2 className="item-Tit-Desc">{list.title}</h2>
        <p className="item-Desc">{list.desc}</p>
        <Counter className="contador-Desc" carrito={carrito} setCarrito={setCarrito}/>
        {/* <Link to={'/cart'}> */}
        <button className="item-bot-Desc" onClick={() => onAdd(list)}>Comprar</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ItemDetail;