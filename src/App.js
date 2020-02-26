import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
