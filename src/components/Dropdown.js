import React from 'react'
import { useContext } from "react";
import { cities } from '../const/cities';
import ForecastContext from "../contexts/ForecastContext";
const Dropdown = () => {
    const { city, setCity } = useContext(ForecastContext);
    const changeHandler = (e) => {
        setCity(e.target.value);
    }
    return (
        <select style={{ padding: 10 }}
            onChange={changeHandler}
            defaultValue={city}
        >
            {cities.map((city) => (
                <option key={city.id} value={city.name}>
                    {city.name}
                </option>
            ))}
        </select>
    )
}
export default Dropdown