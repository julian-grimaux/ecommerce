import React, { Fragment } from 'react';
import './itemdetail.css'
import { Card, CardMedia, CardActions, Typography,} from '@material-ui/core';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import {useCartContext} from "../../CartContext/CartContext"


const ItemDetail = ({item}) => {

    const {setCart,addItem} = useCartContext();

    const onAdd = (count) => {
        setCart(count);
        addItem(item, count);
      };

    return (
        <Fragment>
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            ml: 6.7,
        }}>
            <Button className="buttonBackProducts"><Link to="/products">Productos</Link></Button>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& > :not(style)': {
                    m: 5,
                    width: 1300,
                    height: 500,
                },
            }}
        >
            <Paper elevation={24} className='Grid' key={item.id}>
            <Card className='cardImg'>
                    <img src={item.image} alt="" className='imgDetail' />
                </Card>
                <CardMedia>
                    <Typography variant='h3'>{item.name}</Typography>
                    <Typography variant='h5'>{item.description}</Typography>
                    <Typography variant ='h6'>US$ {item.price}</Typography>
                    <CardActions disableSpacing className='cardactions'>
                        <Typography variant="h6" color="textSecondary"><span>stock:{item.stock}</span></Typography>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                    </CardActions>
                </CardMedia>
            </Paper>
        </Box>
    </Fragment>
    )
}

export default ItemDetail
