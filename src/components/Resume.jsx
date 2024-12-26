import { formatMoney } from '../helpers/formatMoney';
import { useStore } from '../store/store';
import Button from './Button';

export const Resume = () => {
  const { productsToOrder, deleteProductsToOrder, getTotal } = useStore();

  const productTicket = (product) => {
    return (
      <div
        className='border p-1 mb-2 flex gap-1 justify-between'
        key={product.id}
      >
        <div className='flex '>
          <img
            alt={`imagen ${product.nombre}`}
            className='max-w-10'
            src={`/img/${product.imagen}.jpg`}
          />
          <div className='flex flex-col'>
            <p>{product.nombre}</p>
            <p>
              Quantity: {product.quantity}
              {' - '}
              <span className='font-black text-amber-500'>
                {formatMoney(product.precio)}
              </span>
            </p>
          </div>
        </div>
        <div>
          <button
            className='bg-red-500 m-0 text-white p-1'
            onClick={() => deleteProductsToOrder(product)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className='text-4xl mb-3 font-bold'>Resume</h2>
      <div className='mb-4'>
        {productsToOrder.length ? (
          productsToOrder.map((o) => productTicket(o))
        ) : (
          <p>{"There aren't products"}</p>
        )}
      </div>
      {productsToOrder.length !== 0 && (
        <>
          <p>total:{getTotal()}</p>
          <Button
            textButton='Send Order'
            className='bg-indigo-600 hover:bg-indigo-800'
          />
        </>
      )}
    </div>
  );
};
