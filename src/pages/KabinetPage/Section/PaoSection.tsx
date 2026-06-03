import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const PaoSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.paoData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> PENGEMBANGAN APARATUR ORGANISASI
        </>
      }
      data={displayData}
    />
  );
};

export default PaoSection;