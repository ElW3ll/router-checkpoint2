import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import { listProducts } from "./Components/Data";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          render={() => <Products listProducts={listProducts} />}
        />
        <Route path="/about" component={About} />
        <Route
          exact
          path="/product/:id"
          render={(defaultProps) => (
            <Product {...defaultProps} listProducts={listProducts} />
          )}
        />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
