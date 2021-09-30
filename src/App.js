import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'


const HeadPhones = ()=>(
  <div>
    <h1>Headphones</h1>
    </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path = '/' component = {Homepage} />
      <Route  path = '/headphones' component = {HeadPhones} />
      </Switch>
    </div>
  );
}

export default App;
