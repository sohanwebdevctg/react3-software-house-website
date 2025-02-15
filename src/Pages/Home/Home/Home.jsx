import Banner from "../Banner/Banner";
import TrustedClient from "../TrustedClient/TrustedClient";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import OurServices from "../OurServices/OurServices";
import Title from "../../../components/Title";
import Brands from "../Brands/Brands";
import OurTeam from "../OurTeam/OurTeam";
import Available from "../Available/Available";

const Home = () => {
  return (
    <>
      {/* title section start */}
      <Title title={"Home"}></Title>
      {/* title section end */}
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* whoWeAre section start */}
      <WhoWeAre></WhoWeAre>
      {/* whoWeAre section end */}
      {/* ourTeam section start */}
      <OurTeam></OurTeam>
      {/* ourTeam section end */}
      {/* ourServices section start */}
      <OurServices></OurServices>
      {/* ourServices section end */}
      {/* brands section start */}
      <Brands></Brands>
      {/* brands section end */}
      {/* available section start */}
      <Available></Available>
      {/* available section end */}
      {/* trustedClient section start */}
      <TrustedClient></TrustedClient>
      {/* trustedClient section end */}
    </>
  );
};

export default Home;
