import MainNavigation from "../Components/HomePageComponents/MainNavigation/MainNavigation";
import HeroSlider from "../Components/HomePageComponents/Hero/HeroSilder";
import BoxContent from "../Components/HomePageComponents/Hero/HeroContentBox/Boxs";
import LabServices from "../Components/HomePageComponents/ServicesBox/LabServices";
import ThumbnailSlider from "../Components/ThumbnailSlider/ThumbnailSlider";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <MainNavigation />
      <HeroSlider />
      <BoxContent />
      <LabServices />
      {/* <LabSection /> */}
      <ThumbnailSlider />
      {/* <LatestPosts /> */}
      <Footer />
    </>
  );
};

export default Home;
