import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import IfPediaPDF from "./Section/IfPediaPDF";

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
    <div className="animate-slide-in py-3">
      <IfPediaPDF />
    </div>
  );
};

export default IfPediaPage;
