import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { API_BASE_URL } from '../const/consts'
require('dotenv').config({ path: '../env' })
const ForecastContext = createContext({});

export const ForecastProvider = ({ children }) => {
    const [city, setCity] = useState('İstanbul');
    const [data, setData] = useState([]);
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