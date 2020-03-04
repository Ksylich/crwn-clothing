import React from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../header";
import HomePage from "../../pages/home-page";
import ShopPage from "../../pages/shop-page";
import CheckoutPage  from '../../pages/checkout-page';
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { setCurrentUser } from "../../redux/user/user-action";
import { selectCurrentUser } from "../../redux/user/user-selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  redirectUser = () => {
    const { currentUser } = this.props;
    console.log("user", currentUser);
    return currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />;
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={this.redirectUser} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
