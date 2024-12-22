import { Link } from "react-router-dom";
import errorbg from '../src/assets/website-page-found-error-robot404.jpg'

const ErrorPage = () => {
  return (
    <section className='bg-white w-11/12 mx-auto md:w-full md:flex justify-around'>
      <div className=' w-full md:mt-32 lg:w-1/2 lg:mt-20'>
          <img
            className='md:ml-6 w-full md:h-fit   rounded-lg  '
            src={errorbg}
            alt=''
          />
        </div>
      <div className=' md:px-6 md:py-12 mx-auto lg:flex lg:items-center lg:gap-12 mt-20 lg:mt-0'>
        <div className='w-full lg:w-1/2'>
         
          <h1 className='md:mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='md:mt-4 text-gray-500 text-xl dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.Here are some
            helpful links:
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              to='/'
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600'
            >
              Take me home
            </Link>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ErrorPage;