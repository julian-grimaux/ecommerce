import React, { Fragment, useState } from 'react'
import app from '../../services/getFirebase'
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import { useCartContext } from '../../CartContext/CartContext'

const Form = ({ name, ...props}) => {

    const { cart, total, clearCart } = useCartContext()

    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()

        let order = {}

        order.date = new Date();
        order.buyer = formData
        order.total = total;

        order.items = cart.map(cartItems => {
            const id = cartItems.item.id;
            const name = cartItems.item.name;
            const price = cartItems.item.price * cartItems.quantity;

            return { id, name, price }
        })

        const db = getFirestore(app)
        const orderCollection = collection(db,'orders')

        if (formData.email === formData.emailConf) {

            orderCollection.add(order)
                .then(resp => Swal.fire(
                    '¡Compra Exitosa!',
                    "Tu número de orden es " + (resp.id),
                    'success'
                ))
                .catch(err => console.log(err))
                .finally(() => {
                    setFormData({
                        name: '',
                        tel: '',
                        email: ''
                    })
                    clearCart()
                }
                )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los mails ingresados deben coincidir',
            })
        }

    }

    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Fragment>
            <form
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
            >
                <div className="">
                    <h3 className="">Completa tus Datos:</h3>
                    <label htmlFor="name">Nombre:</label>
                    <input name="name" className="" id="name" value={formData.name} required />
                    <label htmlFor="phone">Tel.:</label>
                    <input name="phone" type="number" className="" id="phone" value={formData.tel} />
                    <label htmlFor="E-mail">Email:</label>
                    <input
                        onChange={handleOnChange}
                        type="email"
                        id="email"
                        name="email"
                        className=""
                        required
                        value={formData.email}
                    />
                    <label htmlFor="E-mail" required>
                        Confirmar Email:
                    </label>
                    <input
                        type="email"
                        onChange={handleOnChange}
                        id="emailConf"
                        name="emailConf"
                        value={formData.emailConf}
                        required
                        className={
                            formData.email === formData.emailConf
                                ? "asd"
                                : "asd"
                        }
                    />
                    {formData.email === formData.emailConf ? (
                        <button className="">
                            Terminar Compra
                        </button>
                    ) : (
                        <div className="">
                            Terminar Compra
                        </div>
                    )}
                </div>
            </form>
        </Fragment>
    )
}

export default Form
