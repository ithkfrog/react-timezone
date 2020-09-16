import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import SinglePage from "./components/singlePage/singlePage";
import MultiPages from "./components/multiPages/multiPages";
import DetailPage from "./components/multiPages/detailPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/multipages/:zoneName" component={DetailPage} />
            <Route path="/multipages" component={MultiPages} />
            <Route path="/" component={SinglePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
