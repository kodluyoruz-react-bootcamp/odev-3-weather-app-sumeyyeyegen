import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function WeeklyWeather() {
    const { data } = useContext(ForecastContext);

    return data.map((data, i) => {
        return (
            <div key={i}>
                <img
                    src={`https://www.weatherbit.io/static/img/icons/${data.iconCode}.png`}
                    alt=""
                />
                <p className="mb-0">
                    <span>
                        Maks: {data.maxTemp}
                        <span>°C</span>
                    </span>
                    <br />
                    <span>
                        Min: {data.minTemp}
                        <span>°C</span>
                    </span>
                </p>
            </div>
        );
    });
}

export default WeeklyWeather;
