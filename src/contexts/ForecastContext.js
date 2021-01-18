import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { API_BASE_URL } from '../const/consts'
require('dotenv').config({ path: '../env' })
const ForecastContext = createContext({});

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
        },
    ]);
    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY;
        const forecast = axios.get(`${API_BASE_URL}?city=${city}&days=7&key=${key}`)
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