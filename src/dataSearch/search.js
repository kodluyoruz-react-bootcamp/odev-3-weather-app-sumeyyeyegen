import axios from 'axios'
const API_KEY = process.env.API_KEY;
const API_BASE_URL = process.env.API_BASE_URL;

const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

const dataSearch = async (city) => {
    try {
        const getData = await axios.get(
            `${API_BASE_URL}?city=${city}&days=7&key=${API_KEY}`
        );
        const forecastInfoList = getData.data.data.map(info => {
            const d = new Date(info.datetime);
            const day = days[d.getDay()];
            const date = d.getDate();
            return {
                temp: info.temp,
                maxTemp: info.max_temp,
                minTemp: info.min_temp,
                date: date,
                day: day,
                iconCode: info.weather.icon,
                description: info.weather.description
            }
        });
        return forecastInfoList;
    }
    catch (e) {
        console.log(e);
    }
};
export default dataSearch;
