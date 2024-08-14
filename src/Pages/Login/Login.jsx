import { Link } from 'react-router-dom';
import formImg from '../../../public/formImg.png';
import formlogo from '../../../public/formlogo.png';

const Login = () => {


  return (
    <div className='bg-gradient-to-r from-pink-100  to-green-100 py-12'>
      <div className='container mx-auto flex justify-center items-center px-5 md:px-0 '>
        <div className="w-full md:w-4/5 lg:3/4 shadow-2xl bg-base-200 sm:flex sm:justify-between sm:items-center rounded-2xl p-5">
          <div className='sm:flex-1 sm:px-5 md:px-7 lg:px-10 flex flex-col justify-stretch'>
            <div>
              <img src={formlogo} className='w-[40%] h-[15%] sm:w-[35%] md:w-[32%] lg:w-[30%] lg:h-[10%]'></img>
            </div>
            <div className='my-4 sm:my-5 md:my-7 space-y-3'>
              <h1 className='text-xl sm:text-base md:text-lg lg:text-2xl text-black'>WellCome Back!</h1>
              <p className='text-sm sm:text-sm md:text-base lg:text-sm text-gray-500'>Please enter log in details below</p>
            </div>
            <form className="space-y-5 sm:space-y-2 md:space-y-3">
              <div className="form-control">
                <input type="email" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label text-end inline-block">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 sm:mt-3 md:mt-2 lg:mt-6">
                <button type='submit' className="btn bg-black text-white hover:bg-black">Login</button>
              </div>
            </form>
            <div className="divider">or continue</div>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-sm sm:text-sm md:text-base lg:text-base text-gray-500'>Don't have an account? </p> <Link to="#" className='text-black font-semibold text-sm sm:text-sm md:text-base lg:text-base'> SignUp</Link>
            </div>
          </div>
          <div className='hidden sm:block sm:flex-1'>
            <img src={formImg} className=' w-full h-full rounded-es-[10%] rounded-xl'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;