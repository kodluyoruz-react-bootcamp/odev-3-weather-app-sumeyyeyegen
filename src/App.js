import React from 'react';
import { ForecastProvider } from "./contexts/ForecastContext";
import './App.css';
import WeatherList from './components/WeatherList';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <ForecastProvider>
      <div className="App">
        <Dropdown />
        <WeatherList />
      </div>
    </ForecastProvider>
  );
};

export default App;
