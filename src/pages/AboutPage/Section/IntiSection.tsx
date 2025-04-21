import kadiv from "assets/kadiv.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const images = [kadiv, kadiv, kadiv];

const IntiSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-36">
      <h1 className="text-2xl font-bold text-primary2 mb-10">4 INTI</h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect="creative"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full max-w-5xl rounded-xl overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntiSection;
