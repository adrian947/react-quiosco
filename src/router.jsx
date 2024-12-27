import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
        {/* Rutas de autenticación */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Rutas del dashboard */}
        <Route path="home" element={<Dashboard />}>
          <Route index element={<Navigate to="products/1" replace />} />
          <Route path="products/:id" element={<Products />} />
        </Route>

        {/* Ruta para página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
