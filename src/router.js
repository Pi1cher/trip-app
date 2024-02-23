import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TripsPage} from "./pages/TripsPage";
import {NewTripPage} from "./pages/NewTripPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'trips'}/>
            },
            {
                path:'trips', element: <TripsPage/>, children: [
                    {
                        path:'create', element: <NewTripPage/>
                    }
                ]
            },

        ]
    }
])

export {
    router
}