import './ContactDescription.css';
import addressLink from '../../../../public/addressLink/addressLink.png'
import { Link } from 'react-router-dom';

const ContactDescription = () => {
  return (
    <div>
      {/* subTitle section start */}
      <h2 className="text-base font-bold tracking-tight text-gray-900 sm:text-xl md:text-3xl lg:text-3xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get in<span className='text-blue-600/100'> touch</span></h2>
      {/* subTitle section end */}
      {/* title section start */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 my-2" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Don't hesitate to ask a question</h2>
      {/* title section end */}
      {/* description section start */}
      <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5'>Donec blandit vestibulum varius. Mauris vel euismod velit. Sed congue eu nisl sed egestas.</p>
      {/* description section end */}
      {/* address section start */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10'>
        <div className='flex gap-2 items-center'>
          <img className='w-5 h-5' src={addressLink}></img>
          <Link className='font-bold'>+880 12345-67890</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='w-5 h-5' src={addressLink}></img>
          <Link className='font-bold'>info@gmail.com</Link>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='w-5 h-5' src={addressLink}></img>
          <Link>
            <p className='font-bold'>Main office</p>
            <p className='md:text-sm lg:text-lg'>Road No. 15, Dhaka 1216</p>
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='w-5 h-5' src={addressLink}></img>
          <Link>
            <p className='font-bold'>2nd office</p>
            <p className='md:text-sm lg:text-lg'>Road No. 15, Dhaka 1216</p>
          </Link>
        </div>
      </div>
      {/* address section end */}

    </div>
  );
};

export default ContactDescription;