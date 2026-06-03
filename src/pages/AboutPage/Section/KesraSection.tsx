import MemberCarouselSection from "@/components/MemberCarouselSection";
import { kesraData } from "@/utils/Dhinakara";

const KesraSection = () => {
  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KESENIAN DAN OLAHRAGA
        </>
      }
      data={kesraData}
    />
  );
};

export default KesraSection;