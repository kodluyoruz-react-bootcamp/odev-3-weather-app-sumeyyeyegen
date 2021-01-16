
import React, { useContext } from 'react';
import { ForecastContext } from '../contexts/ForecastContext';
//<p>{description}</p>
const InstantWeather = () => {
    const { city, data } = useContext(ForecastContext);

    return (
        <div className="card" style={{ height: '22rem' }}>
            <div className="card-header img-top" variant="top" src={`https://www.weatherbit.io/static/img/icons/${data.iconCode}.png`} />
            <div className="card-body">
                <h3>{data[0].day}</h3>
                <p className="text-gray card-title">
                    <span>
                        {data[0].date}
                    </span>
                    <span>{city}</span>
                </p>
                <div className="weather-data d-flex">
                    <div className="mr-auto">
                        <h4 className="display-3">
                            Sıcaklık: {data[0].temp} <span className="symbol">°</span>C
                        </h4>
                        <h5>{data[0].description}</h5>
                        <br />
                        <h6>
                            En Yüksek Sıcaklık: {data[0].maxTemp}{" "}
                            <span className="symbol">°</span>C
                        </h6>
                        <h6>
                            En Düşük Sıcaklık: {data[0].minTemp}{" "}
                            <span className="symbol">°</span>C
                        </h6>
                    </div>
                </div>
                {/* <div>{description}</div> */}
                {/* <p>{datetime}</p> */}
                {/* <p>Min: {min_temp}</p> */}
                {/* <p>Max: {max_temp}</p> */}
            </div>
        </div>
    );
};

export default InstantWeather;