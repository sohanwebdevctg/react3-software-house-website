import OurTeam from "../OurTeam/OurTeam";
import Title from './../../../components/Title';


const About = () => {
  return (
    <div>
      {/* title section start */}
      <Title title={'About'}></Title>
      {/* title section end */}
      {/* ourTeam section start */}
      <OurTeam></OurTeam>
      {/* ourTeam section end */}
    </div>
  );
};

export default About;