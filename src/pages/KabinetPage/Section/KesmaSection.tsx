import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const KesmaSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.kesmaData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KESEJAHTERAAN MAHASISWA
        </>
      }
      data={displayData}
    />
  );
};

export default KesmaSection;