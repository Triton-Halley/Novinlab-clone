import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import HeroSlider from "../components/home/Hero/Hero";
import LabServices from "../components/home/LabServices/LabServices";
import MainFeature from "../components/home/MainFeature/MainFeature";
import NavigationMenu from "../components/home/NaviagtionMenu/NavigationMenu";
import ThumbnailSlider from "../components/home/ThumbnailSlider/ThumbnailSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>آزمایشگاه نوین</title>
      </Head>
      <NavigationMenu />
      <HeroSlider />
      <MainFeature />
      <LabServices />
      <ThumbnailSlider />
      <Footer />
    </div>
  );
}
