import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Index from "./Pages/Index/Index";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FAQPage from "./Pages/Hero/FAQPage";
import Section from "./Components/Section/Section";
import BlogHero from "./Pages/About/BlogHero/BlogHero";
import HsesPolicy from "./Pages/About/HsesPolicy/HsesPolicy";
import CommunityRelationsPolicy from "./Pages/About/CommunityRelationsPolicy/CommunityRelationsPolicy";
import { StepsAbout } from "./Pages/Index/StepAbout";
import ServicesDataNew from "./Pages/Services/ServicesDataNew";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ marginTop: -16 }}>
              <Index />
              <div style={{ marginTop: 80 }}></div>
              <Footer hideContactUs showContactUs />
            </div>
          }
        />
        <Route
          path="/about-us"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="About Us" />
              <Section stepsData={StepsAbout} />
              <Footer hideContactUs showContactUs />
            </div>
          }
        />

        <Route
          path="/services"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="Our Services" />
              <Section stepsData={ServicesDataNew} />
              <Footer hideContactUs showContactUs />
            </div>
          }
        />

        <Route
          path="/relations-policy"
          element={
            <div style={{ marginTop: 0 }}>
              <BlogHero title="COMMUNITY RELATION POLICY" />
              <CommunityRelationsPolicy />
              <Footer />
            </div>
          }
        />
        <Route
          path="/hses-policy"
          element={
            <div style={{ marginTop: 0 }}>
              <BlogHero title="HEALTH, SAFETY, ENVIRONMENT AND SECURITY (HSES) POLICY" />

              <HsesPolicy />
              <Footer />
            </div>
          }
        />
        <Route
          path="/faqs"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="FAQS" />
              <FAQPage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <div style={{ marginTop: 100 }}>
              <Footer />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
