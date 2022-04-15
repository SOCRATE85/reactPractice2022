import React, { Component } from "react";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Directory from "./DirectoryComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
