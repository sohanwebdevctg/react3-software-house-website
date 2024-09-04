const UpdateNews = () => {
  return (
    <div className="px-5 mt-20 mb-14">
      <section className="w-full h-2/6">
        <div className="container mx-auto px-5 bg-gradient-to-br from-indigo-50 to-cyan-50 md:mt-10 rounded-tr-[100px] rounded-bl-[100px] sm:rounded-tr-[80px] sm:rounded-bl-[80px] md:rounded-tr-[90px] md:rounded-bl-[90px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] xl:rounded-tr-[120px] xl:rounded-bl-[120px]">
          <div className="sm:flex sm:justify-between sm:items-center px-3 py-6 sm:px-4 sm:py-6 md:px-3 md:py-8 lg:px-10 lg:py-10 xl:px-16 xl:py-14 2xl:px-16 2xl:py-16 gap-3 md:gap-5 lg:gap-8 xl:gap-12 2xl:gap-12">
            {/* left item start */}
            <div className="sm:flex-1">
              {/* title section start */}
              <h2
                className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3 font-bold tracking-tight text-gray-900 "
                style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
              >
                Get our <span className="text-blue-600/100">update news</span>
              </h2>
              {/* title section end */}
              {/* description section star */}
              <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify">
                We suggests that compatible with both iOS & Android operating
                systems. Users can access or use it regardless of whether they
                have an Apple or Android device
              </p>
              {/* description section end */}
            </div>
            {/* left item end */}
            {/* right item start */}
            <div className=" mt-2 sm:mt-0 sm:flex-1 p-2 sm:p-4 md:p-5 lg:p-4 xl:p-6 2xl:p-8">
              <label className="input input-bordered flex items-center gap-2 relative focus-within:outline-none">
                <input type="text" className="grow w-full" placeholder="Search" />
                <button className="btn btn-sm bg-blue-600/100 hover:bg-blue-600/100 text-white text-xs absolute right-2 sm:right-2">
                  Send
                </button>
              </label>
            </div>
            {/* right item end */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateNews;
