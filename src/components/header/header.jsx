import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../icon-cart";
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';


import "./header.scss";
import CartDropdown from "../cart-dropdown";

const Header = ({ currentUser, hiddenCart }) => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenCart ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hiddenCart: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
