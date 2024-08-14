import Form from "../Form/Form";
import ContactDescription from "./../ContactDescription/ContactDescription";
import Location from "./../Location/Location";

const Contact = () => {
  return (
    <>
      <div className="relative ">
        <div className="h-96 w-full  bg-blue-300/100	">
          <div className="container mx-auto h-full px-5">
            {/* title section start */}
            <div className="flex justify-center items-center h-full">
              <div>
                {/* title section start */}
                <h2
                  className="text-center font-semibold  md:font-bold xl:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 "
                  style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
                >
                  Get In Touch
                </h2>
                {/* title section end */}
                <div className="flex justify-center mb-6">
                  <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
                </div>
                <p className="text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5 text-justify sm:text-center text-gray-500">
                  We'll create high-quality linkable content and build at least
                  40 high-authority link to each<br className="hidden md:block"></br> asset. Paving the way
                  for you to grow your rankings. Improve brand.
                </p>
              </div>
            </div>
            {/* title section end */}
          </div>
        </div>
        <div
          className="h-[580px] sm:h-[280px] md:h-[270px] lg:h-72 xl:h-[290px] 2xl:h-[295x] w-full "
          style={{ height: "revert-layer" }}
        ></div>

        <div className=" w-6/6 absolute inset-2/4 left-0 right-0 top-72">
          <div className="flex justify-center">
            <div className="w-5/6 sm:w-11/12 md:w-11/12 lg:w-5/6 xl:w-5/6 2xl:w-5/6 bg-white rounded-lg shadow-2xl  p-2 xl:p-3 m-4 sm:m-4 md:m-4 lg:m-2 xl:m-0 2xl:m-0">
              <div className="sm:flex sm:justify-between sm:gap-2">
                <div className="rounded-lg bg-blue-600/100 relative overflow-hidden sm:flex-1">
                  {/* contact detales  */}
                  <ContactDescription></ContactDescription>
                  {/* div style  */}
                  <div
                    className="absolute -bottom-10 -right-10   rounded-full z-10 opacity-25 bg-gradient-to-r from-white to-blue-500 "
                    style={{ width: "150px", height: "150px" }}
                  ></div>
                </div>
                <div className="p-5 pb-0 sm:flex-1">
                  {/* form section start */}
                  <Form></Form>
                  {/* form section end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* location section start */}
      <div className="">
        <Location></Location>
      </div>
      {/* location section end */}
    </>
  );
};

export default Contact;
