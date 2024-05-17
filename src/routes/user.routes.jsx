import { Routes, Route, Navigate} from 'react-router-dom';
import { CartProvider } from '../context/CartContext';

import { Home } from '../pages/Home'
import { DishDetails } from '../pages/DishDetails'

export function UserRoutes() {
  return (
    <CartProvider> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:product_id" element={<DishDetails />} />

          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
}