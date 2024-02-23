import {useEffect, useState} from "react";

import {forecastService} from "../../services/forecastService";
import {useAppContext} from "../../hooks/useAppContext";
import {Forecast} from "./Forecast";
import css from './Weather.module.css'

const Weather = () => {

    const {tripIdToday, tripsList} = useAppContext();



    const [forecast, setForecast] = useState({days: [{}]});



    useEffect(() => {
        if(tripsList) {forecastService.getForecast(tripsList[tripIdToday-1].city,tripsList[tripIdToday-1].start_date,tripsList[tripIdToday-1].end_date).then(({data}) => {
            setForecast(data)
        })}
    }, [tripsList, tripIdToday])



    return (
        <div className={css.Weather}>
            {forecast.days. slice(0,7).map(day => <Forecast key={+day.datetimeEpoch} day={day}/>)}

        </div>
    );
};


export {Weather};