import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import './item.css';


const Item = ({product}) => {
    const classes = useStyles();

    return (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className='Card'>
                <CardMedia className={classes.media} image={product.Image} title={product.Name} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h4" gutterBottom>
                            {product.Name}
                        </Typography>
                        <Typography variant="h6">
                            US$ {product.Price}
                        </Typography>
                    </div>
                    <Button variant="contained" color="secondary" className='buttonDetail'><Link to={`/item/${product.Id}`}>Detalle</Link></Button>
                </CardContent>
            </Card>
        </Grid>)
}

export default Item
