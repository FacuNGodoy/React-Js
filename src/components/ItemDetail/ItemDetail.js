import '../Item/Item.css'
import Counter from "../Counter/Counter";

const ItemDetail = ({list}) => {
  return (
    <div className='item-Card-Total'>
      <div className="item-Card">
        <div className='item-Img-Cont'>
          <img src={list.image} className="item-Img" alt={list.title}/>
        </div>
        <h2 className="item-Tit">{list.title}</h2>
        <p className="item-Desc">{list.desc}</p>
        <Counter/>
      </div>
    </div>
  );
};

export default ItemDetail;