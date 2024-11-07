import React from "react";
import "./SectionOwer.css";

const SectionOwer = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h3>Digital Agency</h3>
          <p>Building digital products,  <br />
          brands & experience</p>
        </div>

        <div className="card">
          <h3>Resources</h3>
          <p>Guides</p>
          <p>Blog</p>
          <p>Cuistomer Stories</p>
          <p>Glossery</p>
        </div>

        <div className="card">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Partners</p>
          <p>Contact Us</p>
        </div>

        <div className="card">
          <h3>Social Media</h3>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <p className="c">© Matheus. Todos os direitos reservados</p>
    </>
  );
};

export default SectionOwer;
