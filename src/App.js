import React, {useState} from "react";
import Weather from "./Weather"
import './App.css';

function App() {

  const key = "6f3cd2b04da140c3a4b195322211103";
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const getData = async (value) => {

    const d = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=5&aqi=no&alerts=no`);
    const result = await d.json();
    setData(result.forecast.forecastday);

  }

  return (
    <div className="App">
      <div className = "searchItem">
        <input type="text" placeholder="Enter city.." onChange = {(e)=>setInput(e.target.value)}/>
        <button onClick = {()=>getData(input)}> <img src="https://integrityhr.com/wp-content/uploads/2015/11/IHR_search_icon-200x200.png"/> </button>
      </div>
      {
        data.map((item)=>(
          <Weather key={item.date} date = {item.date} min = {item.day.mintemp_c} max = {item.day.maxtemp_c} con = {item.day.condition.text} icon = {item.day.condition.icon}/>
        ))
      }
    </div>
  );
}

export default App;
