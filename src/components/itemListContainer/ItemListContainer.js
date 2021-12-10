import React, { Fragment } from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../../services/getFirebase'
import { collection, getDocs, getFirestore,orderBy,query } from "firebase/firestore"
import AnimationLoading from '../animationLoading/AnimationLoading';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { type } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "items");
        const q = query(itemsCollection,orderBy("name"));
        getDocs(q)
            .then((snapshot) => {
                if(type === undefined) {
                setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
                } else {
                    let data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
                        setProducts(data.filter((doc)=> doc.type === type));
                }
    })
    .finally(() => setLoading(false));
    }, [type]);

    return (
        <div className='fondoRed'>
        {loading ? <AnimationLoading /> : <ItemList products={products} />}
        </div>
    );
};
export default ItemListContainer;
