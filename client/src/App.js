import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Items from "./pages/Items";
import Detail from "./pages/Detail";
import Upload from "./pages/Upload";
import NoMatch from "./pages/NoMatch";
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
            <Route exact path="/home" component={Main} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Detail} />
            {/* <Route component={NoMatch} /> */}
          </Wrapper>
          <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
