import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className="container">

        <div className="header__text">
            <h1>Building digital <br /> products, brands <br /> & experience</h1>
            <p>Digital Agency Is Your Online Team Mangement Tool That <br /> Easy And Prompt
            </p>
            <button>Contact Us</button>
        </div>

        <div className="header__img">
            <img src="./img1.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
