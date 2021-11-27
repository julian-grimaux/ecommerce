import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardMedia, CardContent,CardActions,Typography,IconButton,Button} from '@material-ui/core';
import useStyles from './style';
import './item.css';


const Item = ({item, setCurrentItem}) => {
    const classes= useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image} title={item.name}/>
            <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant= "h5" gutterBottom>
                            {item.name}
                        </Typography>
                        <Typography variant="h5">
                            {item.price}
                        </Typography>
                    </div>
                    <Typography variant="h4" color="textSecondary">{item.description}</Typography>
                    <Button><Link to={`/item/${item.id}`} onClick={() => setCurrentItem(item)}>Detalles</Link></Button>
            </CardContent>
        </Card>
    )
}

export default Item
