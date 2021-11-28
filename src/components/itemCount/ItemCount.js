import React, { Fragment,useState } from 'react'
import useStyles from '../itemListContainer/item/style'
import { AddToCart} from '../buttons/Buttons';



const ItemCount = ({stock}) => {
    const classes = useStyles();

    const initial = 1;
    const [count, setCount] = useState(initial);

    const handleSumCount = () => {
        if (count == stock) return;
        setCount(count + 1);
    };

    const handleSubtractCount = () => {
        if (count == 0) return;
        setCount(count - 1);
    };

    const handleOnAdd = () => {
        setCount(0);
    };

    return (
        <Fragment>
            <div className={classes.countcontainer}>
                <div className={classes.buttoncontainer}>
                    <button onClick={handleSumCount} className='button'>+</button>
                    <h1 className={count > 0 ? "positive" : "negative"}>{count}</h1>
                    <button onClick={handleSubtractCount} className='button'>-</button>
                </div>
            </div>
            <AddToCart handleOnAdd={handleOnAdd}></AddToCart>
        </Fragment>
    )
}

export default ItemCount
