import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PokeCard from '../components/PokeCard'
import { Grid, Typography, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '../components/Pagination'
import getPokemons from '../functions/getPokemons'

const useStyles = makeStyles({
    PokedexContainer:{
        backgroundColor:"#DDD",
        paddingTop:"100px"
    },
    cardsContainer:{
        marginBottom:"100px"
    }   
    
})

function Pokedex() {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});
        

    useEffect(() => {
       getPokemons(100, 0, 1, setPokemonData)
    }, [])

    const getPokemonCard = (pokemonId) => {
        const {id, name, sprite} = pokemonData[pokemonId];
        return (
            <Grid item xs={12} sm={6} md={3} key={pokemonId} >
                <PokeCard id={id} nome={name} imagem={sprite} />
            </Grid>
        )
    }
    

    return (
        <>
            <Header />
            <Grid container xs={12} direction="column" alignItems="center" className={classes.PokedexContainer}>
                <Grid item container xs={10}>
                    <Typography variant="h5">
                        Pokémon List:
                    </Typography>
                </Grid>
                {pokemonData ? (
                    <>
                    <Grid item container xs={10} spacing={2} className={classes.cardsContainer}>
                    <Pagination setPokemon={setPokemonData}  />
                        {Object.keys(pokemonData).map(
                            pokemonId => getPokemonCard(pokemonId)
                        )}
                        
                    </Grid>
                   
                </>
                ) : (
                        <CircularProgress />
                    )}
            </Grid>
        </>
    )
}

export default Pokedex
