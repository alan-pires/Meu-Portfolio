import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import Weather from './pages/Weather'

function App() {

  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/pokemon/:pokemonId" component={Pokemon} />
      <Route exact path="/weather" component={Weather} />
    </Switch>
   </BrowserRouter>
  )
}


export default App;
