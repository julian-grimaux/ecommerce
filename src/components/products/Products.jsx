import React  from 'react';
import {Grid} from '@material-ui/core';
import Product from './product/Product';
import useStyles from './product/style';



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


const Products = () => {
    const classes= useStyles();
    
    return(
    <main className={classes.main}>
        <Grid container justify="center" spacing ={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}   

export default Products;
