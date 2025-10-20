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
            <div style={{ marginTop: -120 }}>
              <Index />
              <Footer />
            </div>
          }
        />

        {/* About Us */}
        <Route
          path="/about-us"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="ABOUT US" />

              <VisionMissionValues />
              {/* <ServiceExperienceGrid /> */}
              <Footer />
            </div>
          }
        />

        {/* CSR & HSE */}
        <Route
          path="/csr"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="CSR and HSE" />
              <CSRandHSESection />
              <Footer />
            </div>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="OUR SERVICES" />
              <AboutAndServicesSection />
              <ServicesApproachSection />
              <UniqueServicesSection />
              <Footer />
            </div>
          }
        />

        {/* Community Relations Policy */}
        <Route
          path="/relations-policy"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="COMMUNITY RELATION POLICY" />
              <CommunityRelationsPolicy />
              <Footer />
            </div>
          }
        />

        {/* HSES Policy */}
        <Route
          path="/hses-policy"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="HEALTH, SAFETY, ENVIRONMENT AND SECURITY (HSES) POLICY" />
              <HsesPolicy />
              <Footer />
            </div>
          }
        />

        {/* FAQs */}
        <Route
          path="/faqs"
          element={
            <div style={{ marginTop: -120 }}>
              <BlogHero title="FAQS" />
              <FAQPage />
              <Footer />
            </div>
          }
        />

        <Route
          path="/contact-us"
          element={
            <div style={{ marginTop: -120 }}>
              <Footer margin/>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
