import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import { store } from "./app/store"


function App() {

  return (
    <>
    <Provider store={store}>

      <ChakraProvider>
        <RouterProvider router={router} >
        </RouterProvider>
      </ChakraProvider>   
      
    </Provider>
       </>
  )
}

export default App
