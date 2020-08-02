import React from "react";

const Barra = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <center>
            <span role="img" aria-label="label">
              <a
                href="https://www.facebook.com/ZoetStore-107067204436025"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="fab fa-facebook-square"
                  style={{ fontSize: "38px", marginRight: "40px" }}
                ></i>
              </a>

              <a href="https://wa.link/j85ga4" target="_blank" rel="noopener">
                <i
                  className="fab fa-whatsapp-square"
                  style={{ fontSize: "38px", marginRight: "40px" }}
                ></i>
              </a>

              <a
                href="https://www.instagram.com/zoetstore/"
                target="_blank"
                rel="noopener"
              >
                <i
                  className="fab fa-instagram-square"
                  style={{ fontSize: "38px" }}
                ></i>
              </a>
            </span>
          </center>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Barra;
