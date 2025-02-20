import Section from "../../Components/Section/Section";
import Hero from "../Hero/Hero";
import { StepsData } from "./Steps";
import Services from "../Services/IndexServ";

const Index = () => {
  return (
    <div>
      <Hero />
      <Section stepsData={StepsData} />
      <Services />
    </div>
  );
};

export default Index;
