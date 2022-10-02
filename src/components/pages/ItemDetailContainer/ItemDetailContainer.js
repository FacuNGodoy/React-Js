import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [itemDetailList, setItemDetailList] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {

        const db = getFirestore(); 
        const queryDoc = doc(db, 'items', id);

        getDoc(queryDoc)
            .then((res) => {setItemDetailList({...res.data(), id})})
            .catch((err) => console.log(err));    

    }, [id]);
    
    return(
        <>
            <ItemDetail list={itemDetailList}/>
        </>
    );
};

export default ItemDetailContainer;