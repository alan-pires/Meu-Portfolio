import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import SobreMimImagem from '../images/eu2.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{       
        backgroundColor:"#222",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    sobreMimTexto:{
        height:"350px",
        display:"flex",
        justifyContent:"flex-start",
                
    } 
    
})

function AboutMe() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} >
            <Grid item xs={12} md={5} className={classes.root}>
                <img src={SobreMimImagem} style={{borderRadius:"50%", width:"300px", height:"300px", padding:"20px 0"}}/>
            </Grid>
            <Grid item xs={12} md={7} className={classes.sobreMim}>
                <Typography color="primary">
                    Bla bla bla
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutMe
