import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({title, desc, image, id}) =>{
    return(
        <div className='item-Card-Total'>
            <div className="item-Card">
                <div className='item-Img-Cont'>
                    <img src={image} className="item-Img" alt={title}/>
                </div>
                <h2 className="item-Tit">{title}</h2>
                <p className="item-Desc">{desc}</p>
                <Link to={'/item/' + id}>
                    <button className="item-bot" >Detalles</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;