import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const PwtiSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.pwtiData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI
        </>
      }
      data={displayData}
    />
  );
};

export default PwtiSection;