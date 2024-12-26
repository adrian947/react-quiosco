import PropTypes from 'prop-types';
import { formatMoney } from '../helpers/formatMoney';
import Button from './Button';
import { useStore } from '../store/store';

const Product = ({ product }) => {
  const { setProductSelected } = useStore();
  const { nombre, imagen, precio } = product;

  const handleSetProductStore = () => {
    setProductSelected(product);
  };

  return (
    <div className='border p-3 shadow bg-white grid grid-rows-[auto,1fr,auto] gap-3'>
      <img
        alt={`imagen ${nombre}`}
        className='w-full object-cover'
        src={`/img/${imagen}.jpg`}
      />
      <h3 className='text-xl font-bold text-center'>{nombre}</h3>
      <p className='text-2xl font-black text-amber-500 text-center'>
        {formatMoney(precio)}
      </p>
      <Button
        textButton='Add Product'
        className='bg-indigo-600 hover:bg-indigo-800'
        onClick={handleSetProductStore}
      />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
