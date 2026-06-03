import MemberCarouselSection from "@/components/MemberCarouselSection";
import { kwuData } from "@/utils/Dhinakara";

const KwuSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KEWIRAUSAHAAN
        </>
      }
      data={kwuData}
    />
  );
};

export default KwuSection;