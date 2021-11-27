import React, {useState,useEffect}  from 'react';
import {Grid} from '@material-ui/core';
import Item from './item/Item';
import useStyles from './item/style';
import GetProducts from '../../services/Promise' 


const ItemListContainer = () => {
    const classes= useStyles();

    const [items, setItems] = useState([])
    
    useEffect(() => {
     GetProducts
        .then(res => {
         setItems(res)
     })
     .catch(err => alert('Error', err))
    }, [])

    return(
    <main className={classes.main}>
        <Grid container justifyContent="center" spacing ={4}>
            {items.map((item)=>(
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <Item item={item}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}   

export default ItemListContainer;
