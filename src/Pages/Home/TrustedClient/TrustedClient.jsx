import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from '../../../../public/trustedclient/logo1.png';
import logo2 from '../../../../public/trustedclient/logo2.png';
import logo3 from '../../../../public/trustedclient/logo3.png';
import logo4 from '../../../../public/trustedclient/logo4.png';
import logo5 from '../../../../public/trustedclient/logo5.png';
import logo6 from '../../../../public/trustedclient/logo6.png';
import './TrustedClient.css';
import { useEffect } from "react";


const TrustedClient = () => {

  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="py-5 my-5 md:mt-14 md:mb-5">
      <div className="container mx-auto px-5">
          {/* content section start */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 lg:px-5 overflow-hidden">
          {/* logo1 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo1} className="w-12 h-8 sm:w-10 sm:h-8 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo1 end */}
          {/* logo2 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo2} className="w-12 h-8 sm:w-10 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo2 end */}
          {/* logo3 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo3} className="w-12 h-8 sm:w-10 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo3 end */}
          {/* logo4 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo4} className="w-12 h-8 sm:w-10 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo4 end */}
          {/* logo5 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo5} className="w-12 h-8 sm:w-10 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo5 end */}
          {/* logo6 start */}
          <div  data-aos="zoom-in" data-aos-duration="1500">
            <img src={logo6} className="w-12 h-8 sm:w-10 sm:h-9 md:w-14 md:h-10 lg:w-16 lg:h-12 xl:w-20 xl:h-14 2xl:w-24 2xl:h-16 text-center mx-auto image"></img>
          </div>
          {/* logo6 end */}
        </div>
          {/* content section end */}
      </div>
    </div>
  );
};

export default TrustedClient;