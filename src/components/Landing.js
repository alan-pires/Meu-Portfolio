import React from 'react';
import Fundo from '../images/code1.jpg'
import {Typography, Grid, Button} from '@material-ui/core'

function Landing() {
    return (
        <section>
            <Grid container xs={12} style={{
                height: '600px',
                width: '100%',
                backgroundImage: `url(${Fundo})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                opacity: 0.9,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} >
                    <Grid item container xs={10} sm={8} md={6} style={{
                        height:'70%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.8)'                        
                    }}>
                            <Typography align="center" variant="h1" color='primary' >
                                Bem Vindo!
                            </Typography>
                            <Button
                             variant='contained'
                             color='secondary'
                             style={{color:'#fff', marginTop:'20px', boxShadow:'0 5px 3px rgba(0, 0, 0, 0.6)'}}>
                            <Typography align="center" variant="h4" color='primary' >
                                projetos
                            </Typography>
                            </Button>
                    </Grid>
                    
            </Grid>
        </section>
    )
}

export default Landing