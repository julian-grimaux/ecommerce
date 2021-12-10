import React, { Fragment } from 'react'
import './footer.css'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <h3>© Copyright 2021 - Julian Grimaux</h3>
                <a href='https://github.com/julian-grimaux' target='_blank'><img src='https://imgur.com/ePwsXc2.png' className='imgGit'/></a>
            </div>
        </Fragment>
    )
}

export default Footer
