
import Brands from '../Brands';
import TopSection from '../TopSection'
import WhyWeAre from './../WhyWeAre';
import OurServices from '../OurServices/OurServices';
import Title from '../../../components/Title';
import TypeOfService from '../TypeOfService/TypeOfService';


const Home = () => {
  return (
    <>
      {/* title section start */}
      <Title title={'Home'}></Title>
      {/* title section end */}
      {/* top section start */}
        <TopSection></TopSection>
      {/* top section end */}
      {/* whyWeAre section start */}
        <WhyWeAre></WhyWeAre>
      {/* whyWeAre section end */}
      {/* typeOfService section start */}
      <TypeOfService></TypeOfService>
      {/* typeOfService section end */}
      {/* ourServices section start */}
      <OurServices></OurServices>
      {/* ourServices section end */}
      <Brands></Brands>
    </>
  );
};

export default Home;