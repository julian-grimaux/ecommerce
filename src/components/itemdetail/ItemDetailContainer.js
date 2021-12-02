import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GetProducts from '../../services/Promise';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const { id } = useParams();
    console.log(id);
    
    useEffect(() => {
      GetProducts
      .then(res => {
        setItem(res.find((prod) => prod.Id === parseInt(id)));

       
      })
      .catch(err => console.log('error al obtener el producto', err))
     
    },[])
  
    return (
     <ItemDetail item= {item}/>
    );};
  export default ItemDetailContainer;
