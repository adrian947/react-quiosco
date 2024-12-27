import { useEffect } from 'react';
import { NavLink } from 'react-router';

import Button from './Button';
import { useStore } from '../store/store';
import axiosInstance from '../api/axios';
import { categories as categorieStatic } from '../data/categories';

export const Sidebar = () => {
  const { clearProductsToOrder, categories, setCategories } = useStore();

  const handleCancelOrder = () => {
    clearProductsToOrder();
  };

  useEffect(() => {
    const getCategories = async () => {
      if (import.meta.env.VITE_APP_ENVIROMENT === 'dev') {
        const { data } = await axiosInstance.get('/categories');
        return setCategories(data.data);
      }
      setCategories(categorieStatic);
    };
    getCategories();
  }, [setCategories]);

  return (
    <aside>
      <div>
        <img className='w-40' src='/img/logo.svg' alt='logo' />
        <div className='flex flex-col mt-3'>
          {categories.map(({ nombre, icono, id }) => (
            <NavLink
              key={id}
              to={`/home/products/${id}`}
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-black'
              }
            >
              <div className='flex items-center gap-4 border w-full p-3 hover:bg-amber-400 '>
                <img src={`/img/icono_${icono}.svg`} className='w-12' />
                <p className='text-lg font-bold cursor-pointer truncate'>
                  {' '}
                  {nombre}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <div className='my-5 py-5'>
          <Button
            className='bg-red-500'
            textButton='Cancel Order'
            onClick={handleCancelOrder}
          />
        </div>
      </div>
    </aside>
  );
};
