import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);
AOS.init();

const WhoWeAre = () => {
  return (
    <>
      <section className="overflow-hidden py-5 my-5 md:my-16">
        <div className="container mx-auto px-5">
          <div className="sm:flex sm:items-center sm:justify-center sm:gap-2 lg:px-5">
            {/* left section start */}
            <div className="flex justify-center items-center sm:w-1/2 gap-1">
            {/* item1 section start */}
              <div className="mx-1" data-aos="fade-right">
                <div className="shadow-lg rounded p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 2xl:p-4 text-center w-20 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-44 hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                  <lord-icon
                    src="https://cdn.lordicon.com/wuvorxbv.json"
                    trigger="hover"
                  ></lord-icon>
                  <h3 className="font-semibold text-[8px] sm:text-[6px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold">
                    Secure Software Solutions
                  </h3>
                </div>
              </div>
              {/* item1 section end */}
              {/* item2 section start */}
              <div className="mx-1">
                <div className="mb-5" data-aos="fade-down">
                  <div className="shadow-lg rounded p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 2xl:p-4 text-center w-20 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-44 hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                    <lord-icon
                      src="https://cdn.lordicon.com/ppsqwkvn.json"
                      trigger="hover"
                    ></lord-icon>
                    <h3 className="font-semibold text-[8px] sm:text-[6px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold">
                      Proactive Cyber Protection
                    </h3>
                  </div>
                </div>
                <div className="mt-5" data-aos="fade-up">
                  <div className="shadow-lg rounded p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 2xl:p-4 text-center w-20 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-44 hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                    <lord-icon
                      src="https://cdn.lordicon.com/abwrkdvl.json"
                      trigger="hover"
                    ></lord-icon>

                    <h3 className="font-semibold text-[8px] sm:text-[6px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold ">
                      Advanced Security Innovations
                    </h3>
                  </div>
                </div>
              </div>
              {/* item2 section end */}
              {/* item3 section start */}
              <div className="m-1">
                <div
                  className="shadow-lg rounded p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 2xl:p-4 text-center w-20 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-44 hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50"
                  data-aos="fade-left"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/lbjtvqiv.json"
                    trigger="hover"
                  ></lord-icon>
                  <h3 className="font-semibold text-[8px] sm:text-[6px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold">
                    Cutting-edge Software Security
                  </h3>
                </div>
              </div>
              {/* item3 section end */}
            </div>
            {/* left section end */}
            {/* right section start */}
            <div className="sm:w-1/2 mt-5 sm:mt-0 py-5">
            {/* title section start */}
              <h3 className="inline-block text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-slate-900 tracking-tight "style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}>Who We Are?</h3>
            {/* title section end */}
            {/* description section start */}
              <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-700 mb-4 text-justify">
                We are a dynamic team of professionals dedicated to providing
                innovative solutions tailored to your needs. With expertise in
                various domains, we deliver high-quality services and support to
                drive your success. Trust us to bring your ideas to life and
                achieve your goals effectively and efficiently.
              </p>
            {/* description section end */}
            {/* button section start */}
              <button
                type="button"
                className="h-7 sm:h-7 md:h-8 lg:h-10 xl:h-11 2xl:h-13 w-20 sm:w-20 md:w-[86px] lg:w-24 xl:w-28 2xl:w-32 mt-2 sm:mt-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 drop-shadow-2xl text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg"
              >Reed More</button>
              {/* button section end */}
            </div>
            {/* right section end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
