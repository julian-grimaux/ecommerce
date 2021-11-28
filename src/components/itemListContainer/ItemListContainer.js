// import React, {useState,useEffect}  from 'react';
// import {Grid} from '@material-ui/core';
// import Item from './item/Item';
// import useStyles from './item/style';
// import GetProducts from '../../services/Promise' 


// const ItemListContainer = () => {
//     const classes= useStyles();

//     const [items, setItems] = useState([])
    
//     useEffect(() => {
//      GetProducts
//         .then(res => {
//          setItems(res)
//      })
//      .catch(err => alert('Error', err))
//     }, [])

//     return(
//     <main className={classes.main}>
//         <Grid container justifyContent="center" spacing ={4}>
//             {items.map((item)=>(
//                 <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
//                      <Card className={classes.root}>
//             <CardMedia className={classes.media} image={item.image} title={item.name}/>
//             <CardContent>
//                     <div className={classes.CardContent}>
//                         <Typography variant= "h5" gutterBottom>
//                             {item.name}
//                         </Typography>
//                         <Typography variant="h5">
//                             {item.price}
//                         </Typography>
//                     </div>
//                     <Typography variant="h4" color="textSecondary">{item.description}</Typography>
//                     <Button><Link to={`/item/${item.id}`} onClick={() => setCurrentItem(item)}>Detail</Link></Button>
//             </CardContent>
//         </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     </main>
//     );
// }   

// export default ItemListContainer;
