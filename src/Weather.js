import React from "react";

function Weather({date, min, max, con, icon}){
    return(
        <div className="container">
            <div className="weather">
                <h2>{date}</h2>
                <ul>
                    <li><img src={icon} alt="weather_icon" /></li>
                    <li>{con}</li>
                    <li>{min} C / {max} C </li>
                </ul>
            </div>
        </div>
    );
}

export default Weather;