import Modal from 'react-modal';
import { useStore } from '../store/store';
import { formatMoney } from '../helpers/formatMoney';
import Button from './Button';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalComponent = () => {
  const { productSelected, setProductSelected } = useStore((state) => state);
  const [counter, setCounter] = useState(1);
  if (!productSelected) return;
  Modal.setAppElement('#root');

  const closeModal = () => {
    setProductSelected(null);
    setCounter(1);
  };

  const sumCount = () => {
    setCounter(counter + 1);
  };
  const restCount = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  };

  return (
    <Modal
      isOpen={productSelected && true}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='flex'>
        <div>
          <div className='border p-3 shadow bg-white '>
            <img
              alt={`imagen ${productSelected.nombre}`}
              className='max-w-48 m-auto'
              src={`/img/${productSelected.imagen}.jpg`}
            />
            <h3 className='text-xl font-bold text-center'>
              {productSelected.nombre}
            </h3>
            <p className='text-2xl font-black text-amber-500 text-center'>
              {formatMoney(productSelected.precio)}
            </p>
          </div>

          <Button
            className='bg-indigo-600'
            onClick={() => closeModal()}
            textButton='Close'
          />
        </div>
        <div className='px-5'>
          <div className='flex items-center gap-5'>
            <Button
              className='bg-indigo-600 rounded-lg'
              onClick={() => restCount()}
              textButton=' - 1'
            />
            <p className='text-2xl'>{counter}</p>
            <Button
              className='bg-indigo-600 rounded-lg'
              onClick={() => sumCount()}
              textButton='+ 1'
            />
          </div>

          <Button
            className='bg-indigo-600 mt-6'
            onClick={() => closeModal()}
            textButton='Add To order'
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
