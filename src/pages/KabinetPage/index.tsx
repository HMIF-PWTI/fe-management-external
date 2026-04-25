import Loading from "@/components/Loading";
import HeroSection from "./Section/HeroSection";
import { useEffect, useState } from "react";
import IntiSection from "../AboutPage/Section/IntiSection";
import PwtiSection from "./Section/PwtiSection";
import KesmaSection from "./Section/KesmaSection";
import PaoSection from "./Section/PaoSection";
import KesraSection from "./Section/KesraSection";
import SosmaSection from "./Section/SosmaSection";
import KwuSection from "./Section/KwuSection";
import KominfoSection from "./Section/KominfoSection";


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
      {/* <IntiSection />
      <PwtiSection />
      <KesmaSection />
      <KesraSection />
      <SosmaSection />
      <PaoSection />
      <KwuSection />
      <KominfoSection /> */}
    </div>
  );
};

export default AboutPage;
