import React,{useEffect} from 'react'
import {Grid, Typography, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Header from '../components/Header'

const useStyles = makeStyles({
    weatherContainer:{
        paddingLeft:"5%",
        paddingRight:"5%"

    },
    headerInformacoes:{
        paddingTop:"100px",
    },
    informacoes:{
        marginTop:"50px",
        width:"100%",
        border:"solid 2px #555"
        
    },
    pesquisarLocal:{
      

    }

})

function Weather() {
    const classes = useStyles()

    useEffect(()=>{
        console.log("funfou")
    },[])

    return (
        <>
        <Header />
        <Grid container className={classes.weatherContainer} xs={12} direction="column">
            <Grid item container xs={12} className={classes.headerInformacoes}>
                    <Typography variant="h5">
                       Clima agora em:
                    </Typography>
                    <TextField color="secondary" className={classes.pesquisarLocal} >

                    </TextField>         
            </Grid>

            <Grid item  className={classes.informacoes} xs={12}>
                   <Typography>
                       Testando
                   </Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Weather
