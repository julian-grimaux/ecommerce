import React, {Fragment} from 'react'
import { useCartContext } from '../../CartContext/CartContext'
import { ButtonPrimary,ButtonClearCart } from '../buttons/Buttons'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemCart from '../itemCart/ItemCart'
import "./Cart.css"

const Cart = () => {
    const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
    const total = totalPrice();
  
    return (
      <div className="">
        {cartWidgetItems() > 0 ? (
          cart.map((i) => (
            <>
              <ItemCart
                key={i.item.Id}
                name={i.item.Name}
                price={i.item.Price}
                image={i.item.Image}
                id={i.item.Id}
                quantity={i.quantity}
              />
            </>
          ))
        ) : (
          <>
            <p className="noItemsCart">No hay Items en el Carrito</p>
            <ButtonPrimary to="/products" text="Ir a la tienda"/>
          </>
        )}
        {cartWidgetItems() > 0 && (
          <>
          <Fragment>
          <Box sx={{
        display: 'flex',
        justifyContent: 'start',
        ml: 6.7,
      }}>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: '20%',
            height: '10%',
          },
        }}
      >
        <Paper elevation={24} className="totalContainer">
            <div className="flexTotal">
              <p className="txtTotal">Total</p>
              <hr className="hrCart" />
              <p className="txtTotalNum">${total.toFixed(2)}</p>
            </div>
            </Paper>
      </Box>
            <div className="flexButtons">
              <ButtonPrimary to="/products" text="seguir comprando"/>
              <ButtonClearCart clearCart={clearCart} />
            </div>
            </Fragment>
          </>
        )}
      </div>
    );
  };
  
  export default Cart;
  
