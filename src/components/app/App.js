import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';

import Header from "../header";
import HomePage from "../../pages/home-page";
import ShopPage from "../../pages/shop-page";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {setCurrentUser} from '../../redux/user/user-action';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
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
      }
      else {
       setCurrentUser({
          currentUser: userAuth
        })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header  />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
setCurrentUser
}

export default connect(null, mapDispatchToProps)(App);
