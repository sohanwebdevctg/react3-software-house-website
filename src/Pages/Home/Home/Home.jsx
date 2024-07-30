import Banner from '../Banner/Banner';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import OurDemo from '../../../components/OurDemo';
import Brands from '../Brands';
import OurServices from '../OurServices/OurServices';
import Title from '../../../components/Title';
import TypeOfService from '../TypeOfService/TypeOfService';



const Home = () => {
  return (
    <>
      {/* title section start */}
        <Title title={'Home'}></Title>
      {/* title section end */}
      {/* banner section start */}
        <Banner></Banner>
      {/* banner section end */}
      {/* whoWeAre section start */}
        <WhoWeAre></WhoWeAre>
      {/* whoWeAre section end */}
      {/* demo */}
        <OurDemo /> 
      {/* typeOfService section start */}
        <TypeOfService></TypeOfService>
      {/* typeOfService section end */}
      {/* ourServices section start */}
        <OurServices></OurServices>
      {/* ourServices section end */}
      {/* brands section start */}
        <Brands></Brands>
      {/* brands section end */}
    </>
  );
};

export default Home;