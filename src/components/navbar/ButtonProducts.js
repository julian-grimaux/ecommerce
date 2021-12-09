import React, {useState,Fragment} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const ButtonProducts = () => {

    const [dropdown,setDropdown] = useState(false);

    const showdropdown= () =>{
        setDropdown(!dropdown);
    }

    return (
        <Fragment>
            <div className="dropdown-container" onMouseUp={showdropdown}>
                <Link to="/products"><span>Productos</span></Link>
                    <ul>
                        <Link to="/category/rifles"><li>Rifles</li></Link>
                        <Link to="/category/pistols"><li>Pistolas</li></Link>
                        <Link to="/category/smg"><li>SMG</li></Link>
                    </ul>
            </div>
        </Fragment>
    )
}

export default ButtonProducts
