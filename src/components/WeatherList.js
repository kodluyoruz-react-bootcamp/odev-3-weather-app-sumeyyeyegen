import React, { useContext } from 'react'
import ForecastContext from '../contexts/ForecastContext'
import WeatherCard from './WeatherCard'

const WeatherList = () => {
    const { data } = useContext(ForecastContext);
    return (
        <div className="container">
            <div className="row">
                {data.length && data.map((d, i) => (
                    <div className="col" key={i} >
                        <WeatherCard
                            description={d.weather.description}
                            temp={d.temp}
                            maxTemp={d.max_temp}
                            minTemp={d.min_temp}
                            datetime={d.datetime}
                            iconCode={d.weather.icon}
                        />
                    </div>
                ))};
            </div >
        </div>
    )

}

export default WeatherList;