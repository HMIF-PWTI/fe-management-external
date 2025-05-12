import { useEffect, useState } from "react";
import HeroSection from "./section/HeroSection";
import Loading from "@/components/Loading";

const BlogPage = () => {
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

export default BlogPage;
