import React from 'react'
import InstantWeather from './InstantWeather'

const WeatherList = ({ weathers }) => {
    return (
        <div className="container">
            <div className="row">
                {/* {console.log(weathers)} */}
                {weathers.map(({ datetime, max_temp, min_temp, weather }) => (
                    <div className="col" key={datetime} >
                        <InstantWeather
                            description={weather.description}
                            max_temp={max_temp}
                            min_temp={min_temp}
                            datetime={datetime}
                            icon={weather.icon}
                        />
                        { console.log(weather)}
                    </div>
                ))
                }
            </div >
        </div>
    )
}

export default WeatherList;