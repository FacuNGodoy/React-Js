import data from "../../Data/Data.js";
import {useEffect, useState} from "react";
import ItemList from "../../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
  const {category} = useParams();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      category ? setProductList(response.filter((item) => item.categoryId === category)) : setProductList(response);
    })
  }, [category]);

const getProducts = 
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });


  return(
    <>
      <ItemList lista={productList}/>
    </>
  );
};

export default ItemListContainer;