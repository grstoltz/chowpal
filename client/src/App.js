import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import ChowNav from "./components/ChowNav/ChowNav";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ChowNav />
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route exact path="home" component={Main} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
