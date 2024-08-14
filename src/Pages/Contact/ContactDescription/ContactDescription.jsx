import './ContactDescription.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const ContactDescription = () => {
  return (
    <div className='p-4 bg-none z-20'>
      {/* title section start */}
      <h3 className='font-semibold text-white text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl'>Contact Information</h3>
      {/* title section end */}
      {/* description section start */}
      <p className='text-white pt-2 text-sm sm:text-sm md:text-lg lg:text-xl xl:text-lg 2xl:text-xl lg:w-[85%] xl:w-[77%] 2xl:w-[65%]'>This is our contact Information. You can contact us anytime</p>
      {/* description section end */}
      <div className='grid grid-cols-1 gap-3 mt-4 space-y-2'>
        {/* phone section start */}
        <div className='flex gap-5 items-center '>
          <FaPhoneAlt className='text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-white'></FaPhoneAlt>
          <ul>
            <li><Link className='text-base sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold text-white'>+880 01679667452</Link></li>
            <li><Link className='text-base sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold text-white'>+880 01621291939</Link></li>
          </ul>
        </div>
        {/* phone section end */}
        {/* email section start */}
        <div className='flex gap-5 items-center'>
          <MdEmail className='text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-white'></MdEmail>
          <ul>
            <li><Link className='text-base sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold text-white'>support@uprangly.com</Link></li>
          </ul>
        </div>
        {/* email section end */}
        {/* location section start */}
        <div className='flex gap-5 items-center'>
          <IoLocationSharp className='text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-white'></IoLocationSharp>
          <ul>
            <li><Link className='text-base sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold text-white'>New York, USA</Link></li>
          </ul>
        </div>
        {/* location section end */}
      </div>
    </div>
  );
};

export default ContactDescription;