import BestUsers from "../BestUsers/BestUsers";
import NoteService from "../NotchService/NoteService";
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
      {/* bestUsers section start */}
      <BestUsers></BestUsers>
      {/* bestUsers section end */}
      {/* updateNews section start */}
      <UpdateNews></UpdateNews>
      {/* updateNews section end */}
      {/* notchService section start */}
      <NoteService></NoteService>
      {/* notchService section end */}
    </div>
  );
};

export default About;