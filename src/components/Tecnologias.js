import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-elastic-carousel'
import CssIcon from '../images/css.png'
import HtmlIcon from '../images/html.png'
import JavascriptIcon from '../images/javascript.png'
import ReactIcon from '../images/react.png'
import PhpIcon from '../images/php.png'
import MongoIcon from '../images/mongo.png'
import FirebaseIcon from '../images/firebase.png'
import NodeIcon from '../images/node.png'

const useStyles = makeStyles({
    ContainerTecnologias: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#999"
    },
    TextoTecnologias:{
        paddingBottom: "40px"
    }
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

function Tecnologias() {
    const largura = useWindowSize();

    const items = [
        { id: 1, imagem: JavascriptIcon },
        { id: 2, imagem: HtmlIcon },
        { id: 3, imagem: CssIcon },
        { id: 4, imagem: MongoIcon },
        { id: 5, imagem: FirebaseIcon },
        { id: 6, imagem: ReactIcon },
        { id: 7, imagem: NodeIcon },
        { id: 8, imagem: PhpIcon },
    ]

    const classes = useStyles();
    return (

        <Grid container xs={12} className={classes.ContainerTecnologias}>
             <Typography variant="h5" className={classes.TextoTecnologias} >
                    Algumas tecnologias que utilizo no dia a dia:
                </Typography>
            <Grid item xs={12} sm={8} >               
                {largura > 600 ? (
                    <Carousel
                        itemsToShow={3}
                        itemsToScroll={3}
                        showArrows={false}
                        enableAutoPlay
                        autoPlaySpeed={4000}
                        transitionMs={1000}
                    >
                        {items.map(item => <img src={item.imagem} />)}
                    </Carousel>
                ) : (
                        <Carousel
                            itemsToShow={1}
                            itemsToScroll={1}
                            showArrows={false}
                            enableAutoPlay
                            autoPlaySpeed={4000}
                            transitionMs={1000}
                        >
                            {items.map(item => <img src={item.imagem} />)}
                        </Carousel>
                    )}

            </Grid>
        </Grid>
    )
}

export default Tecnologias
