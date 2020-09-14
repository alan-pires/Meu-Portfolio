import React from 'react'
import { Grid, Typography, Link, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    containerFooter: {
        width: "100%",
        height: "300px",
        backgroundColor: "#333",
        justifyContent: "center"
    },
    contatoFooter: {
        backgroundColor: "#333",
        flexDirection: "column",
        alignItems: "center"
    }
})

function Footer() {
    const classes = useStyles()

    return (
        <Grid container className={classes.containerFooter} xs="12">
            <Grid
                container item
                className={classes.contatoFooter}
                direction="column"
                alignItems="center"
                justify="center"
                xs="10" sm="8">

                <Typography variant="h5" color="secondary">
                    CONTATO:
                </Typography>
                
                <IconButton>
                    <Link variant="body1">
                        WhatsApp
                    </Link>
                </IconButton>
                <IconButton>
                    <Link variant="body1">
                        Linkedin
                    </Link>
                </IconButton>
                <IconButton>
                    <Link variant="body1">
                        Github
                    </Link>
                </IconButton>
                <IconButton>
                    <Link variant="body1">
                        Instagram
                    </Link>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Footer
