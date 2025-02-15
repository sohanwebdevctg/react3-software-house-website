import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <div className='bg-white h-screen flex items-center justify-center'>
      <div className='md:container md:mx-auto'>
      <div className='md:h-screen flex justify-center items-center text-center'>
      {/* description section start */}
        <div>
          <p className='text-blue-600/100 md:text-5xl md:font-semibold'>Oops!</p>
          <p className='text-black md:text-3xl md:font-semibold md:my-3'>Sorry, an unexpected error has occurred.</p>
          <p className='text-red-500 md:my-4 md:text-2xl'>
            <i>{error.statusText || error.message}</i>
          </p>
          <button onClick={() => {navigate(-1)}} className='bg-blue-600/100 text-white py-2 px-6 rounded md:font-bold'>Back</button>
        </div>
      {/* description section end */}
      </div>
      {/* items section start */}
    </div>
    </div>
  );
};

export default ErrorPage;