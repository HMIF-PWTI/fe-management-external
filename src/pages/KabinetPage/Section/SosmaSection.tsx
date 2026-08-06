import MemberCarouselSection from "@/components/MemberCarouselSection";
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";

interface SectionProps {
  selectedKabinet: KabinetKey;
}

const SosmaSection = ({ selectedKabinet }: SectionProps) => {
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  const displayData = source.sosmaData || [];

  return (
    <MemberCarouselSection
      title={
        <>
          DIVISI <br /> SOSIAL & KEAGAMAAN
        </>
      }
      data={displayData}
    />
  );
};

export default SosmaSection;