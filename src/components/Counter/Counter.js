import './Counter.css'

const Counter = ({carrito, setCarrito}) => {
    const stock = 10

    const sumar = () => carrito <= stock -1 ? setCarrito(carrito + 1) : alert(`Se alcanzó el máximo de stock.`)
    const restar = () => carrito > 0 ? setCarrito(carrito - 1) : alert(`El número debe ser positivo.`)
    
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