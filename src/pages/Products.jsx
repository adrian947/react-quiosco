import { useEffect } from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useStore } from '../store/store';
import ModalComponent from '../components/Modal';

const Products = () => {
  const params = useParams();
  const { changeCategorieName } = useStore();
  const categorieName = categories.find((cat) => cat.id == params.id).nombre;

  useEffect(() => {
    if (categorieName) {
      changeCategorieName(categorieName);
    }
  }, [categorieName, changeCategorieName]);

  return (
    <div className='mt-10 px-5'>
      <h2 className='text-4xl mb-3 font-bold'>Menu of {categorieName}</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 '>
        {products
          .filter((product) => product.categoria_id == params.id)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
      <ModalComponent />
    </div>
  );
};

export default Products;
