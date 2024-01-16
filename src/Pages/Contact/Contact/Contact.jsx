import './Contact.css'
import Location from "../Location/Location";
import ContactForm from '../ContactForm/ContactForm';
import ContactTitle from '../ContactTitle/ContactTitle';
import Title from '../../../components/Title';


const Contact = () => {
  return (
    <div>
      {/* title section start */}
      <Title title={'Content'}></Title>
      {/* title section end */}
      {/* contactTitle section start */}
      <ContactTitle></ContactTitle>
      {/* contactTitle section end */}
      {/* contactForm section start */}
      <ContactForm></ContactForm>
      {/* contactForm section end */}
      {/* location section start */}
      <Location></Location>
      {/* location section end */}
    </div>
  );
};

export default Contact;