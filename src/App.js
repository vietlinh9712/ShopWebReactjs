import React from 'react';
import Home from './Page/Home'
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CartPage from "./Page/CartPage";
import Checkout from "./Page/Checkout";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Cart" component={CartPage} />
                <Route exact path="/Cart/Checkout" component={Checkout} />
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
