import Hero from "../Hero/Hero";
import FAQPage from "../Hero/FAQPage";
import OilMenu from "../Hero/OilMenu";
import PartnersCarousel from "../../Components/PartnersCarousel/PartnersCarousel";
import VisionMissionValues from "../../Components/VisionMissionValues/VisionMissionValues";
import ServicesCarouselSection from "../../Components/ServicesCarouselSection/ServicesCarouselSection";
import ServiceMarqueeSection from "../../Components/ServiceMarqueeSection/ServiceMarqueeSection";
import SelectedProjectExperience from "../../Components/SelectedProjectExperience/SelectedProjectExperience";

const Index = () => {
  return (
    <div>
      <Hero />
      <OilMenu />
      <PartnersCarousel />
      <VisionMissionValues />
      <ServiceMarqueeSection />
      <ServicesCarouselSection />
      <SelectedProjectExperience />
      <ServiceMarqueeSection bgColor="#000" textColor="#fff"/>
      <br /> <br />
      <FAQPage />
    </div>
  );
};

export default Index;
