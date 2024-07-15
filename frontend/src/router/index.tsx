import { createBrowserRouter, createRoutesFromElements , Route } from "react-router-dom";
import SidebarLayout from "../pages/SidebarLayout";
import Today from "../pages/Today/Today";
import Inbox from "../pages/Inbox";
import Filters_labels from "../pages/Filters_labels";
import Upcoming from "../pages/Upcoming";




export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<SidebarLayout />} >
            <Route index  element={<Today />}/>
            <Route path={"inbox"}  element={<Inbox />}/>
            <Route path={"upcoming"}  element={<Upcoming />}/>
            <Route path={"filters-labels"}  element={<Filters_labels />}/>
            </Route>
            
            </>
    )
)