import { Link } from 'react-router';

const Login = () => {
  return (
    <>
      <h1 className='text-4xl font-black'>Login</h1>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='mt-2 w-full p-3 bg-gray-50'
              id='email'
              placeholder='Your Email'
            />
          </div>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              className='mt-2 w-full p-3 bg-gray-50'
              id='password'
              placeholder='Your Password'
            />
          </div>
          <input
            type='submit'
            value='Login Account'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full my-5 p-3 uppercase font-bold cursor-pointer'
          />
          <Link
            to='/register'
            className='text-indigo-400 flex justify-center underline'
          >
            Create account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
