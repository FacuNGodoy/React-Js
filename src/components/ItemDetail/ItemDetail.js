import '../ItemDetail/ItemDetail.css'
import Counter from "../Counter/Counter";
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';

const ItemDetail = ({list}) => {
  const rutaInicial = '../img/'
  const [carrito, setCarrito] = useState(1)

  const { addToCart } = useContext(CartContext);

  function onAdd(list) {
    addToCart(list, carrito)
    toast (`Ha agregado ${carrito} ${list.title}`,{
      style: {
      borderRadius: '10px',
      background: '#f66',
      color: '#fff',
      },
    })
  };

  return (
    <div className='item-Card-Total-Desc'>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="item-Card-Desc">
        <Link to='/' className='BotVolver'>Volver</Link>
        <div className='item-Img-Cont-Desc'>
          <img src={rutaInicial + list.image} className="item-Img" alt={list.title}/>
        </div>
        <h2 className="item-Tit-Desc">{list.title}</h2>
        <p className="item-Desc">{list.desc}</p>
        <Counter className="contador-Desc" carrito={carrito} setCarrito={setCarrito}/>
        <button className="item-bot-Desc" onClick={() => onAdd(list)}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;