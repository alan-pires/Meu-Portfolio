import React, { useEffect, useState } from 'react'
import { Grid, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Axios from 'axios'

const useStyles = makeStyles({
    weatherContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    headerInformacoes: {
        paddingTop: "100px",
    },
    informacoes: {
        marginTop: "50px",
        width: "100%",
        border: "solid 2px #fff",
        padding: " 20px",
        backgroundColor:"#DEF3FD",
        borderRadius:"10px"
    },
    pesquisarLocal: {
        paddingLeft:"5px"
    },
    containerTemperatura: {

    },
    temperaturaImagem: {
        paddingLeft:"5px"
    },
    outrosDados:{
        paddingRight:"20px"
    }

})

function Weather() {
    const classes = useStyles()
    const [coords, setCoords] = useState({
        latitude: 0,
        longitude: 0
    })
    const [data, setData] = useState({})
    const [local, setLocal] = useState("")

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                setCoords(newCoords)

            })
        }
    }, [])

    useEffect(() => {
        function getData() {
            if (coords.latitude !== 0) {
                Axios.get(`http://api.weatherstack.com/current?access_key=02bcbf0a5ec1ae5727665afcbe8a3d63&query=${coords.latitude},${coords.longitude}`)
                    .then(response => {
                        let weatherData = {
                            location: response.data.location.name,
                            country: response.data.location.country,
                            temperature: response.data.current.temperature,
                            description: response.data.current.weather_descriptions[0],
                            region: response.data.location.region,
                            humidity: response.data.current.humidity,
                            pressure: response.data.current.pressure,
                            precip: response.data.current.precip,
                            wind_speed: response.data.current.wind_speed,
                            img: response.data.current.weather_icons
                        }
                        setData(weatherData)
                    })
            }
        }
        getData()
    }, [coords])

    function handleChange(e){
        setLocal(e.target.value)       
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            Axios.get(`http://api.weatherstack.com/current?access_key=02bcbf0a5ec1ae5727665afcbe8a3d63&query=${local}`)
                    .then(response => {
                        let weatherData = {
                            location: response.data.location.name,
                            country: response.data.location.country,
                            temperature: response.data.current.temperature,
                            description: response.data.current.weather_descriptions[0],
                            region: response.data.location.region,
                            humidity: response.data.current.humidity,
                            pressure: response.data.current.pressure,
                            precip: response.data.current.precip,
                            wind_speed: response.data.current.wind_speed,
                            img: response.data.current.weather_icons
                        }
                        setData(weatherData)
                    })
        }
    }




    return (
        <>
            <Header />
            <Grid container className={classes.weatherContainer} xs={12} direction="column" >
                <Grid item container xs={12} className={classes.headerInformacoes}>
                    <Typography variant="h5">
                        Clima agora em:
                    </Typography>
                    <TextField
                     color="secondary"
                     className={classes.pesquisarLocal}
                     onChange={handleChange}
                     onKeyDown={handleKeyDown}
                     value={local}
                     >

                    </TextField>
                </Grid>

                <Grid item container className={classes.informacoes} xs={12} direction="column">
                    <Grid item container xs={12} direction="row" className={classes.containerTemperatura}>
                        <Grid item >
                            <Typography variant="h5">
                                {`${data.temperature}°C`}
                            </Typography>
                            <Typography>
                                {data.description}
                            </Typography>
                        </Grid>

                        <Grid item  className={classes.temperaturaImagem} >
                            <img src={data.img} alt="" />
                        </Grid>

                    </Grid>
                    <Typography>
                        {data.location}, {data.region}
                    </Typography>
                    <Typography>
                        {data.country}
                    </Typography>
                    <Grid item container xs={12} >
                        <Typography className={classes.outrosDados}>
                           Pressão(hPa): {data.pressure}
                        </Typography>
                        <Typography className={classes.outrosDados}>
                           Humidade(%): {data.humidity}
                        </Typography>
                        <Typography className={classes.outrosDados}>
                           Velocidade do vento(km/hr): {data.wind_speed}
                        </Typography>
                        <Typography className={classes.outrosDados}>
                           Precipitação(mm): {data.precip}
                        </Typography>

                    </Grid>


                </Grid>
            </Grid>
        </>
    )
}

export default Weather
