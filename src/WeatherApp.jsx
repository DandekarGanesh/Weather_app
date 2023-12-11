import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
     const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 21.17,
        humidity: 33,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 22.05,
        weather: "haze",
    });

    function updateInfo(newInfo) {
        setWeatherInfo(newInfo);
    };

    return (
       <div style={{textAlign: "center"}}>
         <h2>Weather App by Ganesh Dandekar </h2>
        <SearchBox updateInfo={updateInfo   }></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
       </div>
    );
}