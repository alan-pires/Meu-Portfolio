import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import Content from './Content'
import Home from './pages/Home'

function App() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
   </BrowserRouter>
  )
}


export default App;
