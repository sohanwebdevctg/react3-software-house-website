import ContactDescription from '../ContactDescription/ContactDescription';
import Form from '../Form/Form';
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div>
      <div className='container mx-auto my-10 lg:my-20'>
        {/* content section start */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-10'>
          {/* contactDescription section start */}
          <div className='m-3'>
            <ContactDescription></ContactDescription>
          </div>
          {/* contactDescription section end */}
          {/* form section start */}
          <div className='m-3 p-5 shadow-lg -shadow-lg rounded hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50'>
            <Form></Form>
          </div>
          {/* form section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default ContactForm;