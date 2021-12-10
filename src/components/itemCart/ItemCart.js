import React, { Fragment } from 'react'
import { useCartContext } from '../../CartContext/CartContext'
import { RemoveIcon } from "../buttons/Buttons"
import './itemCart.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const ItemCart = ({ name, price, image, id, quantity }) => {
  const { removeItem } = useCartContext();
  const handleRemove = () => removeItem(id);

  return (
    <Fragment>
      <Box
        className='boxItemCart'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: '30em',
            height: '10%',
          },
        }}
      >
        <Paper elevation={24} className="flexContainer">
        <Link to={`/item/${id}`}>
          <div className='flexItems'>
            <img src={image} alt="" className='imgCart' />
            <div className='txtContainer'>
              <p className="txtName">{name}</p>
              <p className="txtPrice">${price}</p>
            </div>
          </div>
          </Link>
          <div className="flexQuantity">
            <p className="txtQuantity">Cantidad: {quantity}</p>
            <button onClick={handleRemove} className="buttonRemove">
              <RemoveIcon/>
            </button>
          </div>
        </Paper>
      </Box>
    </Fragment>

  );
};
export default ItemCart;
