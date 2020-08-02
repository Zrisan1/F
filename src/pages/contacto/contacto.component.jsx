import React from "react";
import "./contacto.component.sass";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const ContactoPage = () => {
  return (
    <div className="container">
      <center>
        <h1>Contactanos</h1>
      </center>
      <div className="row">
        <div className="col-6">
          <h3>Contactate con el asesor/a de la tienda por Messenger</h3>
          <a href="m.me/107067204436025" target="_blank">
            <div className="caja1">
              <FacebookOutlined
                style={{
                  fontSize: 50,
                  backgroundColor: "#3b5998",
                  color: "#fff",
                }}
              />
            </div>
          </a>
        </div>
        <div className="col-6">
          <h3>Contactate con el asesor/a de la tienda por Instagram</h3>
          <a href="https://www.instagram.com/zoetstore/" target="_blank">
            <div className="caja1">
              <InstagramOutlined className="instaicon" />
            </div>
          </a>
        </div>
        <div className="col-12">
          <h3>Contactate con el asesor/a de la tienda por WhatsApp</h3>
          <a href="https://wa.link/j85ga4" target="_blank">
            <div className="caja1">
              <WhatsAppOutlined
                style={{
                  fontSize: 50,
                  backgroundColor: "#00bb2d",
                  color: "#fff",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
