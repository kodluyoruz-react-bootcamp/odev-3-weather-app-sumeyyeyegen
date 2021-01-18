import styles from '../App.css';
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const WeatherCard = ({ temp, maxTemp, minTemp, datetime, weather, day }) => {
    const d = new Date(datetime);
    day = days[d.getDay()]
    return (
        <div className="card" style={styles.card}>
            <img alt="" src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} />
            <div>
                <h3>{weather.description}</h3>
                <p>{day}</p>
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