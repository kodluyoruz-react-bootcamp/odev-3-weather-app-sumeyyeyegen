
const WeatherCard = ({ description, temp, maxTemp, minTemp, datetime, iconCode }) => {
    return (
        <div className="card">
            <img alt="" src={`https://www.weatherbit.io/static/img/icons/${iconCode}.png`} />
            <div>
                <h3>{description}</h3>
                <p>{datetime}</p>
                <p>Temp: {temp}</p>
                <p>
                    <span>Min: {minTemp}<span>°</span>C</span>
                    <span>Maks: {maxTemp}<span>°</span>C</span>
                </p>
            </div>
        </div>
    )
};

export default WeatherCard;