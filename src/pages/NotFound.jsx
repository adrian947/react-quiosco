const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h1 className='text-6xl font-bold text-red-500'>404</h1>
        <p className='text-xl text-gray-600 mt-4'>
          Lo sentimos, la página que buscas no existe.
        </p>
        <a
          href='/home'
          className='mt-6 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-lg transition duration-300'
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
