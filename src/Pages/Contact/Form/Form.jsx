import axios from 'axios';
import './Form.css';

const Form = () => {


  const contactForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const phoneNumber = form.phoneNumber.value;
    const text = form.text.value;
    const contactData = {name, email, service, phoneNumber, text}

    axios.post('https://web.xcode.com.bd/api/v1/contact/', contactData)
    .then(function (response) {
      // console.log(response);
      alert(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });


  }


  return (
    <div className=''>
      <form onSubmit={contactForm}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5'>
          <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your Name here' name="name"></input>
          <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="email" placeholder='Your email here' name="email"></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5 my-5'>
          <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your subject here' name="service"></input>
        <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="number" placeholder='Your phone number' name="phoneNumber"></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5'>
          <textarea className='border-slate-100 focus:border-cyan-400 border-b-2 w-full pb-3 lg:pb-5 h-full sm:h-28 md:h-32 lg:h-36 outline-none' type="text" placeholder='Your Message here' name="text"></textarea>
        </div>
          <input type="submit" value="Submit" className='bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/50 rounded-md font-bold text-white p-2 lg:p-3 md:w-24 lg:w-32 w-full'></input>
        
      </form>
    </div>
  );
};

export default Form;