import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Items from "./pages/Items";
import MaterialNav from "./components/MaterialNav/MaterialNav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MaterialNav />
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route path="/home" component={Main} />
            <Route path="/items" component={Items} />
          </Wrapper>
          <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
