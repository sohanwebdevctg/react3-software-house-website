import './Contact.css'
import Location from "../Location/Location";
import ContactForm from '../ContactForm/ContactForm';


const Contact = () => {
  return (
    <div>
      {/* location section start */}
      <Location></Location>
      {/* location section end */}
      {/* contactForm section start */}
      <ContactForm></ContactForm>
      {/* contactForm section end */}
    </div>
  );
};

export default Contact;