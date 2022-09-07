import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({lista}) => {
    return(
        <div className="itemList-style">
            {lista.map((product) => (
                    <Item
                        key={product.id}
                        title= {product.title}
                        desc={product.desc}
                        image={product.image}
                    />
                ))}
        </div>
    );
};

export default ItemList;