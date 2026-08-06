import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const KominfoSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.kominfoData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> KOMUNIKASI & INFORMASI
        </>
      }
      data={displayData}
    />
  );
};

export default KominfoSection;