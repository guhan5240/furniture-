import React from 'react'
import cart from "../assets/cart.png"
import user from "../assets/user.png"

export const NavBar = () => {
  return (
    <>
    <div className="container"> 
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="list">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><img src={user}/></li>
                
                
            </ul>
        </div>

    </div>
    </>
  )
}
