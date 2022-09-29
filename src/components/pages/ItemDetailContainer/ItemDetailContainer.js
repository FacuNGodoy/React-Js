import data from "../../Data/Data";
import { useEffect, useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemDetailList, setItemDetailList] = useState([]);

    const db = getFirestore();

    const queryDoc = doc(db, 'items', id);

    getDoc(queryDoc)
        .then((res) => {

        })
        .catch((err) => console.log(err));
    
    console.log(data);

    const getProduct = () => {
        const queryDoc = doc(db, 'items', id);

         getDoc(queryDoc)
           .then((res) => {
                setItemDetailList(res.data())
           })
           .catch((err) => console.log(err));    
    }

    useEffect(() => {
        getProduct();
    }, [id]);
    
    return(
        <>
            <ItemDetail list={itemDetailList}/>
        </>
    );
};

export default ItemDetailContainer;