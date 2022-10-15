import './Counter.css'
import toast, {Toaster} from 'react-hot-toast';

const Counter = ({carrito, setCarrito, stock}) => {

    const sumar = () => carrito <= stock -1 ? setCarrito(carrito + 1) :
    toast (`Se alcanzó el límite de stock`,{
      style: {
      borderRadius: '10px',
      background: '#f66',
      color: '#fff',
      },
    });
    const restar = () => carrito > 1 ? 
    setCarrito(carrito - 1) : 
    toast (`La compra mínima es de 1 unidad.`,{
      style: {
      borderRadius: '10px',
      background: '#f66',
      color: '#fff',
      },
    })
    
  return (
    <>
    <div className="contador">
        <button onClick={restar} className="carrito-Bot">-</button>
        <div className="carrito-Num">{carrito}</div>
        <button onClick={sumar} className="carrito-Bot">+</button>
    </div>
    </>
  )
}

export default Counter