import React from 'react'
import { Typography,Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import '../Cart/Cart.css'


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

export const ButtonPrimary = ({text}) => (
    <Link
      to="/products"
    >
      <Button className="buttonPrimary">
      {text}
      </Button>
    </Link>
  );
  
  export const ButtonClearCart = ({clearCart}) => (
    <Button
      onClick={clearCart}
      className="buttonClearCart"
    > 
    vaciar carrito
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
        fill="#000"
      />
    </svg>
    </Button>
  );

  export const RemoveIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="#CC5F58"
      />
    </svg>
  );

  export const BackHome = () => {
    return (
      <Link
        to="/products"
        className=""
      >
        <Button>
        <span className="">Seguir Comprando</span>
        </Button>     
      </Link>
    );
  };

  export const FinishButton = () => {
    return (
      <Link
        to="/cart"
        className=""
      >
        <Button>
        <span className="">Terminar compra</span>
        </Button>
      </Link>
    );
  };



