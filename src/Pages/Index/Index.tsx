import Section from "../../Components/Section/Section";
import Hero from "../Hero/Hero";
import { StepsData } from "./Steps";
import FAQPage from "../Hero/FAQPage";
import { StepsData2 } from "./Steps2";

const Index = () => {
  return (
    <div>
      <Hero />
      <Section stepsData={StepsData} />
      <FAQPage />
      <br /> <br /> <br />
      <Section stepsData={StepsData2} />
    </div>
  );
};

export default Index;
