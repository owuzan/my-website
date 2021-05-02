import React from "react";
import classnames from "classnames";

export default function Card({ transparent, children, title, direction, top }) {
  const cardClasses = classnames({
    ["rounded-lg flex flex-col space-y-6 p-12 text-gray-500 text-lg font-medium"]: true,
    ["border-gray-200 border bg-white shadow"]: !transparent,
    ["items-start"]: direction != "right" ? true : false,
    ["items-end"]: direction == "right" ? true : false,
  });
  return (
    <div className={cardClasses}>
      {top ? top : null}
      {title ? (
        <h3 className="text-4xl text-gray-900 font-bold">{title}</h3>
      ) : null}
      {children}
    </div>
  );
}
