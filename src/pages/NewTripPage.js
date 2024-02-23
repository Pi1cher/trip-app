import css from './NewTripPage.module.css'
import {useNavigate} from "react-router-dom";
import {TripForm} from "../components/TripFormContainer/TripForm";

const NewTripPage = () => {

    const navigate = useNavigate();
    return (
        <div className={css.NewTripPage}>
            <div className={css.NewTrip}>
                <div className={css.title}>
                    <div>Create trip</div>
                    <button onClick={()=> navigate('/trips')}><b>&#10005;</b></button>
                </div>
                <TripForm/>
            </div>
        </div>
    );
};

export {NewTripPage};