import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
//sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const MySwal = withReactContent(Swal);

  const handleclick = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado al Carrito",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      addItem(item);
    });
  };

  return (
    <div>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <hr />
          <span className="price">S/.{price.toFixed(2)}</span>
        </div>

        <CustomButton onClick={handleclick} inverted>
          Add to cart
        </CustomButton>
      </div>
      <hr />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
