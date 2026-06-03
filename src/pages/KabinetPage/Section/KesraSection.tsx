import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const KesraSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.kesraData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KESENIAN DAN OLAHRAGA
        </>
      }
      data={displayData}
    />
  );
};

export default KesraSection;