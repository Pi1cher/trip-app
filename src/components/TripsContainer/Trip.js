import css from './Trip.module.css'
import {useAppContext} from "../../hooks/useAppContext";
import {useEffect} from "react";

const Trip = ({trip, active, setActive}) => {


    const {id, city, start_date, end_date, image} = trip;

    const startDate = start_date.split('T');

    const strDate = startDate[0].split('-').reverse().join('.')
    const endDate = end_date.split('-').reverse().join('.')

    const {setTripIdToday,changeTrigger} = useAppContext();
    const handleClick = (id) => {
        setActive(id)
    }
    useEffect(() => {
        setTripIdToday(active)
    }, [active])

    return (
        <div className={css.Trip}>
            <button
                id={id}
                onClick={() => handleClick(id)}
                className={active === id ? css.active : css.TripBtn}
            >
                <img src={image} alt={city}/>
                <p>{city}</p>
                <p>{strDate}-{endDate}</p>
            </button>
        </div>
    );
};

export {Trip};