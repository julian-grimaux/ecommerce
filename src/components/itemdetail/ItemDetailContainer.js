import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../../services/getFirebase'
import { collection, getDocs, getFirestore,query,where } from "firebase/firestore"
import ItemDetail from './ItemDetail';
import AnimationLoading from '../animationLoading/AnimationLoading';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = query (itemsCollection,where("id", "==", id));

            getDocs(q).then((snapshot) => {
                snapshot.forEach((doc) => {
                    setItem(doc.data());
                });
            })
            .catch(() => console.log("error"))
    }, [id]);

    return (
        <ItemDetail item={item}></ItemDetail>
    );
};
export default ItemDetailContainer;

