import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import AboutMe from '../components/AboutMe'
import Tecnologias from '../components/Tecnologias'
import Footer from '../components/Footer'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Landing />
            <AboutMe />
            <Tecnologias />
            <Footer />
        </React.Fragment>
    )
}

export default Home
