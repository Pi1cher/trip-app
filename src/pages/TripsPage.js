import {Outlet} from "react-router-dom";

import {Trips} from "../components/TripsContainer/Trips";
import {TodayS} from "../components/Today`sContainer/Today`s";
import css from './TripsPage.module.css'

const TripsPage = () => {

    return (
        <div className={css.TripsPage}>
            <p className={css.Page}>Weather FORECAST</p>
            <div style={{width:70 + '%'}}><Trips/></div>
            <TodayS/>
            <Outlet/>
        </div>
    );
};

export {TripsPage};