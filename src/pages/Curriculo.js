import React from 'react';
import { Grid } from '@material-ui/core'
import Header from '../components/Header'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    containerCurriculo:{
        backgroundColor:"#CCC",
        
    }
})


function Curriculo() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Header />
            <Grid container xs={12} className={classes.containerCurriculo}>

            </Grid>
        </React.Fragment>
    )
}

export default Curriculo