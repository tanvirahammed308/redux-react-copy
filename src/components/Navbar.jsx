import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='logo'><span className='logo'>redux-react</span>
        </Link>
        
        <div className='nav-sub'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/cart'>Cart</Link>
            <span className='cart-count'>Cart-Items : 0</span>
        </div>


    </div>
  )
}

export default Navbar