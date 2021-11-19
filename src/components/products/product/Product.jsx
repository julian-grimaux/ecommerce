import React, { useState, useEffect } from 'react';
import {Card, CardMedia, CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './style';
import './button.css';
import getProduct from '../../../services/Promise'





const Product = ({product}) => {
    const classes= useStyles();

    const [products, setProducts]= useState([])

    console.log('productos',product)

    const stock = product.stock;
    
    const [count,setCount] = useState(0);

    const handleSumCount = () => {
        if (count == stock) return;
        setCount(count + 1);
    };

    const handleSubtractCount = () => {
        if (count == 0)return;
        setCount (count - 1);
    };

    useEffect(() => {
    getProduct()
        .then(res =>{
            setProducts(res)
        })
        .catch(err => alert('error',err))
    },[])

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant= "h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h4" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className='cardactions'>
            <Typography variant="h6" color="textSecondary">Stock:<span className={classes.stock}>{product.stock}</span></Typography>  
                <div className={classes.countcontainer}>
                    <div className={classes.buttoncontainer}>
                    <button onClick={handleSumCount} className='button'>+</button>
                    <h1 className={count > 0 ? "positive" : "negative"}>{count}</h1>
                    <button onClick={handleSubtractCount} className='button'>-</button>
                    </div>
                </div>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
