import React from 'react'
import {Grid} from '@material-ui/core'
import getPokemons from '../functions/getPokemons'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    pagination:{
        margin:"20px auto"
    }
})

function Pagination({setPokemon}) {       
    const classes = useStyles()

    return (
      <Grid container className={classes.pagination}>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 0, 1, setPokemon)}>1</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 100, 101, setPokemon)}>2</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 200, 201, setPokemon)}>3</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 300, 301, setPokemon)}>4</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 400, 401, setPokemon)}>5</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 500, 501, setPokemon)}>6</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 600, 601, setPokemon)}>7</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(100, 700, 701, setPokemon)}>8</Link>
          </Grid>
          <Grid item xs={1}>
              <Link to='/pokedex' onClick={()=>getPokemons(7, 800, 801, setPokemon)}>9</Link>
          </Grid>
      </Grid>
    )
}

export default Pagination
