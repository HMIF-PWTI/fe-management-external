import Loading from "@/components/Loading";
import HeroSection from "./Section/HeroSection";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-10 space-y-16 animate-slide-in">
      <HeroSection />
    </div>
  );
};

export default AboutPage;
