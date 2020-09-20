import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/pokemon/:pokemonId" component={Pokemon} />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
   </BrowserRouter>
  )
}


export default App;
