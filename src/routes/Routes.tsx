import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Home } from '../pages/home';
import { Movies } from '../pages/movies';
import { StartShips } from '../pages/starships';
import { Vehicles } from '../pages/vehicles';
import { Favorites } from  '../pages/favorites';

export default function AppRoutes(){
  return (
    <BrowserRouter>
    <Routes >
      <Route   path='/'  element={<Home/>}  />
      <Route   path='/movies'  element={<Movies/>}  />
      <Route   path='/StartShips'  element={<StartShips/>}  />
      <Route   path='/vehicules'  element={<Vehicles/>}  />
      <Route   path='/favorites'  element={<Favorites/>}  />
      </Routes>
    </BrowserRouter>
  )
}