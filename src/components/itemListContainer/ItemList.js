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
                    {products.map((i) => (
                        <Item
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            price={i.price}
                            image={i.image}
                            stock={i.stock}
                            description={i.description}
                            type={i.type}
                        />
                    ))}
                </Grid>
            </main>
        </Fragment>
    )
}

export default ItemList
