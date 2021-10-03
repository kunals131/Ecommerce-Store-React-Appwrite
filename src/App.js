import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up.compoenent";
import {currentSession} from "./appwrite/appwrite.utils";
import { logoutUser } from "./appwrite/appwrite.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    currentSession().then(
      (response) => {
        this.setState(
          {
            currentUser: response,
          },
          () => console.log(this.state)
        );
      },
      (error) => {
        this.setState(
          {
            currentUser: "null",
          },
          () => console.log(this.state)
        );
      }
    );
  }

  componentWillUnmount() {
    logoutUser().then(response=>{
      console.log('loggedout', response)
    })

  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact patht="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
