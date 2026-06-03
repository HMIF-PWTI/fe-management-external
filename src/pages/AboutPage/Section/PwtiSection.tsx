import MemberCarouselSection from "@/components/MemberCarouselSection";
import { pwtiData } from "@/utils/Dhinakara";

const PwtiSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI
        </>
      }
      data={pwtiData}
    />
  );
};

export default PwtiSection;