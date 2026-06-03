import MemberCarouselSection from "@/components/MemberCarouselSection";
import { kesmaData } from "@/utils/Dhinakara";

const KesmaSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KESEJAHTERAAN MAHASISWA
        </>
      }
      data={kesmaData}
    />
  );
};

export default KesmaSection;