
import {Kyiv, London, Gonkong, NewYork, Tokio} from "../assets/images";
import {useAppContext} from "../hooks/useAppContext";

const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const cities =[
    {
        id: 1,
        name: 'Kyiv',
        image: Kyiv
    },
    {
        id: 2,
        name: 'Tokio',
        image: Tokio,
    },
    {
        id: 3,
        name: 'New York',
        image: NewYork,
    },
    {
        id: 4,
        name: 'London',
        image: London,
    },
    {
        id: 5,
        name: 'Gonkong',
        image: Gonkong,
    },
]



export {
    cities,
    dayNames
}