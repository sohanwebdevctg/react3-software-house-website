import './ContactDescription.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const ContactDescription = () => {
  return (
    <div className='p-4 mb-12 h-full bg-none z-20'>
      <h3 className='font-semibold text-white'>Contact Information</h3>
      <p className='text-white pt-2'>Lorem ipsum dolor sit amet consectetur</p>
      <div className='grid grid-cols-1 gap-3 mt-4'>
        <div className='flex gap-5 items-center '>
          <FaPhoneAlt className='text-base sm:text-xl md:text-lg lg:text-2xl text-white'></FaPhoneAlt>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold text-white'>+880 01679667452</Link></li>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold text-white'>+880 01621291939</Link></li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <MdEmail className='text-base sm:text-xl md:text-lg lg:text-3xl text-white'></MdEmail>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold text-white'>support@uprangly.com</Link></li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <IoLocationSharp className='text-base sm:text-xl md:text-lg lg:text-3xl text-white'></IoLocationSharp>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold text-white'>New York, USA</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactDescription;