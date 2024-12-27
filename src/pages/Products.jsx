import { useEffect } from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product';
import { products as productsStatic } from '../data/products';
import { categories as categoriesStatic } from '../data/categories';
import { useStore } from '../store/store';
import ModalComponent from '../components/Modal';
import axiosInstance from '../api/axios';

const Products = () => {
  const params = useParams();
  const {
    changeCategorieName,
    categories,
    categorieName,
    setProducts,
    products,
  } = useStore();

  useEffect(() => {
    if (!categories.length) return;

    const categorieData =
      import.meta.env.VITE_APP_ENVIROMENT === 'dev'
        ? categories
        : categoriesStatic;

    const categorieName = categorieData.find(
      (cat) => cat.id == params.id,
    ).nombre;
    if (categorieName) {
      changeCategorieName(categorieName);
    }
  }, [categories, params, changeCategorieName]);

  useEffect(() => {
    const getProducts = async () => {
      if (import.meta.env.VITE_APP_ENVIROMENT === 'dev') {
        const { data } = await axiosInstance.get(`products/${params.id}`);
        return setProducts(data.data);
      }
      setProducts(productsStatic);
    };
    getProducts();
  }, [params, setProducts]);

  if (!products.length) return 'Cargando...';

  return (
    <div className=' px-5'>
      <h2 className='text-4xl mb-3 font-bold'>Menu of {categorieName}</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 '>
        {products
          .filter((product) => product.categorie_id == params.id)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
      <ModalComponent />
    </div>
  );
};

export default Products;
