import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SidebarLayout from "../pages/SidebarLayout";
import Today from "../pages/Today/Today";
import Inbox from "../pages/Inbox";
import Filters_labels from "../pages/Filters_labels";
import Upcoming from "../pages/Upcoming";
import Login from "../pages/auth/Login";
import { Flex, Image } from "@chakra-ui/react";
import Register from "../pages/auth/Register";




export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<SidebarLayout />} >
                <Route index element={<Today />} />
                <Route path={"inbox"} element={<Inbox />} />
                <Route path={"upcoming"} element={<Upcoming />} />
                <Route path={"filters-labels"} element={<Filters_labels />} />
            </Route>

            <Route path={"/login"} element={
                <Flex justifyContent={"center"} alignItems={"center"}>

                    <Login />

                    <Image
                        display={{base: "none" , lg: "block"}}
                        
                        width={"450px"}
                        h="100%"
                        maxW={"100%"}
                        objectFit='cover'
                        src= "../../public/44245fc51c3e2ab05ee6d92c13e2e08a.png"
                    />
                </Flex>
            }

            />
            <Route path={"/register"} element={
                <Flex justifyContent={"center"} alignItems={"center"}>

                    <Register />

                    <Image
                        display={{base: "none" , lg: "block"}}
                        
                        width={"450px"}
                        h="100%"
                        maxW={"100%"}
                        objectFit='cover'
                        src= "../../public/44245fc51c3e2ab05ee6d92c13e2e08a.png"
                    />
                </Flex>
            }

            />
        </>
    )
)