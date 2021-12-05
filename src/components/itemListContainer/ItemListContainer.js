import React, { Fragment } from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../../services/getFirebase'
import { collection, getDocs, getFirestore } from "firebase/firestore"



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
            .then((snapshot) => {
                if(type === undefined) {
                setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
                } else {
                    let data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
                        setProducts(data.filter((doc)=> doc.type === type));
                }
    })
    }, [type]);

    return (
        <ItemList products={products} />
    );
};
export default ItemListContainer;
