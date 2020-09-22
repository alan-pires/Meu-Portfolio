import React,{useEffect} from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import AboutMe from '../components/AboutMe'
import Tecnologias from '../components/Tecnologias'
import Footer from '../components/Footer'
import api from '../functions/connectToDb'

function Home() {

    useEffect(()=>{
        const response = api.get("/posts")
        .then((res)=>{
            console.log(res.data)
        })
    },[])

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
