import React from "react";
import classnames from "classnames";

export default function Badge({ children, color = "blue" }) {
  const badgeClasses = classnames({
    ["p-2 rounded-lg inline-flex justify-center items-center text-sm font-semibold uppercase"]: true,
    ["bg-orange-100 text-orange-500"]: color == "orange" ? true : false,
    ["bg-red-100 text-red-500"]: color == "red" ? true : false,
    ["bg-indigo-100 text-indigo-500"]: color == "indigo" ? true : false,
    ["bg-yellow-100 text-yellow-500"]: color == "yellow" ? true : false,
    ["bg-green-100 text-green-500"]: color == "green" ? true : false,
    ["bg-blue-100 text-blue-500"]:
      color == ("blue" || null || "" || false || undefined) ? true : null,
  });

  return (
    <div className={badgeClasses}>
      <span>{children}</span>
    </div>
  );
}
