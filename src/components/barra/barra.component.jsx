import React from "react";
import { Link } from "react-router-dom";

const Barra = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <center>
            <span role="img" aria-label="label">
              <Link to={""}>
                <i
                  className="fab fa-facebook-square"
                  style={{ fontSize: "38px", marginRight: "40px" }}
                ></i>
              </Link>
              <Link to={""}>
                <i
                  className="fab fa-whatsapp-square"
                  style={{ fontSize: "38px", marginRight: "40px" }}
                ></i>
              </Link>
              <Link to={""}>
                <i
                  className="fab fa-instagram-square"
                  style={{ fontSize: "38px" }}
                ></i>
              </Link>
            </span>
          </center>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Barra;
