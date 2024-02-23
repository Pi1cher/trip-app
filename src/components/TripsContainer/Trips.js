import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {Weather} from "../WeatherContainer/Weather";
import {cities} from "../../constants/cities";
import {Trip} from "./Trip";
import css from './Trips.module.css'
import {useAppContext} from "../../hooks/useAppContext";


const Trips = () => {

    const navigate = useNavigate();
    const {TripsListSetter, tripsList} = useAppContext();


    const [query, setQuery] = useState("");
    const [active, setActive] = useState(1);

    let data = [];
    if(localStorage.getItem('trip')){
        data = JSON.parse(localStorage.getItem('trip'))

    }
    else {
        data = tripsList;
    }


    let filteredTrips;
    filteredTrips = data.length && data.filter((trip) => {
        if (query === "") {
            return trip;
        }
        else if (trip.city.toLowerCase().includes(query.toLowerCase())) {
            return trip;
        }
    })

    const save = () => {
        localStorage.setItem('trip', JSON.stringify(tripsList))
    }
    const clear = () => {
      localStorage.clear()
    }



    return (
        <div>
            <div className={css.Trips}>
                <input
                    className={css.SearchBox}
                    placeholder="Search your trip"
                    onChange={(event) => setQuery(event.target.value)}
                    value={query}
                    type="search"
                />
                <div className={css.TripsBtn}>
                    <button  onClick={save}>Save</button>
                    <button  onClick={clear}>Clear</button>
                </div>
            </div>
            <div className={css.Trips} id="Trips" >
                {filteredTrips.map(trip => <Trip key={trip.id} trip={trip} active={active} setActive={setActive}/>)}
                <button className={css.AddTrip} onClick={() => navigate('create')}>
                    +
                    <br/>
                    Add trip
                </button>
            </div>
            <Weather/>
        </div>
    );
};

export {Trips};