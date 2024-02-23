import {createContext, useEffect, useState} from "react";
import {cities} from "../constants/cities";

const Context = createContext(null)



const ContextProvider = ({children}) => {

    const [tripIdToday, setTripIdToday] = useState(1);
    const [tripsList, setTripsList] = useState([
        {
            id: 1,
            city: cities[0].name,
            image: cities[0].image,
            start_date: new Date().toJSON().split('T')[0],
            end_date: '2024-02-28'
        },
        {
            id: 2,
            city: cities[3].name,
            image: cities[3].image,
            start_date: new Date().toJSON().split('T')[0],
            end_date: '2024-03-09'
        },
    ]);
    const TripsListSetter = (list) => {
      setTripsList(prev => [...prev, list])
    }




    return (
        <Context.Provider value={{tripIdToday, setTripIdToday, TripsListSetter, tripsList}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};