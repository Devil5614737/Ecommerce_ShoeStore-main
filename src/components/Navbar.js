import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';
import {Context} from '../Context';
import {useContext} from 'react';


function Navbar() {
const {cartItems}=useContext(Context)

const logout=()=>{
    localStorage.removeItem('token')
}

    return (
        <div className="navbar">
            <div class="navbar-container">
                <Link to='/'>
                    <p className="logo">Sneak<span>X</span></p>
                </Link>
                <div className="links">
               
                    <Link to='/'><a href="#!" className="link">Products</a></Link>
                    <Link to='/cart'><a href="#!" className="link" id='link'>Cart
                    {localStorage.getItem('token') &&cartItems.length>0 &&<p className="cart-count">{cartItems.length}</p>}
                
                    </a></Link>
                    <Link to='/login'><a onClick={logout} href="#!" className="link">{localStorage.getItem('token')? "SignOut" : "SignIn"}</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
