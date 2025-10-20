import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Index from "./Pages/Index/Index";
import FAQPage from "./Pages/Hero/FAQPage";
import BlogHero from "./Pages/About/BlogHero/BlogHero";
import HsesPolicy from "./Pages/About/HsesPolicy/HsesPolicy";
import CommunityRelationsPolicy from "./Pages/About/CommunityRelationsPolicy/CommunityRelationsPolicy";
import ServicesApproachSection from "./Pages/ServicesApproachSection/ServicesApproachSection";
import AboutAndServicesSection from "./Pages/About/AboutAndServicesSection/AboutAndServicesSection";

// Components
import UniqueServicesSection from "./Components/UniqueServicesSection/UniqueServicesSection";
// import ServiceExperienceGrid from "./Components/ServiceExperienceGrid/ServiceExperienceGrid";
import CSRandHSESection from "./Components/CSRandHSESection/CSRandHSESection";
import FloatingContactButton from "./Components/FloatingContactButton/FloatingContactButton";
import VisionMissionValues from "./Components/VisionMissionValues/VisionMissionValues";

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactButton />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Index />
              <Footer />
            </>
          }
        />

        {/* About Us */}
        <Route
          path="/about-us"
          element={
            <>
              <BlogHero title="ABOUT US" />
              <AboutAndServicesSection />
<VisionMissionValues />
              {/* <ServiceExperienceGrid /> */}
              <Footer />
            </>
          }
        />

        {/* CSR & HSE */}
        <Route
          path="/csr"
          element={
            <>
              <BlogHero title="CSR and HSE" />
              <CSRandHSESection />
              <Footer />
            </>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <>
              <BlogHero title="OUR SERVICES" />
              <ServicesApproachSection />
              <UniqueServicesSection />
              <Footer />
            </>
          }
        />

        {/* Community Relations Policy */}
        <Route
          path="/relations-policy"
          element={
            <>
              <BlogHero title="COMMUNITY RELATION POLICY" />
              <CommunityRelationsPolicy />
              <Footer />
            </>
          }
        />

        {/* HSES Policy */}
        <Route
          path="/hses-policy"
          element={
            <>
              <BlogHero title="HEALTH, SAFETY, ENVIRONMENT AND SECURITY (HSES) POLICY" />
              <HsesPolicy />
              <Footer />
            </>
          }
        />

        {/* FAQs */}
        <Route
          path="/faqs"
          element={
            <>
              <BlogHero title="FAQS" />
              <FAQPage />
              <Footer />
            </>
          }
        />

        {/* Contact Us */}
        <Route path="/contact-us" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;