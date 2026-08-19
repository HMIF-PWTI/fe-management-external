import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const KwuSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.kwuData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KEWIRAUSAHAAN
        </>
      }
      data={displayData}
    />
  );
};

export default KwuSection;
