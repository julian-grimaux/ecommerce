import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import { Typography } from '@material-ui/core';

const Home = () => {
    
    return (
        <Fragment>
            <section className="fondo">
                <div className="Container">
                    <div className="txtContain">
                    <Typography variant="h1" className="title">Cyrex Collection</Typography>
                    <Link to='/products' className='linkShop'><button className='buttonShop'>Ir a la tienda</button></Link>
                    </div>
                    <div className="imgContainer">
                    <img src='https://imgur.com/OgQ18uR.png' className="imgHome"></img>   
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
