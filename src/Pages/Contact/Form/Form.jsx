import "./Form.css";

const Form = () => {
  return (
    <div className="p-2">
      {/* form section start */}
      <form>
        {/* name & email section start */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5">
          <input
            className="border-slate-100 focus:border-blue-500/100 border-b-2 w-full  outline-none pb-3"
            type="text"
            placeholder="Your Name here"
            name="name"
          ></input>
          <input
            className="border-slate-100 focus:border-blue-500/100 border-b-2 w-full  outline-none pb-3"
            type="email"
            placeholder="Your email here"
            name="email"
          ></input>
        </div>
        {/* name & email section end */}
        {/* subject & phone section start */}
        {/* subject & phone section end */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5 my-5">
          <input
            className="border-slate-100 focus:border-blue-500/100 border-b-2 w-full  outline-none pb-3"
            type="text"
            placeholder="Your subject here"
            name="service"
          ></input>
          <input
            className="border-slate-100 focus:border-blue-500/100 border-b-2 w-full  outline-none pb-3"
            type="number"
            placeholder="Your phone number"
            name="phoneNumber"
          ></input>
        </div>
        {/* subject & phone section end */}
        {/* message section start */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
          <textarea
            className="border-slate-100 focus:border-blue-500/100 border-b-2 w-full pb-3 lg:pb-5 h-full sm:h-28 md:h-32 lg:h-36 outline-none"
            type="text"
            placeholder="Your Message here"
            name="text"
          ></textarea>
        </div>
        {/* message section end */}
        {/* submit button section start */}
        <button
          type="submit"
          className="bg-blue-500/100 hover:bg-blue-500/100 shadow-lg shadow-blue-500/100 rounded-md font-bold text-white p-2 lg:p-3 md:w-24 lg:w-32 w-full"
        >Submit</button>
        {/* submit button section end */}
      </form>
      {/* form section end */}
    </div>
  );
};

export default Form;
