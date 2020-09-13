import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import {Avatar, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';


function CardModel(props) {
  
    const {avatarSrc, title, subtitle, description, imgSrc} = props;
    
    return (
        <Card >
            <CardHeader  
            avatar={
                <Avatar  src={avatarSrc} />                  
            }
            action={
                <IconButton aria-label="settings">
                    <ShareIcon />
                </IconButton>
            }
            title={title}
            subheader={subtitle}
            />
            <CardMedia style={{height:"200px"}} image={imgSrc} />
            <CardContent>
                 <Typography variant="body2" component="p">
                  {description}
             <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saber mais</Button>
            </CardActions>
        </Card>
    )
}

export default CardModel
