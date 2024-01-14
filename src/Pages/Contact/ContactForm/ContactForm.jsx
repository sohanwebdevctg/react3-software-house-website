import ContactDescription from '../ContactDescription/ContactDescription';
import Form from '../Form/Form';
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className=''>
      <div className='container mx-auto shadow-lg rounded hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 -mt-20'>
      <div className=''>
        {/* content section start */}
        <div className='md:flex gap-2 '>
          {/* contactDescription section start */}
          <div className='m-3 flex-2 h-[100%]'>
            <ContactDescription></ContactDescription>
          </div>
          {/* contactDescription section end */}
          {/* form section start */}
          <div className='m-3 p-5 flex-1'>
            <Form></Form>
          </div>
          {/* form section end */}
        </div>
        {/* content section end */}
      </div>
      </div>
      
    </div>
  );
};

export default ContactForm;