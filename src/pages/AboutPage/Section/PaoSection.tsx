import MemberCarouselSection from "@/components/MemberCarouselSection";
import { paoData } from "@/utils/Dhinakara";

const PaoSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> PENGEMBANGAN APARATUR ORGANISASI
        </>
      }
      data={paoData}
    />
  );
};

export default PaoSection;