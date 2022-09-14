import Item from "../Item/Item";
import './ItemList.css'
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
    return(
        <div className="itemList-style">
            {lista.map((product) => (
                <Link key={product.id} to={'/item/' + product.id}>
                    <Item
                        title= {product.title}
                        desc={product.desc}
                        image={product.image}
                        />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;