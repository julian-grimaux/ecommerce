import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Button } from '@material-ui/core';
import './itemdetail.css'
import useStyles from '../itemListContainer/item/style'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const items = [
    {id:1, name: 'producto1', description: 'descripcion1', price:'$10',stock:'5',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
    {id:2, name: 'producto2', description: 'descripcion2', price:'$20',stock:'10',image:'https://steamuserimages-a.akamaihd.net/ugc/397834442114554521/E27ED190E13DF6BB1B52A166405963E6A725CA06/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',},
    {id:3, name: 'producto3', description: 'descripcion3', price:'$30',stock:'20',image:'https://steamuserimages-a.akamaihd.net/ugc/938331559640166570/098730A57286A2118D2D1F96D739B68D06C04D61/',},
    {id:4, name: 'producto4', description: 'descripcion4', price:'$40',stock:'25',image:'https://i.imgur.com/WvQU96p.png',},
    {id:5, name: 'producto5', description: 'descripcion5', price:'$50',stock:'30',image:'https://steamuserimages-a.akamaihd.net/ugc/548681523287989076/82B01BE571CD658FAD1139FE54929AE39AFED711/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',},
    {id:6, name: 'producto6', description: 'descripcion6', price:'$60',stock:'10',image:'https://steamuserimages-a.akamaihd.net/ugc/970978854187768464/1BB82DE31288889444085065618A504929E91627/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',},
    {id:7, name: 'producto7', description: 'descripcion7', price:'$70',stock:'5',image:'https://i.imgur.com/5Ov9kPY.jpeg',},
    {id:8, name: 'producto8', description: 'descripcion8', price:'$80',stock:'20',image:'https://i.imgur.com/6C653Oj.jpeg',},
];

const ItemDetail = (currentItem) => {
    
    const stock = null;

    const [count, setCount] = useState(0);

    const handleSumCount = () => {
        if (count == stock) return;
        setCount(count + 1);
    };

    const handleSubtractCount = () => {
        if (count == 0) return;
        setCount(count - 1);
    };

    const classes = useStyles();

    const {name} = currentItem.name
    return (
        <Fragment>
             <Card className='cardImg'>
                        <img src={('https://img.dsncdn.net/full/011/jqB/HEq.jpg')} alt="" className='imgDetail' />
                    </Card>
                    <CardMedia>
                        <Typography variant='h3'>{name}</Typography>
                        <Typography variant='h5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia at voluptatibus ad, laudantium aperiam vitae veniam. Magnam hic rem doloribus enim ipsam. Sit, ex delectus? Qui obcaecati perferendis vero ipsa?</Typography>
                        <Typography variant ='h6'>20U$</Typography>
                        <CardActions disableSpacing className='cardactions'>
                            <Typography variant="h6" color="textSecondary"><span>stock:</span></Typography>
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
                    </CardMedia>
        </Fragment>
    )
}

export default ItemDetail
