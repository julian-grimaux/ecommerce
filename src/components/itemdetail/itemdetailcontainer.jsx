import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Grid} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import './itemdetail.css'
import { CardMedia } from '@mui/material';
import useStyles from '../products/product/style'




const products = [
  {id:1, name: 'producto1', description: 'descripcion1', price:'$10',stock:'5',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:2, name: 'producto2', description: 'descripcion2', price:'$20',stock:'10',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:3, name: 'producto3', description: 'descripcion3', price:'$30',stock:'20',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:4, name: 'producto4', description: 'descripcion4', price:'$40',stock:'25',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:5, name: 'producto5', description: 'descripcion5', price:'$50',stock:'30',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:6, name: 'producto6', description: 'descripcion6', price:'$60',stock:'10',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:7, name: 'producto7', description: 'descripcion7', price:'$70',stock:'5',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
  {id:8, name: 'producto8', description: 'descripcion8', price:'$80',stock:'20',image:'https://img.dsncdn.net/full/011/jqB/HEq.jpg',},
];



export default function Itemdetailcontainer() {
  const classes= useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& > :not(style)': {
          m: 5,
          width: 1300,
          height: 900,
        },
      }}
    >
      <Paper elevation={24} className='Grid'>
      <Grid container justify='center' className='container'>
        {products.map((product)=>(
          <Grid item key={product.id}>
             {product.name}
            </Grid>
        ))}
      </Grid>
      
          <Grid>
             <CardMedia className={classes.media} image={products.image}></CardMedia>
            </Grid>
      
      </Paper>
    </Box>
    
  );
}
