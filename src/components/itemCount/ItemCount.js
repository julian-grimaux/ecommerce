import React, { Fragment, useState } from 'react'
import useStyles from '../itemListContainer/item/style'
import { AddToCart, FinishButton, BackHome } from '../buttons/Buttons';




const ItemCount = ({ stock, onAdd }) => {

    const classes = useStyles();

    const initial = 1;
    const [count, setCount] = useState(initial);
    const [display, setDisplay] = useState("hidden");

    const handleSumCount = () => {
        if (count == stock) return;
        setCount(count + 1);
    };

    const handleSubtractCount = () => {
        if (count == 0) return;
        setCount(count - 1);
    };

    const handleOnAdd = () => {
        onAdd(count);
        setCount(initial);
        setDisplay("block");
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
            {display === "block" ? (
                <div className="space-y-2">
                    <FinishButton />
                    <BackHome />
                </div>
            ) : (
                <>
                    <AddToCart setDisplay={setDisplay} handleOnAdd={handleOnAdd} />
                </>
            )}
        </Fragment>
    )
}

export default ItemCount
