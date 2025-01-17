import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dorpdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/log.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        <h2>INICIO</h2>
      </Link>
      <Link className="option" to="/shop">
        <h2>TIENDA</h2>
      </Link>
      <Link className="option" to="/contact">
        <h2>CONTACTO</h2>
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          <h2>CERRAR SESION</h2>
        </div>
      ) : (
        <div></div>
        // <Link className="option" to="/login">
        //   <h2>INGRESAR</h2>
        // </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
