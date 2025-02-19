import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Index from "./Pages/Index/Index";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FAQPage from "./Pages/Hero/FAQPage";
import Section from "./Components/Section/Section";
import { StepsData } from "./Pages/Index/Steps";
import BlogHero from "./Pages/About/BlogHero/BlogHero";
import Services from "./Pages/Services/IndexServ";
import HsesPolicy from "./Pages/About/HsesPolicy/HsesPolicy";
import CommunityRelationsPolicy from "./Pages/About/CommunityRelationsPolicy/CommunityRelationsPolicy";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="About Us" />
              <Section stepsData={StepsData} />
            </div>
          }
        />

        <Route
          path="/services"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="Our Services" />
              <Services />
            </div>
          }
        />

        <Route
          path="/relations-policy"
          element={
            <div style={{ marginTop: 60 }}>
              <CommunityRelationsPolicy />
            </div>
          }
        />
        <Route
          path="/hses-policy"
          element={
            <div style={{ marginTop: 60 }}>
              <HsesPolicy />
            </div>
          }
        />
        <Route
          path="/faqs"
          element={
            <div style={{ marginTop: 60 }}>
              <BlogHero title="FAQS" />
              <FAQPage />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={<div style={{ marginTop: 100 }}></div>}
        />
      </Routes>

      {location.pathname !== "/contact-us" ? (
        <Footer showContactUs />
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
