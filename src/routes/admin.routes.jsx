import { Routes, Route, Navigate} from 'react-router-dom';
import { CartProvider } from '../context/CartContext';

import { Home } from '../pages/Home'
import { DishDetails } from '../pages/DishDetails'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AdminRoutes() {
  return (
    <CartProvider> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:product_id" element={<DishDetails />} />
          <Route path="/new" element={<NewDish />} />
          <Route path="/edit/:product_id" element={<EditDish />} />

          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
}