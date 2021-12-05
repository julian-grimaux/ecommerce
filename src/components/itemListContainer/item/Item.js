import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './style';
import './item.css';


const Item = ({ id, image, stock, name, price, description, type,key}) => {
    const classes = useStyles();

    return (
        <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Card className='Card'>
                <CardMedia className={classes.media} image={image} title={name} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h4" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h6">
                            US$ {price}
                        </Typography>
                    </div>
                    <Button variant="contained" color="secondary" className='buttonDetail'><Link to={`/item/${id}`}>Detalle</Link></Button>
                </CardContent>
            </Card>
        </Grid>)
}

export default Item
