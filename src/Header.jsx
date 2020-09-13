import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(()=>({
    typographStyles:{
        flex:1
    }
}))
function Header() {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.typographStyles}>
                    This is our header
                </Typography>
                <GitHubIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
