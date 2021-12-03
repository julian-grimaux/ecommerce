import React from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AnimationLoading from '../animationLoading/AnimationLoading';
import { getFirestore } from '../../services/getFirebase';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();

    useEffect(() => {
        const db = getFirestore();
        db.collection("items")
            .get()
            .then((response) => {
                if (response.size === 0) {
                    console.log("vacio");
                } else {
                    if (type === undefined) {
                        setProducts(response.docs.map((i) => i.data()));
                    } else {
                        let data = response.docs.map((i) => i.data());
                        setProducts(data.filter((i) => i.type === type));
                    }
                }
            })
            .catch((error) => {
                console.log("Error searching items", error);
            })
            .finally(() => setLoading(false));
    }, [type]);

    return (
            <ItemList products={products} />
    );
};
export default ItemListContainer;
