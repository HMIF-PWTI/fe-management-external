import BlogCard from "@/components/BlogCard";
import CategoryBlogButton from "@/components/CategoryBlogButton";
import { FaArrowRight } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
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
    <div className="relative px-36">
      <div>
        <h1 className="text-xl font-semibold">Konten Terbaru</h1>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-10">
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
      <div className="grid grid-cols-5 items-stretch justify-center w-full gap-3 mt-10">
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
