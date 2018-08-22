import React, { Component } from "react";
import "./App.css";
import { inventory } from "./inventory";
import Cart from "./containers/Cart";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Cart />
        </div>
    );
  }
}

export default App;
