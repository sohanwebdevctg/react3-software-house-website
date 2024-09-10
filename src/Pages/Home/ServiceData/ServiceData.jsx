const ServiceData = ({ data, index }) => {

  // service data
  const { title, details } = data;

  return (
    <div>
      <div
        className={`${
          index >= 9
            ? "border-l-2 lg:border-l-[3px] border-none ml-2 lg:ml-3"
            : "border-l-2 lg:border-l-[3px] border-slate-300 ml-2 lg:ml-2"
        }`}
      >
        <div className="relative">
          <div className="absolute top-0 -left-[12px] lg:-left-[14px] 2xl:-left-[20px] bg-gray-900 h-5 w-5 sm:h-5 sm:w-5 md:w-6 md:h-6 lg:h-6 lg:w-6 xl:w-7 xl:h-7 2xl:w-9 2xl:h-9 rounded-full flex justify-center items-center text-[9px] sm:text-[9px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg font-semibold text-slate-200">
            {++index}
          </div>
          <div className="pl-5 sm:pl-5 md:pl-6 lg:pl-8">
            <div className="pb-2">
              {/* title section start */}
              <h3
                className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold text-gray-900"
                style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
              >
                {title}
              </h3>
              {/* title section end */}
              {/* details section start */}
              <p className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 italic text-justify mt-1">
                {details}
              </p>
              {/* details section end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
