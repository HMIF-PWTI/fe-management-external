import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import HeroSection from "./Section/HeroSection";

const IfPediaPage = () => {
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
    <div className="animate-slide-in py-10">
      <HeroSection />
    </div>
  );
};

export default IfPediaPage;
