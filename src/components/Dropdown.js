import React, { useContext } from 'react'
import { ForecastContext } from "../contexts/ForecastContext";
import { cities } from '../const/cities';

const Dropdown = () => {
    const { setCity } = useContext(ForecastContext);

    const changeHandler = (e) => {
        setCity(e.target.value);
    };
    return (
        <div className="container d-flex justify-content-center">
            <h5>İl Seçiniz</h5>
            <form action="" name="city" type="submit" className="mb-4" onChange={changeHandler}>{cities}</form>
        </div>
    )
}
export default Dropdown