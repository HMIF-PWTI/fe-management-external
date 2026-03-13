import { useEffect, useState } from "react";
// import HeroSection from "./section/HeroSection";
import Loading from "@/components/Loading";
import ComingSoon from "./section/ComingSoon";

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
    <div className="animate-slide-in">
      {/* <HeroSection /> */}
      <ComingSoon />
    </div>
  );
};

export default BlogPage;
