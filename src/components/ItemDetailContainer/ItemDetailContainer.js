import data from "../Data/Data";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [itemDetailList, setItemDetailList] = useState([]);

    let id = '2'

    useEffect(() =>{
        getItem.then((Response) =>{
            setItemDetailList(Response)
        })
    }, []);

    const getItem =
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data.find((detail) => detail.id === id));
        },2000)
        });
    
        
    return(
        <>
            <ItemDetail list={itemDetailList}/>
        </>
    );
};

export default ItemDetailContainer;