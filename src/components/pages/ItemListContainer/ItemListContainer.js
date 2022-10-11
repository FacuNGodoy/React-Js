import {useEffect, useState} from "react";
import ItemList from "../../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const {category} = useParams();

  const [productList, setProductList] = useState([]);

const getProducts = () => {
  const db = getFirestore();
  const queryBase = collection(db, 'items');
  const querySnapshot = category ? query(queryBase, where('categoryId', '==', category)) : queryBase;
  
  getDocs(querySnapshot).then((response) => {
    const data = response.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
    });
    setProductList(data);
  });
};
  useEffect(() => {
    getProducts();
    }, [category]);

  return(
    <>
      <ItemList lista={productList}/>
    </>
  );
};

export default ItemListContainer;