import Section from "../../Components/Section/Section";
import Hero from "../Hero/Hero";
import FAQPage from "../Hero/FAQPage";
import { StepsData } from "./Steps";

const Index = () => {
  return (
    <div>
      <Hero />
      <Section stepsData={StepsData} />
      <FAQPage />
    </div>
  );
};

export default Index;
