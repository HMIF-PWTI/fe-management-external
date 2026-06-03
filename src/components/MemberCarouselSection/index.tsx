import { useCallback, useMemo } from "react";
import MemberCard from "@/components/MemberCard";
import type { MemberCardProps } from "@/components/MemberCard";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface MemberCarouselSectionProps {
  title: React.ReactNode;
  data: MemberCardProps[];
}

const MemberCarouselSection = ({
  title,
  data,
}: MemberCarouselSectionProps) => {
  const plugins = useMemo(() => {
    if (data.length <= 1) return [];

    return [
      Autoplay({
        delay: 3500,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ];
  }, [data.length]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: data.length > 4,
      align: "start",
      containScroll: "trimSnaps",
    },
    plugins
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  if (!data || data.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center px-6 sm:px-12 lg:px-36 space-y-10">
        <h1 className="text-center text-primary2 text-xl lg:text-2xl font-bold uppercase">
          {title}
        </h1>

        <p className="text-gray-400 italic">Data belum tersedia.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-12 lg:px-36 space-y-10">
      <h1 className="text-center text-primary2 text-xl lg:text-2xl font-bold uppercase">
        {title}
      </h1>

      <div className="relative w-full">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {data.map((person, index) => (
              <div
                key={`${person.name}-${index}`}
                className="embla__slide relative flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/4 flex items-center justify-center px-2"
              >
                <MemberCard {...person} />
              </div>
            ))}
          </div>
        </div>

        {data.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Sebelumnya"
              className="hidden sm:flex absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full z-10"
              onClick={scrollPrev}
            >
              <IoIosArrowBack className="text-xl" />
            </button>

            <button
              type="button"
              aria-label="Berikutnya"
              className="hidden sm:flex absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 border border-primary2 text-primary2 hover:bg-primary2 hover:text-white transition-all duration-300 p-2 items-center justify-center w-10 h-10 rounded-full z-10"
              onClick={scrollNext}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default MemberCarouselSection;