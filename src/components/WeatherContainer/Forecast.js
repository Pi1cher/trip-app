import {useEffect, useState} from "react";

import {dayNames} from "../../constants/cities";
import {icons} from "../../constants/icons";
import css from './Forecast.module.css'
const Forecast = ({day}) => {

    const [iconType, setIconType] = useState([{image: icons[3].image}]);
    const {temp, icon, datetime} = day;

    useEffect(() => {
        setIconType(icons.filter((item) =>  icon === item.name))
    }, [])

    const check = () => {
      if (iconType[0] !== undefined) {
          return iconType[0].image
      }
    }

    return (
        <div className={css.Forecast}>
            <div>
                <div className={css.Day}>{dayNames[new Date(datetime).getDay()]}</div>
                <img src={check()} width={64} height={64} alt={icon}/>
                <div className={css.Temp}>{temp}°</div>
            </div>
        </div>
    );
}

export {Forecast};