import { useState, useEffect } from "react"

const FetchFn = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const weatherWroclaw = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.06&lon=17.01')
            const weatherWroclawData = await weatherWroclaw.json()
            const Wroclaw = weatherWroclawData.properties.timeseries[0].data.instant.details.air_temperature
            const weatherJerozolima = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=31.47&lon=35.13')
            const weatherJerozolimaData = await weatherJerozolima.json()
            const Jerozolima = weatherJerozolimaData.properties.timeseries[0].data.instant.details.air_temperature
            const weatherTokio = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=35.41&lon=139.41')
            const weatherTokioData = await weatherTokio.json()
            const Tokio = weatherTokioData.properties.timeseries[0].data.instant.details.air_temperature
            const weatherAddisAbeba = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=9.1&lon=38.44')
            const weatherAddisAbebaData = await weatherAddisAbeba.json()
            const AddisAbeba = weatherAddisAbebaData.properties.timeseries[0].data.instant.details.air_temperature
            setData([Wroclaw, Jerozolima, Tokio, AddisAbeba])
        }
        fetchData()
    }, [])

    return (<>

        <p>(functional component w/ hooks useState and useEffect) Data fetched from Meteorologisk institutt:</p>

        <table className="tableFetch">
            <thead><tr><th>City</th><th>Temperature now</th></tr></thead>
            <tbody>
                <tr><td>Wrocław</td><td>{data[0]} °C</td></tr>
                <tr><td>יְרוּשָׁלַיִם‎</td><td>{data[1]} °C</td></tr>
                <tr><td>東京</td><td>{data[2]} °C</td></tr>
                <tr><td>አዲስ አበባ</td><td>{data[3]} °C</td></tr>
            </tbody>
        </table>
    </>)
}
export default FetchFn