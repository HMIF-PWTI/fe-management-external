import { useCallback } from "react";
import MemberCard from "@/components/MemberCard";
import { pwtiData } from "@/utils/DummyData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PwtiSection = () => {
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
      <h1 className="text-center text-primary2 text-xl lg:text-2xl font-bold">
        DIVISI <br /> PENGEMBANGAN WAWASAN TEKNOLOGI INFORMASI
      </h1>
      <div className="relative w-full">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {pwtiData.map((data, index) => (
              <div
                key={index}
                className="embla__slide relative flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/4 flex items-center justify-center px-2"
              >
                <MemberCard {...data} />
              </div>
            ))}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default PwtiSection;
