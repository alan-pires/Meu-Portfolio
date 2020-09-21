import React, {useState, useEffect} from 'react'
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link } from 'react-router-dom'

const useStyles = makeStyles({
    cardContainer:{
        '&:hover':{
                animation:"$bounce 0.5s linear"
            },
            backgroundColor:"#F5F5F5"
    },
    cardMedia:{
        margin:"auto" 
    },
    cardContent: {
        textAlign: "center",
    },
    linkCards:{
        textDecoration:"none",
        color:"#000"
    },
    "@keyframes bounce": { 
        "20%":{
            transform: "translateY(-10px)"
        },
        "40%":{
            transform: "translateY(0px)"
        },
        "80%":{
            transform: "translateY(-4px"
        },
        "100%":{
            transform: "translateY(0)"
        }
    }
})

const firstLetterUpper = name => name.charAt(0).toUpperCase() + name.slice(1);

function PokeCard({id, nome, imagem}) {
    const classes = useStyles()

    return (
       <Card
       key={id}
       className={classes.cardContainer}
       >
           <Link to={`/pokemon/:${id}`} className={classes.linkCards}>
           <CardMedia
                className={classes.cardMedia}
                image={imagem}
                style={{width: "130px", height:"130px"}}
           />
           <CardContent className={classes.cardContent}>
               <Typography>
                {`${id}.  ${firstLetterUpper(nome)}`}
               </Typography>
           </CardContent>
           </Link>
       </Card>
    )
}

export default PokeCard
