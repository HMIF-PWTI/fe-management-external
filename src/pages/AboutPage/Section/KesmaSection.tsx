import { useCallback } from "react";
import MemberCard from "@/components/MemberCard";
import { kesmaData } from "@/utils/DummyData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const KesmaSection = () => {
  const autoplayOptions = Autoplay({ delay: 1500 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayOptions]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center justify-center px-36 space-y-10">
      <h1 className="text-center text-primary2 text-2xl font-bold">
        DIVISI <br /> KESEJAHTERAAN MAHASISWA
      </h1>
      <div className="relative w-full">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {kesmaData.map((data, index) => (
              <div
                key={index}
                className="embla__slide flex w-1/4 flex-shrink-0 items-center justify-center px-2 h-[500px]"
              >
                <MemberCard {...data} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full"
          onClick={scrollPrev}
        >
          <IoIosArrowBack className="text-xl" />
        </button>
        <button
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full"
          onClick={scrollNext}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default KesmaSection;
