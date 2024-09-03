import Banner from '../Banner/Banner';
import TrustedClient from '../TrustedClient/TrustedClient';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import OurServices from '../OurServices/OurServices';
import Title from '../../../components/Title';
import TypeOfService from '../TypeOfService/TypeOfService';
import Brands from '../Brands/Brands';
import OurTeam from '../OurTeam/OurTeam';



const Home = () => {
  return (
    <>
      {/* title section start */}
        <Title title={'Home'}></Title>
      {/* title section end */}
      {/* banner section start */}
        <Banner></Banner>
      {/* banner section end */}
      {/* trustedClient section start */}
      <TrustedClient></TrustedClient>
      {/* trustedClient section end */}
      {/* whoWeAre section start */}
        <WhoWeAre></WhoWeAre>
      {/* whoWeAre section end */}
      {/* ourTeam section start */}
      <OurTeam></OurTeam>
      {/* ourTeam section end */}
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