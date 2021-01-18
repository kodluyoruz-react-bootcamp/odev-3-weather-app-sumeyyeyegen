import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { API_KEY, API_BASE_URL } from '../apis/config'
const ForecastContext = createContext({});

//const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

export const ForecastProvider = ({ children }) => {
    const [city, setCity] = useState('İzmir');
    const [data, setData] = useState([
        {
            temp: null,
            maxTemp: null,
            minTemp: null,
            day: null,
            date: null,
            weather: { icon: "", description: "" },
            now: ""
        },
    ]);
    useEffect(() => {
        const forecast = axios.get(`${API_BASE_URL}?city=${city}&days=7&key=${API_KEY}`)
        forecast
            .then(res => { return res })
            .then(d => { return d.data.data })
            .then(res => { return setData(res) })
    }, [city, setData]);

    const values = {
        city,
        setCity,
        data,
        setData
    };


    return (
        <ForecastContext.Provider value={values}>
            {children}
        </ForecastContext.Provider>
    )
}
export default ForecastContext;