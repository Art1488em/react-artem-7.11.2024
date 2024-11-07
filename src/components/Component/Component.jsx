import React from 'react'
import "./Component.css"

const Component = () => {
  return (
    <>
        <div className="a"> <h2>TESTIMONIALS</h2></div>
       
       <div className="b">
       <h1>Read What Other <br /> have to Say</h1>
       </div>
       

    <div className="container">
        
        <div className="div">
            <div className="card">
              <img src="./morda1.png" alt="" />      
              <h2>Andrew Rathore</h2>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
            </div>

            <div className="card">
              <img src="./morda2.png" alt="" />      
              <h2>Vera Duncan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
            </div>

            <div className="card">
              <img src="./morda3.png" alt="" />      
              <h2>Mark Smith</h2>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc ullamcorper <br/> scelerisque mi, in malesuada felis <br/> malesuada vel. </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Component
