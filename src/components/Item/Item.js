import Counter from '../Counter/Counter'
import './Item.css'

const Item = ({title, desc, image}) =>{
    return(
        <div className='item-Card-Total'>
            <div className="item-Card">
                <div className='item-Img-Cont'>
                    <img src={image} className="item-Img" alt={title}/>
                </div>
                <h2 className="item-Tit">{title}</h2>
                <p className="item-Desc">{desc}</p>
                <Counter/>
            </div>
        </div>
    )
}

export default Item;