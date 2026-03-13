import BlogCard from "@/components/BlogCard";
import CategoryBlogButton from "@/components/CategoryBlogButton";
import { FaArrowRight, FaUniversity } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineEventNote } from "react-icons/md";
import Image from "@/assets/roti2.jpg";

const BlogData = [
  {
    image: Image,
    id: "1",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "2",
    title: "Roti paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "3",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "4",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    image: Image,
    id: "5",
    title: "Roti Paling Enak Sedunia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const HeroSection = () => {
  return (
    <div className="relative px-6 md:px-12 lg:px-36 py-10">
      <div>
        <h1 className="text-xl font-semibold">Konten Terbaru</h1>
      </div>
      <div className="flex space-x-4 mt-10 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-5 lg:space-x-0">
        <CategoryBlogButton
          label="Semua"
          icon={<FaArrowRight />}
          variant="primary"
        />
        <CategoryBlogButton
          label="Teknologi"
          icon={<GrTechnology />}
          variant="secondary"
        />
        <CategoryBlogButton
          label="Pendidikan"
          icon={<LuGraduationCap />}
          variant="tertiary"
        />
        <CategoryBlogButton
          label="Kampus"
          icon={<FaUniversity />}
          variant="primary"
        />
        <CategoryBlogButton
          label="Event"
          icon={<MdOutlineEventNote />}
          variant="secondary"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-stretch justify-center w-full gap-6 mt-10">
        {BlogData.map((blog, index) => (
          <div key={index} className="h-full">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
