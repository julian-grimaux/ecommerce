import React, { useState, Fragment } from 'react'
import { useCartContext } from '../../CartContext/CartContext'
import { ButtonPrimary, ButtonClearCart } from '../buttons/Buttons'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemCart from '../itemCart/ItemCart'
import "./Cart.css"
import app from "../../services/getFirebase"
import Swal from "sweetalert2"
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  doc,
} from "@firebase/firestore";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
  const total = totalPrice();

  const [buttonState, setButtonState] = useState(true);
  const [formInfo, setFormInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  function checkOut() {
    setButtonState(false);
    const order = {
      buyer: formInfo,
      items: cart,
      total: total,
    };
    const db = getFirestore(app);

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((data) => {
      clearCart(data);
      Swal.fire({
        title: "Compra realizada con éxito",
        text: `ID de la compra es: ${data.id}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    });
    const batch = writeBatch(db);
    cart.forEach((item) => {
      console.log("Iteracion del forEach", item);
      const itemRef = doc(db, "items", item.item.id);
      batch.update(itemRef, { stock: item.item.stock - item.quantity });
    });

    batch.commit();
  }

  return (
    <div className="fondoRed">
      {cartWidgetItems() > 0 ? (
        cart.map((i) => (
          <>
            <ItemCart
              key={i.item.id}
              name={i.item.name}
              price={i.item.price}
              image={i.item.image}
              id={i.item.id}
              quantity={i.quantity}
            />
          </>
        ))
      ) : (
        <div className='noItemsContainer'>
          <p className="noItemsCart">No hay Items en el Carrito</p>
          <ButtonPrimary to="/products" text="Ir a la tienda" />
        </div>
      )}
      {cartWidgetItems() > 0 && (
        <>
          <Fragment>
            <Box
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
              <Paper elevation={24} className="totalContainer">
                <div className="flexTotal">
                  <p className="txtTotal">Total</p>
                  <hr className="hrCart" />
                  <p className="txtTotalNum">${total.toFixed(2)}</p>
                </div>
              </Paper>
            </Box>
            <div className="flexButtons">
              <ButtonPrimary to="/products" text="Seguir comprando" />
              <ButtonClearCart clearCart={clearCart} />
            </div>
            <div>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  '& > :not(style)': {
                    m: 2,
                    width: '30em',
                    height: '10%',
                  },
                }}
              >
                <Paper elevation={24}>
                  <form className="formContainer">
                    <h4>Ingrese sus datos para efectuar la Compra</h4>
                    <label className='titlesForm'>
                      Nombre Completo:
                      <input
                        type="text"
                        name="name"
                        value={formInfo.name}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                    <label className='titlesForm'>
                      Número de Teléfono:
                      <input
                        type="text"
                        name="phone"
                        value={formInfo.phone}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                    <label className='titlesForm'>
                      E-mail:
                      <input
                        type="text"
                        name="email"
                        value={formInfo.email}
                        onChange={handleChange}
                        className='controls'
                      />
                    </label>
                    {buttonState ? (
                      <button
                        className="botonFinalizar"
                        disabled={
                          !(formInfo.name && formInfo.phone && formInfo.email)
                        }
                        type="button"
                        onClick={checkOut}
                      >
                        FINALIZAR COMPRA
                      </button>
                    ) : (
                      <div className="loading"></div>
                    )}
                  </form>
                </Paper>
              </Box>
            </div>
          </Fragment>
        </>
      )}
    </div>
  )
};

export default Cart;

