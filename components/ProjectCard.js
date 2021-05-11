import React from "react";

const ProjectCard = (props) => {
  const { title, children, top } = props;
  const CardTop = () => top;

  return (
    <div className="bg-white rounded-lg border border-gray-200 flex space-x-6 items-center">
      <figure className="flex-none">
        <img
          src="/project.png"
          alt={title}
          className="w-[410px] h-[376px] object-cover"
        />
      </figure>
      <div className="flex-auto flex flex-col space-y-6 text-gray-500 font-medium text-lg p-12">
        <CardTop />
        <h2 className="text-4xl font-bold text-gray-900 line-clamp-1">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
