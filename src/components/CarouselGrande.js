import React from 'react';
import Carousel from 'react-elastic-carousel'
import {Link} from '@material-ui/core'
import SiteEsteban from '../images/siteEsteban.png'


function CarouselC() {
    
    const items = [
        { id: 1, imagem: SiteEsteban, linkSite:"https://psicologoestebanchala.netlify.app/" }
    ]

    return (
            <Carousel                    
             itemsToShow={1}
             itemsToScroll={1}
             >
                {items.map(item =><Link href={item.linkSite} target="_blank"> <img src={item.imagem} /></Link>)}
            </Carousel> 
    )
}

export default CarouselC
