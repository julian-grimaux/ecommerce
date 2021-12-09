import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../../services/getFirebase'
import {getDoc,doc, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = doc(db, "items", id);
         getDoc(itemsCollection).then((snapshot) => {
             setItem({ id: snapshot.id, ...snapshot.data() })
        });
    }, [id]);

    return (
        <ItemDetail item={item}></ItemDetail>
    );
};
export default ItemDetailContainer;

