import { useEffect, useState } from "react";
<<<<<<< HEAD
import IntiSection from "../AboutPage/Section/IntiSection";
import PwtiSection from "./Section/PwtiSection";
import KesmaSection from "./Section/KesmaSection";
import PaoSection from "./Section/PaoSection";
import KesraSection from "./Section/KesraSection";
import SosmaSection from "./Section/SosmaSection";
import KwuSection from "./Section/KwuSection";
import KominfoSection from "./Section/KominfoSection";
=======
import Loading from "@/components/Loading";
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78

import HeroSection from "./Section/HeroSection";
import IntiSection from "./Section/IntiSection";
import PwtiSection from "./Section/PwtiSection";
import KesmaSection from "./Section/KesmaSection";
import PaoSection from "./Section/PaoSection";
import KesraSection from "./Section/KesraSection";
import SosmaSection from "./Section/SosmaSection";
import KwuSection from "./Section/KwuSection";
import KominfoSection from "./Section/KominfoSection";

export type KabinetKey = "Kabinet Dakshawira" | "Kabinet Dhinakara";

const KabinetPage = () => {
  const [loading, setLoading] = useState(true);
  
  const [selectedKabinet, setSelectedKabinet] = useState<KabinetKey>("Kabinet Dhinakara"); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="py-10 space-y-16 animate-slide-in">
<<<<<<< HEAD
      <HeroSection />
      <IntiSection />
      <PwtiSection />
      <KesmaSection />
      <KesraSection />
      <SosmaSection />
      <PaoSection />
      <KwuSection />
      <KominfoSection />
=======
     
      <HeroSection 
        selectedKabinet={selectedKabinet} 
        setSelectedKabinet={setSelectedKabinet} 
      />
      
     
      <div className="space-y-20">
        <IntiSection selectedKabinet={selectedKabinet} />
        <PwtiSection selectedKabinet={selectedKabinet} />
        <KesmaSection selectedKabinet={selectedKabinet} />
        <KesraSection selectedKabinet={selectedKabinet} />
        <SosmaSection selectedKabinet={selectedKabinet} />
        <PaoSection selectedKabinet={selectedKabinet} />
        <KwuSection selectedKabinet={selectedKabinet} />
        <KominfoSection selectedKabinet={selectedKabinet} />
      </div>
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
    </div>
  );
};

export default KabinetPage;