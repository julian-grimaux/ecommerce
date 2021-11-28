import React from 'react'
import { Typography,Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Swal from 'sweetalert2'

const Alert = () => {
    Swal.fire({
        position: 'bottom-end',
        title:'Tu producto se añadió al carrito',
        width:'20%',
        icon:'success',
        showConfirmButton:false,
        timerProgressBar:true,
        timer:2000,
        toast:true
      })
}

export const AddToCart = ({handleOnAdd}) => {
    return(
        <Button onClick={()=>{
            handleOnAdd()
            Alert()
        }}>
            <Typography>Add to Cart</Typography>
                <AddShoppingCart />
        </Button>
    )
}


