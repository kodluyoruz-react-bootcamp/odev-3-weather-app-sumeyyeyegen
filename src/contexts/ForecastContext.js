import { useState, createContext } from "react";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
    const [city, setCity] = useState('İzmir');
    const [data, setData] = useState([
        {
            temp: null,
            maxTemp: null,
            minTemp: null,
            date: null,
            day: null,
            iconCode: null,
            description: null
        },
    ])

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