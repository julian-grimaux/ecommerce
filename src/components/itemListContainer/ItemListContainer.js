import React, {useState,useEffect, Fragment}  from 'react';
import {Grid} from '@material-ui/core';
import Item from './item/Item';
import { Link } from 'react-router-dom';
import useStyles from './item/style';
import GetProducts from '../../services/Promise' 


const ItemListContainer = (itemList,setCurrentItem) => {
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
    <Fragment>
    <main className={classes.main}>
        <Grid container justifyContent="center" spacing ={4}>
        {
            itemList.map((item)=>{
                const {value} = item.id
            return(
                <Grid item key={value} xs={12} sm={6} md={4} lg={3}>
                    <Link to={`/item/${value}`} onClick={() => setCurrentItem(item)}>
                    <Item item={item}/>
                    </Link>
                </Grid>)
            }
            )
        }
        </Grid>
    </main>
    </Fragment>
    );
}   

export default ItemListContainer;
