import MemberCarouselSection from "@/components/MemberCarouselSection";
import { sosmaData } from "@/utils/Dhinakara";

const SosmaSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> SOSIAL & KEAGAMAAN
        </>
      }
      data={sosmaData}
    />
  );
};

export default SosmaSection;