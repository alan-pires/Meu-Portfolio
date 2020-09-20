import React from 'react'
import { Toolbar, Typography, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        zIndex: 2,
        width: '98%',
        display: 'flex',
        justifyContent: 'flex-end',        
    },
    
})

function Header() {
    const classes = useStyles();
    return (
        <Toolbar className={classes.root}  >
            <IconButton color="primary" component={Link} to="/">
               <Typography variant="h6"> 
                    Home
                </Typography>
            </IconButton>
            <IconButton color="primary" component={Link} to="/projects">
               <Typography variant="h6"> 
                    Projetos
                </Typography>
            </IconButton>
            <IconButton color="primary" >
                <Typography variant="h6">  
                    Contato
                </Typography>
            </IconButton>
            <IconButton href="https://github.com/alan-pires" target="_blank">
                <GitHubIcon color="primary" fontSize="large" />
            </IconButton>
        </Toolbar>
    )
}

export default Header
