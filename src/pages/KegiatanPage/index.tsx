import { useEffect, useState } from "react";
import HeroSection from "./Section/HeroSection";
import Loading from "@/components/Loading";
import ActivitySection from "./Section/ActivitySection";

const KegiatanPage = () => {
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
    <div className="animate-slide-in py-10 space-y-10">
      <HeroSection />
      <ActivitySection />
    </div>
  );
};

export default KegiatanPage;
