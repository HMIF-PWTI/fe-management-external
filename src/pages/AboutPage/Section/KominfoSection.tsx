import MemberCarouselSection from "@/components/MemberCarouselSection";
import { kominfoData } from "@/utils/Dhinakara";

const KominfoSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KOMUNIKASI & INFORMASI
        </>
      }
      data={kominfoData}
    />
  );
};

export default KominfoSection;