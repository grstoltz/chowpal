import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Item from "./pages/Item";
import MaterialNav from "./components/ChowNav/MaterialNav";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MaterialNav />
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/items" component={Item} />
          </Wrapper>
          <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
