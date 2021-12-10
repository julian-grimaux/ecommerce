import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import app from '../../services/getFirebase'
import {getDoc,doc, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail';
import AnimationLoading from '../animationLoading/AnimationLoading';


const ItemDetailContainer = () => {
    let { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = doc(db, "items", id);
         getDoc(itemsCollection).then((snapshot) => {
             setItem({ id: snapshot.id, ...snapshot.data() })
        })
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className='fondoRed'>
        {loading ? <AnimationLoading /> : <ItemDetail item={item} />}
      </div>
    );
};
export default ItemDetailContainer;

