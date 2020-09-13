import React from 'react'
import CardModel from './CardModel'
import { Grid } from '@material-ui/core'

function Content() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} >
                <CardModel
                    title="Chile" 
                    subtitle="Santiago"
                    avatarSrc="https://likechile.com/wp-content/uploads/2017/05/clima-em-Santiago-do-Chile-1-1024x678.jpg"
                    description="Hakuna matata, Timão e pumbaaaa" 
                    imgSrc="https://likechile.com/wp-content/uploads/2017/05/clima-em-Santiago-do-Chile-1-1024x678.jpg"
                />
            </Grid>

        </Grid>

    )
}

export default Content
