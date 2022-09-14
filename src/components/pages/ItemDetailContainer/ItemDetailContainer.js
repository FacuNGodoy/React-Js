import data from "../../Data/Data";
import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    
    const [itemDetailList, setItemDetailList] = useState([]);

    useEffect(() =>{
        getItem.then((Response) =>{
            setItemDetailList(Response)
        })
    }, []);

    const getItem =
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data.find((detail) => detail.id === id));
        },1000)
        });
    
    return(
        <>
            <ItemDetail list={itemDetailList}/>
        </>
    );
};

export default ItemDetailContainer;