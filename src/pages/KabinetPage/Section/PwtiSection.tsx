import { useCallback } from "react";
import MemberCard from "@/components/MemberCard";
<<<<<<< HEAD
import { pwtiData } from "@/utils/DummyData";
=======
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

<<<<<<< HEAD
const PwtiSection = () => {
=======
// 1. IMPORT DATA DINAMIS & TYPE
import * as Dhinakara from "@/utils/Dhinakara";
import * as Dakshawira from "@/utils/Dakshawira";
import { KabinetKey } from "../index";


interface SectionProps {
  selectedKabinet: KabinetKey;
}

const PwtiSection = ({ selectedKabinet }: SectionProps) => { // GANTI NAMA KOMPONEN
  const source = selectedKabinet === "Kabinet Dhinakara" ? Dhinakara : Dakshawira;
  
  const displayData = source.pwtiData || []; 

>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
  const autoplayOptions = Autoplay({ delay: 3000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayOptions]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-12 lg:px-36 space-y-10">
<<<<<<< HEAD
      <h1 className="text-center text-primary2 text-xl lg:text-2xl font-bold">
        DIVISI <br /> PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI
      </h1>
      <div className="relative w-full">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {pwtiData.map((data, index) => (
=======
      <h1 className="text-center text-primary2 text-xl lg:text-2xl font-bold uppercase">
         DIVISI <br /> PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI
      </h1>

      <div className="relative w-full">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {displayData.map((data, index) => (
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
              <div
                key={index}
                className="embla__slide relative flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/4 flex items-center justify-center px-2"
              >
                <MemberCard {...data} />
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
        <button
          className="hidden sm:flex absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full"
          onClick={scrollPrev}
        >
          <IoIosArrowBack className="text-xl" />
        </button>
        <button
          className="hidden sm:flex absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full"
          onClick={scrollNext}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
=======

        {displayData.length > 1 && (
          <>
            <button
              className="hidden sm:flex absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full z-10"
              onClick={scrollPrev}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
            <button
              className="hidden sm:flex absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full z-10"
              onClick={scrollNext}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </>
        )}
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default PwtiSection;
=======
export default PwtiSection;
>>>>>>> 554f0d16a65c7bb0bd1710382836c8bcaba85f78
