import React from "react";
import "./contacto.component.sass";
import img1 from "../../assets/messe.png";
import img2 from "../../assets/wats.png";
import img3 from "../../assets/rob.png";

const ContactoPage = () => {
  return (
    <div className="container">
      <center>
        <h1>Contactanos</h1>
      </center>
      <div className="row">
        <div className="col-6">
          <h3>Contacta con nuestro Bot de Messenger</h3>
          <a href="HTTPS">
            <div className="caja1">
              <img width="30%" src={img1} alt="messenger" />
              <img width="30%" src={img3} alt="rob" />
            </div>
          </a>
          <div className="texto">
            <p>Contacta con nuestro bot para obtener una sugerencia</p>
          </div>
        </div>
        <div className="col-6">
          <h3>Contacta con nuestro Bot de WhatsApp</h3>
          <a href="HTTPS">
            <div className="caja1">
              <img width="30%" src={img2} alt="whatsapp" />
              <img width="30%" src={img3} alt="rob" />
            </div>
          </a>
          <div className="texto">
            <p>Contacta con nuestro bot para obtener una sugerencia</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.273934384566!2d-77.07811366933225!3d-11.956859721914634!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1594684034498!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            title="micasa"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
