import React, { Fragment } from 'react'
import { BarLoader } from 'react-spinners'

const divStyle = {display: 'flex', justifyContent:'center', alignItems:'center', height:'60vh'}

const AnimationLoading = () => {
    return (
        <Fragment>
            <div style={divStyle}>
            <BarLoader size={48} loading color='white' width={200}/>
            </div>
        </Fragment>
    )
}

export default AnimationLoading
