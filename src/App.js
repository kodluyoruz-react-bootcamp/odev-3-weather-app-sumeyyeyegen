import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import InstantWeather from './components/InstantWeather';
import WeeklyWeather from './components/WeeklyWeather';


const App = () => {
  // destructure the returned values
  //const { data, error, isLoading, setUrl } = UseFetch();
  //console.log(data);

  return (
    <div className="container">
      <Dropdown />
      <InstantWeather />
      <WeeklyWeather />
    </div>
  );
};

export default App;
