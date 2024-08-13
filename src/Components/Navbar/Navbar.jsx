import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo  from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png' 
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Contexts/ShopContext'

export default function Navbar() {
  const {getTotalCart} =useContext(ShopContext)
  const [menu, setMenu]=useState("shop")
  return (
    <div className='Navbar'> 
    <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopees</p>
    </div>

    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("menu")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="menu"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='women'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li> 
    </ul>
      
      <div className="nav-login-cart">
        <Link to='login'><button>Login</button></Link>
        <Link to='cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCart()}</div>
      </div>

    </div>
  )
}
