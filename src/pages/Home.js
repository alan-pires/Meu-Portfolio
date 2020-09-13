import React from 'react'
import Landing from '../components/Landing'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Landing />
            <AboutMe />
        </React.Fragment>
    )
}

export default Home
