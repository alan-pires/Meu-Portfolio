import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'

const useStyles = makeStyles({
    pokemonContainer: {
        width: "100%",
        padding: "100px 0 30px 10px",
    },
    conteudo: {
        margin: "20px auto",
    }
})

const firstLetterUpper = name => name.charAt(0).toUpperCase() + name.slice(1);


function Pokemon(props) {
    const classes = useStyles();
    const [pokeData, setPokeData] = useState(undefined);
    const { pokemonId } = props.match.params;
    const id = pokemonId.slice(1);
    const imagem = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                const { data } = response
                console.log(data)
                setPokeData(data)
            })
        // .catch((error)=> console.log("Erro: "+ error))
    }, [])

    return (
        <>
        <Header />
        <Grid container className={classes.pokemonContainer} xs={12} >
            <Grid item container xs={12} alignItems="center" direction="column">
                <img src={imagem} style={{ width: "300px", height: "300px" }} />
                <Typography variant="h4">
                    {pokeData != undefined ? `#${id} - ${firstLetterUpper(pokeData.name)} `  : null}
                </Typography>
            </Grid>
            {pokeData != undefined ? (
                <>
                    <Grid container xs={12} sm={2}> 
                    </Grid>
                    <Grid item container xs={12} sm={4} direction="column" className={classes.conteudo}>

                        <>
                            <Typography variant="h6" >
                                Tipo: {pokeData.types.map((typeInfo) => {
                                const { type } = typeInfo;
                                const { name } = type;
                                return <Typography key={name} variant="body2"> {`${name}`}</Typography>;
                            }
                            )}
                            </Typography>
                            <Typography variant="h6">
                                Habilidades: {pokeData.abilities.map((habilidade) => {
                                const { ability } = habilidade;
                                const { name } = ability;
                                return <Typography key={name} variant="body2">{`${name}`} </Typography>
                            })}
                            </Typography>
                            <Typography variant="h6">
                                Altura:
                        </Typography>
                            <Typography variant="body2">
                                {`${parseFloat(pokeData.height) / 10} metros`}
                            </Typography>
                            <Typography variant="h6">
                                Peso:
                        </Typography>
                            <Typography variant="body2">
                                {`${parseFloat(pokeData.weight) / 10} kilos`}
                            </Typography>
                        </>


                    </Grid>

                    <Grid item container xs={12} sm={4} direction="column" className={classes.conteudo}>
                        <Typography variant="h6">
                            Stats: {pokeData.stats.map((item) => {
                            const { stat } = item
                            const {base_stat} = item
                            const { name } = stat

                            return <Typography key={name}>{`${name}: ${base_stat}`} </Typography>
                        })}
                        </Typography>


                    </Grid>
                </>
            ) : null}
        </Grid>
    </>
    )
}

export default Pokemon
