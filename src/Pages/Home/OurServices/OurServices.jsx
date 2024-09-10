import "./OurServices.css";
import { useEffect, useState } from "react";
import ServiceData from "../ServiceData/ServiceData.jsx";
import Lottie from "lottie-react";
import ourServiceSecurity from "../../../assets/ourServiceSecurity.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurServices = () => {

  // set data
  const [service, setService] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <section className=" my-10">
      <div className="container mx-auto px-5 w-full h-2/6">
        {/* title section start */}
        <div className="text-center mb-1 px-5">
          {/* title section start */}
          <h2
            className="text-center font-semibold  md:font-bold xl:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 "
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Our Service
          </h2>
          {/* title section end */}
          <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
            <h2 className="bg-red-500 w-[32%] sm:w-[23%] md:w-[22%] lg:w-[19%] xl:w-[18%] 2xl:w-[20%] h-[1px] rounded"></h2>
          </div>
          {/* subtitle section start */}
          <h2
            className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 mb-3"
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Enhancing Creativity,
            <span className="text-blue-600/100"> Step by Step</span>
          </h2>
          {/* subtitle section end */}
          {/* description section start */}
          <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
            We always provide best service to our clients . As a result of{" "}
            <br className="hidden sm:block"></br> which our efficiency emerges
          </p>
          {/* description section end */}
        </div>
        {/* title section end */}
        {/* description section start */}
        <div className="sm:flex sm:justify-between sm:items-center xl:gap-8 2xl:gap-10 lg:px-5">
          {/* left section start */}
          <div className="overflow-hidden sm:w-1/2" data-aos="zoom-in" data-aos-duration="2000">
            <Lottie animationData={ourServiceSecurity} loop={true} />
          </div>
          {/* left section end */}
          {/* right section start */}
          <div className="sm:w-1/2">
            <div className="serviceCon p-3 mt-2 sm:mt-0">
              {service.map((data, index) => (
                <ServiceData
                  data={data}
                  key={index}
                  index={index}
                ></ServiceData>
              ))}
            </div>
          </div>
          {/* right section end */}
        </div>
        {/* description section end */}
      </div>
    </section>
  );
};

export default OurServices;
