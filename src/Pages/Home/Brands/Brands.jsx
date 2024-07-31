import { useState } from 'react';
// working with
import wrk1 from '../../../../public/brands/working/1.png';
import wrk2 from '../../../../public/brands/working/2.png';
import wrk3 from '../../../../public/brands/working/3.png';
import wrk4 from '../../../../public/brands/working/4.png';
import wrk5 from '../../../../public/brands/working/5.png';
import wrk6 from '../../../../public/brands/working/6.png';
import wrk7 from '../../../../public/brands/working/7.png';
import wrk8 from '../../../../public/brands/working/8.png';
import wrk9 from '../../../../public/brands/working/9.png';
import wrk10 from '../../../../public/brands/working/10.png';
// members of
import mm1 from '../../../../public/brands/members/1.png';
import mm2 from '../../../../public/brands/members/2.png';
import mm3 from '../../../../public/brands/members/3.png';
import mm4 from '../../../../public/brands/members/4.png';
import mm5 from '../../../../public/brands/members/5.png';
import mm6 from '../../../../public/brands/members/6.png';
import mm7 from '../../../../public/brands/members/7.png';
import mm8 from '../../../../public/brands/members/8.png';
import mm9 from '../../../../public/brands/members/9.png';
import mm10 from '../../../../public/brands/members/10.png';
// our concerns
import con1 from '../../../../public/brands/concerns/1.png';
import con2 from '../../../../public/brands/concerns/2.png';
import con3 from '../../../../public/brands/concerns/3.png';
import con4 from '../../../../public/brands/concerns/4.png';
import con5 from '../../../../public/brands/concerns/5.png';
import con6 from '../../../../public/brands/concerns/6.png';
import con7 from '../../../../public/brands/concerns/7.png';
import con8 from '../../../../public/brands/concerns/8.png';
import con9 from '../../../../public/brands/concerns/9.png';
import con10 from '../../../../public/brands/concerns/10.png';


const Brands = () => {
  // toggle state
  const [toggle, setToggle] = useState(1)

  //toggle function
  const updateBtn = (id) => {
    setToggle(id)
  }

  return (
    <>
      <section className="mb-10">
        <div className="container mx-auto px-5">
          {/* top section start */}
          <div className="pb-4">
            {/* title section start */}
            <h2 className="text-center text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  font-bold tracking-tight text-gray-900 mb-3" style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}>Trusted by <span className="text-blue-600/100">open</span>, aired out of companies
            </h2>
            {/* title section end */}
            {/* description section start */}
            <p className="text-center text-[13px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            700+ Companies Are Connected to Us. Now take one step<br className="hidden sm:block"></br>ahead towards a competent career
            </p>
            {/* description section end */}
          </div>
          {/* top section end */}
          {/* tab section start */}
          <div className="my-5">
            {/* tab button section start */}
            <ul className="flex justify-between items-center gap-3 sm:gap-6 md:text-8 lg:gap-10 xl:gap-12 2xl:gap-14 xl:px-5">
              {/* working with start */}
              <li onClick={() => updateBtn(1)} className={`${toggle === 1 ? 'text-blue-500 border-blue-500' : 'text-black border-slate-300'} text-center mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold border-b-2  w-1/2 pb-2`}>Working with</li>
              {/* working with end */}
              {/* members of start */}
              <li onClick={() => updateBtn(2)} className={`${toggle === 2? 'text-blue-500 border-blue-500' : 'text-black border-slate-300'}  text-center mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold border-b-2 w-1/2 pb-2`}>Members of</li>
              {/* members of end */}
              {/* our concerns start */}
              <li onClick={() => updateBtn(3)} className={`${toggle === 3 ? 'text-blue-500 border-blue-500' : 'text-black border-slate-300'}  text-center mx-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold border-b-2 w-1/2 pb-2`}>Our Concerns</li>
              {/* our concerns end */}
            </ul>
            {/* tab button section end */}
            {/* item section start */}
            <div className='my-5 hidden'>
              {/* working with start */}
              <ul className={`${toggle === 1 ? 'block' : 'hidden'} grid grid-cols-2 sm:grid-cols-5 gap-12`}>
                <li>
                  <img src={wrk1} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk2} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk3} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk4} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk5} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk6} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk7} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk8} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk9} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={wrk10} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
              </ul>
              {/* working with end */}
              {/* members of start */}
              <ul className={`${toggle === 2 ? 'block' : 'hidden'} grid grid-cols-2 sm:grid-cols-5 gap-12`}>
                <li>
                  <img src={mm1} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm2} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm3} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm4} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm5} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm6} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm7} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm8} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm9} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={mm10} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
              </ul>
              {/* members of end */}
              {/* our concerns start */}
              <ul className={`${toggle === 3 ? 'block' : 'hidden'} grid grid-cols-2 sm:grid-cols-5 gap-12`}>
                <li>
                  <img src={con1} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con2} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con3} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con4} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con5} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con6} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con7} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con8} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con9} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
                <li>
                  <img src={con10} className='xl:w-3/4 xl:h-24 mx-auto'></img>
                </li>
              </ul>
              {/* our concerns end */}

            </div>
            {/* item section end */}
          </div>
          {/* tab section end */}
        </div>
      </section>
    </>
  );
};

export default Brands;
