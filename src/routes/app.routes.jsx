import { Routes, Route} from 'react-router-dom';

//import { Home } from '../pages/Home'
//import { DishDetails } from '../pages/DishDetails'
import { NewDish } from '../pages/NewDish'
//import { SignIn } from '../pages/SignIn'
//import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewDish />} />
    </Routes>
  );
}