import type { MemberCardProps } from "./types";

const optimizeCloudinaryImage = (url: string, width = 500) => {
  if (!url.includes("res.cloudinary.com")) {
    return url;
  }

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,c_fill,w_${width},ar_3:4/`
  );
};

const MemberCard = ({ name, position, image }: MemberCardProps) => {
  return (
    <article className="w-full max-w-[260px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={optimizeCloudinaryImage(image, 500)}
          srcSet={`
            ${optimizeCloudinaryImage(image, 300)} 300w,
            ${optimizeCloudinaryImage(image, 500)} 500w,
            ${optimizeCloudinaryImage(image, 700)} 700w
          `}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 260px"
          alt={`${name} - ${position}`}
          width={500}
          height={667}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-[#002B5B] font-extrabold text-sm md:text-base uppercase tracking-tight leading-tight min-h-8 flex items-center justify-center text-center">
        {position}
      </h3>

      <p className="text-[#002B5B] text-sm md:text-base font-medium mt-2 uppercase leading-snug min-h-12 text-center">
        {name}
      </p>
    </article>
  );
};

export default MemberCard;