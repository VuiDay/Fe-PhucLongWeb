import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Drinks from './layouts/Drinks'
import Products from './pages/Products'
import Promotions from './pages/Promotions'
import Aboutus from './pages/AboutUs'
import Drink from './pages/DrinkChild/Drink'
import DinningOffer from './pages/DrinkChild/DinningOffer'
import Bakery from './pages/DrinkChild/Bakery'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='Drinks' element={<Drinks/>}>
          <Route index element={<Drink/>}></Route>  
          <Route path='DinningOffer' element={<DinningOffer/>}></Route>
          <Route path='Bakery' element={<Bakery/>}></Route>
        </Route>
        <Route path='Products' element={<Products/>}></Route>
        <Route path='Promotions' element={<Promotions/>}></Route>
        <Route path='AboutUs' element={<Aboutus/>}></Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

