import React, { Fragment, useState } from 'react'
import { AddToCart, FinishButton, BackHome } from '../buttons/Buttons';
import '../buttons/buttons.css'

const ItemCount = ({ stock,onAdd }) => {

    const initial = 1;
    const [count, setCount] = useState(initial);
    const [display, setDisplay] = useState("hidden");

    const handleClickAdd = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    };
    const handleClickRemove = () => {
        count === 1 ? setCount(1) : setCount(count - 1);
    };

    const handleOnAdd = () => {
        onAdd(count);
        setCount(initial);
        setDisplay("block");
    };

    return (
        <Fragment>
        <div className="countContainer">
                <div className="buttonContainer">
                    <button onClick={handleClickAdd} className='button'>+</button>
                    <h1 className="countNumber">{count}</h1>
                    <button onClick={handleClickRemove} className='button'>-</button>
                </div>
            {display === "block" ? (
                <div className="buttonFinishHome">
                    <FinishButton />
                    <BackHome />
                </div>
            ) : (
                <>
                    <AddToCart setDisplay={setDisplay} handleOnAdd={handleOnAdd} />
                </>
            )}
        </div>    
        </Fragment>
    )
}

export default ItemCount
