import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  description,
  category,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="p-3 hover:bg-blue-100 rounded-xl cursor-pointer w-full h-full flex flex-col gap-2"
    >
      <div className="h-40">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-medium mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-justify line-clamp-3 flex-grow">
          {description}
        </p>
        <p className="mt-2">{category}</p>
      </div>
    </div>
  );
};

export default BlogCard;
