import { useState, useEffect } from "react"

const FetchFn = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response2 = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.1&lon=17.0')
            const weather = await response2.json()
            setData(weather.properties.timeseries[0].data.instant.details.air_temperature)
        }
        fetchData()
    }, [])

    return (<>(functional component w/ hooks useState and useEffect) Data fetched from Meteorologisk institutt:
        <ul><li><strong>temperature in Wrocław {data}°C</strong></li></ul></>)
}

export default FetchFn