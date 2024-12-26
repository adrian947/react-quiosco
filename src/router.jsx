import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AuthLayout from './auth/AuthLayout';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Navigate to='login' />} />
          <Route index path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='home' element={<Dashboard />}>
          <Route index element={<Navigate to='products/1' />} />
          <Route path='products/:id' element={<Products />} />
          {/* <Route path='/home/com2' element={<COM2 />} /> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
