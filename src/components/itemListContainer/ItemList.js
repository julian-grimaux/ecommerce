import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Item from './item/Item'
import useStyles from './item/style'

const ItemList = ({ products }) => {

    const classes = useStyles();

    return (
        <Fragment>
            <main className={classes.main}>
                <Grid container justifyContent="center" spacing={4}>
                    {products.map(product => {
                        return (
                            <Item id={product.id} product={product}/>
                        )
                    })}
                </Grid>
            </main>
        </Fragment>
    )
}

export default ItemList
