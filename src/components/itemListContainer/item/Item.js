import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import useStyles from './style';
import './item.css';


const Item = ({ itemsList, setCurrentItem }) => {
    const classes = useStyles();

    return (
        <Fragment>
        <main className={classes.main}>
            <Grid container justifyContent="center" spacing={4}>
                {itemsList?.map((item) => {
                    const { name } = item.name
                    const { price } = item.price
                    const { value } = item.id
                    const { image } = item.image
                    const { description } = item.description
                    const { stock } = item.stock
                    return (
                        <Grid item key={value} xs={12} sm={6} md={4} lg={3}>
                            <Card className={classes.root}>
                                <CardMedia className={classes.media} image={image} title={name} />
                                <CardContent>
                                    <div className={classes.CardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            {name}
                                        </Typography>
                                        <Typography variant="h5">
                                            {price}
                                        </Typography>
                                    </div>
                                    <Typography variant="h4" color="textSecondary">{description}</Typography>
                                    <Button><Link to={`/item/${value}`} onClick={() => setCurrentItem(item)}>Detail</Link></Button>
                                </CardContent>
                            </Card>
                        </Grid>)
                }
                )
                }
            </Grid>
        </main>
        </Fragment>
    )
}

export default Item
