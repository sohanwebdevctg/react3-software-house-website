
// fake json data

import { useEffect, useState} from "react";


const OurTeam = () => {

  // get fetch data
  const [ourTeam, setOurTeam] = useState([]);

    // fetch data
    useEffect(() => {
      fetch('ourTeam.json')
      .then((res) => res.json())
      .then((data) => setOurTeam(data))
    },[])

  return (
    <div className='mt-6 sm:mt-20 lg:mt-24 xl:mt-28'>
      <div className="container mx-auto">
        {/* post section start */}
        <div className="text-center mb-1 px-5">
          {/* post section start */}
          <h2
            className="text-center font-semibold  md:font-bold xl:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 "
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Our Team
          </h2>
          {/* post section end */}
          <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
            <h2 className="bg-red-500 w-[32%] sm:w-[23%] md:w-[22%] lg:w-[19%] xl:w-[18%] 2xl:w-[20%] h-[1px] rounded"></h2>
          </div>
          {/* subpost section start */}
          <h2
            className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 mb-3"
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Build our Team,
            <span className="text-blue-600/100"> Step By Step</span>
          </h2>
          {/* subpost section end */}
          {/* description section start */}
          <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
            Your success is our priority. We transform complex ideas<br className="hidden sm:block"></br> into solutions that empower your business
          </p>
          {/* description section end */}
        </div>
        {/* post section end */}
        {/* card section start */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 px-5'>
          {/* item1 section start */}
          {
            ourTeam.map((data,index) =><div key={index}>
            {/* image section start */}
            <div className='relative'>
              <img src={data.image} className='h-36 sm:h-36 md:h-40 lg:h-52 xl:h-[250px] 2xl:h-72 w-[65%] mx-auto z-20'></img>
              <div className='absolute bg-blue-600/100 top-[52%] bottom-0 left-0 right-[50%] -z-10 rounded-b-[50px]'></div>
            </div>
            {/* image section end */}
            {/* description section start */}
            <ul className='text-center mt-2'>
              <li className='text-xs sm:text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-xl'><strong>{data.name}</strong></li>
              <li className='text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-xl'><p>{data.post}</p></li>
            </ul>
            {/* description section end */}
          </div>)
          }

          {/* item1 section end */}
        </div>
        {/* card section end */}
      </div>
    </div>
  );
};

export default OurTeam;