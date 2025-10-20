import React, { useEffect, useState } from "react";
import heroImage from "../../../assets/sections/westhova_headshot.png";

interface BlogHeroProps {
  title: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log(scrollY)
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center bg-center bg-no-repeat bg-cover h-[300px] md:h-[600px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        // backgroundPosition: `center ${scrollY * 0.5}px`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Title */}
      <h1
        className="relative text-3xl md:text-5xl font-bold text-white text-center px-4 max-w-3xl"
        style={{ fontFamily: "'Whyte Inktrap', serif" }}
      >
        {title}
      </h1>
    </section>
  );
};

export default BlogHero;
