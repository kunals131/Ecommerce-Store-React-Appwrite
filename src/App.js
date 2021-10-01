import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.compoenent';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path = '/' component = {Homepage} />
      <Route exact path = '/shop' component = {ShopPage} />
      <Route exact patht = '/signin' component= {SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
