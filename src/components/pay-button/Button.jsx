import React, { useState } from "react";
import "./button.styles.scss";
import { PEDIDOS } from "../../firebase/firebase.utils";
import useFirestore from "../../shared/hooks/useFireStore";
//sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Button = ({ isGoogleSignIn, inverted, price, carItem }) => {
  const { addToFirestore } = useFirestore(PEDIDOS);
  const MySwal = withReactContent(Swal);
  const initialState = {
    nombre: "",
    address: "",
    numero: "",
    total: "",
  };

  const [fields, setFields] = useState(initialState);

  const initialProd = {};
  const [prod, setProd] = useState(initialProd);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProd(carItem);

    setFields({
      ...fields,
      [name]: value,
      total: JSON.stringify(price),
      data: prod,
    });
  };

  const handlePayment = (e) => {
    let timerInterval;
    e.preventDefault();
    MySwal.fire({
      title: "¿Deseas Realizar el pedido?",
      text: "Esta operacion no se revertira",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Realizar pedido!",
    }).then((result) => {
      if (result.value) {
        //addToFirestore(fields);
        //cargando alerta
        MySwal.fire({
          title: "Generando Pedido",
          html: "Se esta generando su orden, espere porfavor",
          timer: 3000,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              const content = Swal.getContent();
              if (content) {
                const b = content.querySelector("b");
                if (b) {
                  b.textContent = Swal.getTimerLeft();
                }
              }
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (!addToFirestore(fields)) {
            console.log(fields);
            Swal.fire(
              "Exito!",
              "Su pedido ha sido generado exitosamente",
              "success"
            );
          } else {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "Lo siento, tu pedio no ha sido generado",
              footer: "<a href>Why do I have this issue?</a>",
            });
          }
        });
      }
    });

    //localStorage.clear();
    //window.location.href = "/";
  };

  return (
    <div className="container myborde">
      <center>
        <h3 className="title">Formulario de Pedido</h3>
      </center>
      <form onSubmit={handlePayment}>
        <div className="form-group borde">
          <label>Nombre y Apellidos</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Y Apellidos"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group borde">
          <label>Direccion</label>
          <input
            name="address"
            type="text"
            placeholder="Direccion"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group borde">
          <label>Nro de Celular</label>
          <input
            name="numero"
            type="text"
            placeholder="Telefono"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className={`${inverted ? "inverted" : ""} ${
              isGoogleSignIn ? "google-sign-in" : ""
            } custom-button`}
          >
            <span>Checkout</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Button;
