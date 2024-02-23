import {useForm} from "react-hook-form";

import css from './TripForm.module.css'
import {cities} from "../../constants/cities";
import {useAppContext} from "../../hooks/useAppContext";
import {useNavigate} from "react-router-dom";

const TripForm = (key, value) => {

    const {tripsList, TripsListSetter} = useAppContext();
    const navigate = useNavigate();

    const {register, reset, handleSubmit,formState: {isValid, errors}} = useForm({
        mode: 'all'
    });
    const now = new Date()
    const inFifteenDays = new Date(new Date(now).setDate(now.getDate() + 15))
    
    const save = (item) => {
        try {
            item.id = tripsList.length + 1
            item.image = cities.filter(city => city.name === item.city)[0].image
            TripsListSetter(item)
            reset()

            navigate('/trips')
        } catch (e) {
            window.alert('Input data from list')
        }

    }

    return (
        <div className={css.TripForm}>
            <form onSubmit={handleSubmit(save)}>
                <p>Select city:</p>
                <input list="select" placeholder={'Please select a city'} {...register('city')}/>
                <datalist className={css.form_control} id="select">
                    {cities.map(city => <option key={city.id} value={city.name}/>)}
                </datalist>
                <p>Start date:</p>
                <input
                    type="date"
                    placeholder={'yyyy-mm-dd'}
                    min={now.toJSON().split('T')[0]}
                    max={inFifteenDays.toJSON().split('T')[0]}
                    {...register('start_date')}
                />
                <p>End date:</p>
                <input
                    type="date"
                    placeholder={'yyyy-mm-dd'}
                    min={new Date().toJSON().split('T')[0]}
                    max={inFifteenDays.toJSON().split('T')[0]}
                    {...register('end_date')}
                />
                <br/>
                <button disabled={!isValid} className={css.Btn}>Save</button>
            </form>

        </div>
    );
};

export {
    TripForm
};