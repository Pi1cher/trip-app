import css from './Today`s.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import {useEffect, useState} from "react";
import {forecastService} from "../../services/forecastService";
import {Timer} from "../TimerContainer/Timer";
import {icons} from "../../constants/icons";
import {logDOM} from "@testing-library/react";
import {dayNames} from "../../constants/cities";

const TodayS = () => {


    const {tripIdToday, tripsList} = useAppContext();

    const [iconType, setIconType] = useState([{image: icons[3].image}]);
    const [cityWeather, setCityWeather] = useState({days: [{}]});

    useEffect(() => {
        forecastService.getByCityToday(tripsList[tripIdToday - 1].city).then(({data}) => {
            setCityWeather(data)
            setIconType(icons.filter((icon) => data.days[0].icon === icon.name))
        })
    }, [tripIdToday])


    return (
        <div className={css.TodayS}>
            <div><b>{dayNames[new Date().getDay()]}</b></div>
            <div><img src={iconType[0].image} alt={cityWeather.days[0].icon}/><b><p>{cityWeather.days[0].temp}</p>
            </b><sup>&#176;C</sup></div>
            <div>{cityWeather.address}</div>
            {(tripsList[tripIdToday-1].start_date !== new Date().toJSON().split('T')[0])    ?            <Timer deadline={tripsList[tripIdToday-1].start_date}/> : <div className={css.Today}>TODAY</div>}

</div>

)
    ;
}

export {
    TodayS
};