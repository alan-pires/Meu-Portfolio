import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core'
import Header from '../components/Header'
import {makeStyles} from '@material-ui/styles'
import Footer from '../components/Footer'
import CarouselGrande from '../components/CarouselGrande'


const useStyles = makeStyles({
    containerProjetos:{
        backgroundColor:"#CCC",
        flexDirection:"column",
        paddingTop:"80px",
        alignItems:"center"
    },

})

function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [size])

    return size;
}


function Projects() {
    const classes = useStyles()
    const largura = useWindowSize();

    return (
        <React.Fragment>
            <Header />
            <Grid container xs={12} className={classes.containerProjetos}>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h4">
                        Meus projetos:
                    </Typography>
                </Grid><br/>
                <Grid item container xs={12} sm={8}>
                {largura > 600 ? (
                   <CarouselGrande />
                ) : null
                }
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )
}

export default Projects
