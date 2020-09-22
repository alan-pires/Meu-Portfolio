import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import PokeCard from '../components/PokeCard'
import { Grid, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import Pagination from '../components/Pagination'
import getPokemons from '../functions/getPokemons'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme =>({
    PokedexContainer: {
        backgroundColor: "#DDD",
        paddingTop: "100px",
    },
    cardsContainer: {
        marginBottom: "100px"
    },
    searchContainer:{
        marginBottom:"30px",
        display:"flex",
        backgroundColor: fade(theme.palette.common.white, 0.60),
        padding:"5px 10px 5px 10px"
    },
    searchIcon:{
        alignSelf:"flex-end",
        marginBottom:"5px"
    },
    searchText:{
        width: "200px",
        margin: "5px"
    }

}))

function Pokedex() {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(undefined);
    const [filter, setFilter] = useState("")

    useEffect(() => {
        getPokemons(100, 0, 1, setPokemonData)
    }, [])

    const getPokemonCard = (pokemonId) => {
        const { id, name, sprite } = pokemonData[pokemonId];
        
        return (
            <Grid item xs={12} sm={6} md={3} key={pokemonId} >
                <PokeCard id={id} nome={name} imagem={sprite} />
            </Grid>
        )
    }

    const handleSearchChange = (e) =>{
        setFilter(e.target.value);
    }


    return (
        <>
            <Header />

            <Grid container xs={12} direction="column" alignItems="center" className={classes.PokedexContainer}>
                <Grid item container xs={10}>
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon}/>
                        <TextField 
                        className={classes.searchText}
                        label="Pokemon"
                        variant="standard"
                        color="secondary"
                        onChange={handleSearchChange}
                        />
                    </div>
                </Grid>
                {pokemonData !== undefined ? (
                    <>
                        <Grid item container xs={10} spacing={2} className={classes.cardsContainer}>
                            <Pagination setPokemon={setPokemonData} />
                            {Object.keys(pokemonData).map(pokemonId =>
                                pokemonData[pokemonId].name.includes(filter) &&
                                getPokemonCard(pokemonId)
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
