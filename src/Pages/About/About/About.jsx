import OurTeam from "../OurTeam/OurTeam";
import UpdateNews from "../UpdateNews/UpdateNews";
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
      {/* updateNews section start */}
      <UpdateNews></UpdateNews>
      {/* updateNews section end */}
    </div>
  );
};

export default About;