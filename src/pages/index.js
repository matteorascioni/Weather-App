import * as React from "react";
import { useState, useEffect } from "react";
import Layout from '../components/Layout/Layout';
import Headline from '../components/Headline/Headline';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Chart from '../components/Chart/Chart';

//@ts-ignore
import * as styles from '../styles/index.module.css';

const API_KEY = "7304c1473bbd33caf4d78c9ef37933af";
const CITY = 'Basel';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

const IndexPage = () => {
  const [items, setItems] = useState([]);
  const [forecastItems, setForecastItems] = useState([]);
  const [showMoreData, setShowMoreData] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [callSuccess, setCallSuccess] = useState(false);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [forecastUrl, setForecastUrl] = useState('');

  const getData = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    setItems(data);
    setIsPending(false);
    let tmpSunset = new Date(data.sys.sunset).toTimeString();
    let tmpSunrise = new Date(data.sys.sunrise).toTimeString();
    setSunset(tmpSunset);
    setSunrise(tmpSunrise);
    let tmpLat = Math.round(data.coord.lat);
    let tmpLon = Math.round(data.coord.lon);
    setForecastUrl(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${tmpLat}&lon=${tmpLon}&appid=${API_KEY}`
    )
    setLat(tmpLat);
    setLon(tmpLon);
    setCallSuccess(true);

    if(!response.ok) {
      return(
        <ErrorMessage
          message={`something went wrong ERROR: ${response.status}`} 
        />
      )
    }
  }

  const getForecastData = async() => {
    const response = await fetch(forecastUrl);
    let forecastData = await response.json();
    forecastData = forecastData.daily;

    let tmpForecast = [];
    forecastData.map((item,) => {
      let tmpElem = {
        days: ['Today', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        Humidity: item.humidity,
        MinTemp: item.temp.min,
        MaxTemp: item.temp.max,
      }
      return tmpForecast = [...tmpForecast, tmpElem];
    })

    setForecastItems(tmpForecast);
    if(!response.ok) {
      return(
        <ErrorMessage
          message={`something went wrong ERROR: ${response.status}`} 
        />
      )
    }
  }

  useEffect(() => {
    if(callSuccess) { 
      getForecastData();
    } else {
      getData();
    }
  }, [callSuccess,]);

  console.log('[ITEMS]', items);
  console.log('[FORECAST_ITEMS]', forecastItems);
  
  const hideShowMoreData = () => {
    setShowMoreData(!showMoreData);
  }

  return (
    <Layout>
      <Card>
        <Headline
          headline={items.name}
          className={styles.cityHeadline}
          tagName="h1"
        />  

        {!isPending && (
          <>
            <div className={styles.coordinatesContainer}>
              <div><span>Lat: {lat}</span></div>
              <div><span>Lon: {lon}</span></div>
            </div>

            <span className={styles.description}>
              {items.weather[0].description}
            </span>

            <div className={styles.minAndMaxtemperatureContainer}>
              <span>Min: {Math.round(items.main.temp_min)}</span>
              <span>Max: {Math.round(items.main.temp_max)}</span>
            </div>
          </>
        )}
        
        {/* Button and showMoreData */}
        <Button 
          label={showMoreData ? 'Hide' : 'Show more'}
          onClick={hideShowMoreData}
        />
      
        {showMoreData ? (
          <ul>
            <li>Wind Speed: {items.wind.speed}</li>
            <li>Humidity: {items.main.humidity}</li>
            <li>Pressure: {items.main.pressure}</li>
            <li>Sunrise: {sunrise}</li>
            <li>Sunset: {sunset}</li>
          </ul>
        ) : null}
      </Card>  

      <Headline 
        className="grid-2--mobile grid-8--tablet grid-12--desktop"
        headline="Weather forecast for the week"
        tagName="h2"
      />
      <div className={`${styles.chartContainer} grid-full-width-mobile`}>
        <Chart chartData={forecastItems} />
      </div>
    </Layout>
  );
};

export default IndexPage;