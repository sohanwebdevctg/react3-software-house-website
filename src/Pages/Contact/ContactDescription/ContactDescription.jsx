import './ContactDescription.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const ContactDescription = () => {
  return (
    <div className='p-8 bg-cyan-500 text-white duration-100 rounded-lg h-96 lg:m-5'>
      {/* subTitle section start */}
      <h2 className="text-base font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl lg:text-3xl mb-2" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Contact Information</h2>
      {/* subTitle section end */}
      {/* description section start */}
      <p className='text-sm sm:text-lg md:text-sm lg:text-lg my-5'>We'll create high-quality linkable content and<br className='hidden sm:block'></br>build at least 40 high-authority</p>
      {/* description section end */}
      {/* address section start */}
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex gap-5 items-center'>
          <FaPhoneAlt className='text-base sm:text-xl md:text-lg lg:text-2xl'></FaPhoneAlt>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold'>+880 12345-67890</Link></li>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold'>+880 12345-67890</Link></li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <MdEmail className='text-base sm:text-xl md:text-lg lg:text-3xl'></MdEmail>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold'>support@uprangly.com</Link></li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <IoLocationSharp className='text-base sm:text-xl md:text-lg lg:text-3xl'></IoLocationSharp>
          <ul>
            <li><Link className='text-sm sm:text-base md:text-sm lg:text-base font-bold'>New York, USA</Link></li>
          </ul>
        </div>
      </div>
      {/* address section end */}

    </div>
  );
};

export default ContactDescription;